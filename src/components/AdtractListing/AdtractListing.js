import React, { Component } from 'react';
import Web3 from 'web3';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import RenderAdtract from './RenderAdtract';
import { withStyles } from '@material-ui/core';

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

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    width: '100%',
    overflow: 'hidden'
  },
  gridList: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  title: {}
});

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
    const { classes } = this.props;
    if (!window.web3) {
      return <div>Please make sure to install Metamask</div>;
    }
    if (this.state.account.length === 0) {
      return <div>Please log in into Metamask</div>;
    }
    if (this.state.adtracts) {
      return (
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid container item spacing={24} className={classes.title}>
              <Grid item xs={12}>
                <h1>List of AdTracts</h1>
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <GridList
                  cellHeight={220}
                  cols={1}
                  className={classes.gridList}
                >
                  {this.state.adtracts.map(adtract => {
                    return (
                      <GridListTile key={adtract}>
                        <RenderAdtract address={adtract} />
                      </GridListTile>
                    );
                  })}
                </GridList>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}

export default withStyles(styles)(AdtractListing);
