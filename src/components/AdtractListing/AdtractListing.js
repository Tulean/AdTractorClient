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
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(255,255,255,0.5)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'white',
      outline: '1px solid slategrey'
    }
  },
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    width: '100%',
    overflow: 'hidden',
    background:
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/pictures/contracts.jpg") no-repeat',
    backgroundSize: 'cover !important'
  },
  gridList: {
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100vh - 65px - 8vh)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 60px - 8vh)'
    },
    height: '40vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  tile: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    height: '2vh',
    color: 'white',
    [theme.breakpoints.up('xs')]: {
      fontSize: 'calc(1vw + 7px)',
      marginBottom: '70px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '3vw',
      marginBottom: '6vh'
    }
  }
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
          <Grid container spacing={0} style={{ overflow: 'hidden' }}>
            <Grid container item spacing={0} className={classes.title}>
              <Grid item xs={12}>
                <h1>List of AdTracts</h1>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12} className={classes.gridList}>
                <GridList cellHeight={200} cols={1}>
                  {this.state.adtracts.map(adtract => {
                    return (
                      <GridListTile key={adtract} className={classes.tile}>
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
