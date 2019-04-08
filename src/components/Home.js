import React, { Component } from 'react';
import Web3 from 'web3';

let web3;

if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
}

const ADTRACTOR_ADDRESS = '0xafbd57bdba83e4d0691b5703c8fde37b90b5b689';
const ADTRACTOR_ABI = [
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
    constant: false,
    inputs: [
      {
        name: 'percentageReward',
        type: 'uint256'
      }
    ],
    name: 'newAdTract',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }
];

const adtractorContract = new web3.eth.Contract(
  ADTRACTOR_ABI,
  ADTRACTOR_ADDRESS
);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: [],
      adtracts: ['loading...']
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
    for (let i = 0; i < 10; i++) {
      const result = await adtractorContract.methods.adtracts(i).call();
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
    const adtractsRender = this.state.adtracts.map((adtract) => {
      return <div>{adtract}</div>;
    });
    return adtractsRender;
  }
}
