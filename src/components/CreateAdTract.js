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

const styles = (theme) => ({
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
    marginTop: '10vh'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  chip: {
    margin: theme.spacing.unit,
    backgroundColor: '#32CD32'
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

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (e) => {
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
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={24}
        >
          <Grid item xs={12}>
            <div>Do you want to create another contract?</div>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/"
            >
              No
              <DeleteIcon className={classes.rightIcon} />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.createAnotherContract}
            >
              Yes
              <SendIcon className={classes.rightIcon} />
            </Button>
          </Grid>
        </Grid>
      );
    }
    return (
      <div>
        <Chip
          label={`Current Account: ${this.state.account}`}
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
                  inputProps={{ step: '1' }}
                  margin="normal"
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
                    className={classes.button}
                  >
                    Delete
                    <DeleteIcon className={classes.rightIcon} />
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
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
