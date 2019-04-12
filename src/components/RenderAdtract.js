import React, { Component } from 'react';
import Web3 from 'web3';

let web3;

if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
}

const ADTRACT_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: 'customer',
        type: 'address'
      }
    ],
    name: 'refer',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'title',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'url',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'description',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        name: 'reward',
        type: 'uint256'
      },
      {
        name: '_owner',
        type: 'address'
      },
      {
        name: '_description',
        type: 'string'
      },
      {
        name: '_url',
        type: 'string'
      },
      {
        name: '_title',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback'
  }
];

class RenderAdtract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'loading...',
      url: 'loading...',
      title: 'loading...',
      address: 'loading...'
    };
    this._isMounted = false;
  }

  getInfo = async (address) => {
    const adtractContract = new web3.eth.Contract(ADTRACT_ABI, address);
    let description = await adtractContract.methods.description().call();
    let title = await adtractContract.methods.title().call();
    let url = await adtractContract.methods.url().call();
    this.setState({ description, title, url });
  };

  componentDidMount() {
    this.getInfo(this.props.address);
  }

  render() {
    return (
      <div>
        Title: {this.state.title} Description: {this.state.description}, URL:{' '}
        {this.state.url}
      </div>
    );
  }
}

export default RenderAdtract;
