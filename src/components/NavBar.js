import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Web3 from 'web3';

const styles = (theme) => ({
  root: {
    width: '100%'
  },
  navigation: {
    backgroundColor: 'black',
    padding: '1vh'
  },
  grow: {
    flexGrow: 1
  },
  title: {
    textDecoration: 'none'
  },
  fab: {
    marginLeft: 0
  }
});

let web3;

if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
}

export class NavBar extends Component {
  state = {
    accounts: []
  };

  getAccounts = async () => {
    try {
      const acc = await web3.eth.getAccounts();
      this.setState({ accounts: acc });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getAccounts();
  }
  componentDidUpdate() {
    this.getAccounts();
  }

  render() {
    const { classes } = this.props;
    if (window.web3 && this.state.accounts.length > 0) {
      return (
        <div className={classes.root}>
          <AppBar position="static" className={classes.navigation}>
            <Toolbar>
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                component={Link}
                to="/"
              >
                AdTractor
              </Typography>
              <div className={classes.grow} />
              <Fab
                href="/create"
                variant="extended"
                aria-label="Create"
                className={classes.fab}
              >
                <AddIcon />
                Create AdTract
              </Fab>
            </Toolbar>
          </AppBar>
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <AppBar position="static" className={classes.navigation}>
            <Toolbar>
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                component={Link}
                to="/"
              >
                AdTractor
              </Typography>
              <div className={classes.grow} />
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
}

export default withStyles(styles)(NavBar);
