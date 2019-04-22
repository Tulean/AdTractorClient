import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
  card: {
    width: '50vw',
    fontSize: '2vw'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: '1.5vw'
  },
  pos: {
    marginBottom: 12
  }
});

class RenderAdtract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'loading...',
      url: 'loading...',
      title: 'loading...',
      address: this.props.address
    };
    this._isMounted = false;
  }

  getInfo = async address => {
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
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {this.state.address}
          </Typography>
          <Typography variant="h5" component="h2">
            {this.state.title}
          </Typography>
          <Typography component="p">{this.state.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(RenderAdtract);
