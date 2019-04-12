import React, { Component } from 'react';
import Web3 from 'web3';
import RenderAdtract from './RenderAdtract';

let web3;

if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
}

const ADTRACTOR_ADDRESS = '0x8D5334727d81CC2EF3b3e8d3623769C2F2aA4A9d';
const ADTRACTOR_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: 'percentageReward',
        type: 'uint256'
      },
      {
        name: 'description',
        type: 'string'
      },
      {
        name: 'url',
        type: 'string'
      },
      {
        name: 'title',
        type: 'string'
      }
    ],
    name: 'newAdTract',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'adtracts',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'contractsCount',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];

const adtractorContract = new web3.eth.Contract(
  ADTRACTOR_ABI,
  ADTRACTOR_ADDRESS
);

class AdtractListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: [],
      adtracts: []
    };
    this._isMounted = false;
  }

  getAccounts = async () => {
    try {
      const acc = await web3.eth.getAccounts();
      if (this._isMounted) this.setState({ account: acc });
    } catch (err) {
      console.log(err);
    }
  };

  getAdtracts = async () => {
    const _adtracts = [];
    let i = await adtractorContract.methods.contractsCount().call();
    for (let x = 0; x < i; x++) {
      const result = await adtractorContract.methods.adtracts(x).call();
      _adtracts.push(result);
    }
    this.setState({ adtracts: _adtracts });
  };

  componentDidMount() {
    this.getAccounts();
    this.getAdtracts();
    this._isMounted = true;
  }

  componentDidUpdate() {
    this.getAccounts();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (!window.web3) {
      return <div>Please make sure to install Metamask</div>;
    }
    if (this.state.account.length === 0) {
      return <div>Please log in into Metamask</div>;
    }
    if (this.state.adtracts) {
      const adtractsRender = this.state.adtracts.map((adtract) => {
        return (
          <div key={adtract}>
            {adtract}
            <RenderAdtract address={adtract} />
            <div />
          </div>
        );
      });
      return adtractsRender;
    } else {
      return <div>loading...</div>;
    }
  }
}

export default AdtractListing;
