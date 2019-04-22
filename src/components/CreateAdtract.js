import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import Chip from '@material-ui/core/Chip';
import Web3 from 'web3';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    background:
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/pictures/createAdtract.jpg")',
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100vh - 65px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 60px)'
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexGrow: '1'
  },
  textField: {
    width: '100%'
  },
  paper: {
    padding: theme.spacing.unit * 5,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '10vh',
    borderRadius: '20px'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  buttonCreate: {
    margin: theme.spacing.unit,
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: '#424242'
    }
  },
  buttonDelete: {
    margin: theme.spacing.unit,
    backgroundColor: '#d50000',
    '&:hover': {
      backgroundColor: '#ff1744'
    }
  },
  chip: {
    margin: theme.spacing.unit,
    backgroundColor: 'black',
    color: 'white'
  },
  inputFocused: {
    '&:after': {
      borderBottomColor: 'black'
    }
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'black'
    }
  },
  cssFocused: {},
  question: {
    color: 'white'
  }
});

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

class CreateAdtract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      percentage: 0,
      URL: '',
      account: ['loading...'],
      deployed: false
    };
    this._isMounted = false;
  }

  getAccounts = async () => {
    try {
      const acc = await web3.eth.getAccounts();
      if (this._isMounted) this.setState({ account: acc[0] });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getAccounts();
    this._isMounted = true;
  }

  componentDidUpdate() {
    this.getAccounts();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { description, title, percentage, URL } = this.state;
    adtractorContract.methods
      .newAdTract(percentage, description, URL, title)
      .send({ from: this.state.account })
      .then(this.deployed());
  };

  deployed = () => {
    this.setState({
      title: '',
      description: '',
      percentage: 0,
      URL: '',
      deployed: true
    });
  };

  createAnotherContract = () => {
    this.setState({ deployed: false });
  };

  render() {
    const { classes } = this.props;

    if (this.state.deployed) {
      return (
        <div className={classes.root}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={24}
          >
            <Grid item xs={12} className={classes.question}>
              <h1>Do you want to create another contract?</h1>
            </Grid>
            <Grid container item xs={12} justify="center" alignItems="center">
              <Button
                variant="contained"
                color="secondary"
                className={classes.buttonDelete}
                component={Link}
                to="/"
              >
                No
                <DeleteIcon className={classes.rightIcon} />
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonCreate}
                onClick={this.createAnotherContract}
              >
                Yes
                <SendIcon className={classes.rightIcon} />
              </Button>
            </Grid>
          </Grid>
        </div>
      );
    }
    return (
      <div className={classes.root}>
        <Chip
          label={`Account:${this.state.account}`}
          className={classes.chip}
        />
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <Paper className={classes.paper}>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="column"
              spacing={24}
            >
              <Grid item xs={12}>
                <TextField
                  id="standard-title"
                  label="Title"
                  className={classes.textField}
                  onChange={this.handleChange('title')}
                  value={this.state.title}
                  margin="normal"
                  InputProps={{
                    classes: {
                      underline: classes.inputFocused
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-url"
                  label="URL (Optional)"
                  className={classes.textField}
                  onChange={this.handleChange('URL')}
                  value={this.state.URL}
                  margin="normal"
                  InputProps={{
                    classes: {
                      underline: classes.inputFocused
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-description"
                  label="Description"
                  className={classes.textField}
                  onChange={this.handleChange('description')}
                  value={this.state.description}
                  margin="normal"
                  InputProps={{
                    classes: {
                      underline: classes.inputFocused
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-number"
                  label="Reward percentage"
                  value={this.state.age}
                  onChange={this.handleChange('percentage')}
                  type="number"
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    classes: {
                      underline: classes.inputFocused
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused
                    }
                  }}
                />
              </Grid>
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                direction="row"
                spacing={24}
              >
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.buttonDelete}
                  >
                    Delete
                    <DeleteIcon className={classes.rightIcon} />
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.buttonCreate}
                    type="submit"
                  >
                    Create
                    <SendIcon className={classes.rightIcon} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(CreateAdtract);
