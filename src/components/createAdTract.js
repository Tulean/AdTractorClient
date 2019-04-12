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

class CreateAdtract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      percentage: '',
      URL: '',
      account: ['loading...']
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
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Chip
          label={`Current Account: ${this.state.account[0]}`}
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
                  onChange={this.handleChange('url')}
                  value={this.state.url}
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
                  inputProps={{ step: '0.01' }}
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
