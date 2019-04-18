import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Web3 from 'web3';

import NavBarDrawer from './NavBarDrawer';

const styles = theme => ({
  root: {
    width: '100%',
    padding: '0'
  },
  navigation: {
    backgroundColor: 'white',
    color: 'black',
    [theme.breakpoints.down('630px')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  grow: {
    flexGrow: 1
  },
  title: {
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1.25em',
    letterSpacing: '3px',
    fontFamily: '"Montserrat", Arial, Helvetica, sans-serif'
  },
  navTabs: {
    padding: '1vw',
    textDecoration: 'none',
    fontFamily: '"Montserrat", Arial, Helvetica, sans-serif',
    [theme.breakpoints.down('sm')]: {}
  },
  '@keyframes float': {
    '0% ': {
      transform: 'translatey(0px)'
    },
    '50%': {
      transform: 'translatey(-5px)'
    },
    '100%': {
      transform: ' translatey(0px)'
    }
  },
  icon: {
    overflow: 'hidden',
    transform: 'translatey(0px)',
    animation: 'float 5s ease-in-out infinite',
    height: '40px',
    width: '40px',
    display: 'block'
  },
  tapsContainer: {
    [theme.breakpoints.down('xs')]: {
      display: 'none !important'
    },
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      right: '0',
      position: 'absolute'
    },
    textAlign: 'center'
  }
});

let web3;

if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
  console.log(web3);
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

  isLoggedIn = props => {
    const { classes } = props;
    if (window.web3 && this.state.accounts.length > 0) {
      return (
        <React.Fragment>
          <Typography
            className={classes.navTabs}
            variant="h6"
            color="inherit"
            component={Link}
            to="/listing"
          >
            Listings
          </Typography>
          <Typography
            className={classes.navTabs}
            variant="h6"
            color="inherit"
            component={Link}
            to="/create"
          >
            Create AdTract
          </Typography>
        </React.Fragment>
      );
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navigation}>
          <Toolbar>
            <img src="./pictures/ethIcon.png" alt={"eth"} className={classes.icon} />
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              component={Link}
              to="/"
            >
              ADTRACTOR
            </Typography>
            <div className={classes.grow} />
            <NavBarDrawer />
            <div className={classes.tapsContainer}>
              <Typography
                className={classes.navTabs}
                variant="h6"
                color="inherit"
                component={Link}
                to="/"
              >
                Home
              </Typography>
              {this.isLoggedIn(this.props)}
              <Typography
                className={classes.navTabs}
                variant="h6"
                color="inherit"
                component={Link}
                to="/aboutus"
              >
                About Us
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
