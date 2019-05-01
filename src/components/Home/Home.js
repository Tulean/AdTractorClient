import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Modal from '@material-ui/core/Modal';
import GetStarted from './GetStarted';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
  root: {
    position: 'relative'
  },
  silde: {
    color: '#fff'
  },
  slide1: {
    background:
      'linear-gradient(to right, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(0, 0, 0, 0.4)), url("/pictures/homepage.jpg")',
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100vh - 65px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 60px - 48px)'
    }
  },
  slide4: {
    background:
      'linear-gradient(to right, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(0, 0, 0, 0.4)), url("/pictures/ethereum.jpg")',
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100vh - 65px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 60px - 48px)'
    }
  },
  slide3: {
    background:
      'linear-gradient(to right, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(0, 0, 0, 0.4)), url("/pictures/metamask.jpg")',
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100vh - 65px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 60px - 48px)'
    }
  },
  slide2: {
    background:
      'linear-gradient(to right, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(0, 0, 0, 0.4)), url("/pictures/dAPP.jpg")',
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100vh - 65px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 60px - 48px)'
    }
  },
  textHome: {
    color: 'black',
    height: '100vh'
  },
  title: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '5vw',
      paddingLeft: '2vw',
      paddingTop: '25vh'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '10vw'
    }
  },
  text: {
    paddingLeft: '2vw',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  secondaryText: {
    [theme.breakpoints.up('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 'calc(7px + 2.3vw)',
      display: 'flex',
      justifyContent: 'center'
    }
  },
  learnButton: {
    border: '5px solid',
    [theme.breakpoints.up('xs')]: {
      marginLeft: '2vw',
      borderColor: 'black',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
      }
    },
    [theme.breakpoints.down('xs')]: {}
  }
});

export class Home extends Component {
  state = { open: false, index: 0 };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleOpenOutSide = () => {
    window.open(
      'https://www.serpwizard.com/differences-between-web-3-0-and-web-2-0-websites/',
      '_blank'
    );
  };

  handleOpenMetamask = () => {
    window.open('https://metamask.io/', '_blank');
  };

  handleOpenEthereum = () => {
    window.open('https://www.ethereum.org/', '_blank');
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event, value) => {
    this.setState({
      index: value
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    const { classes } = this.props;
    const { index } = this.state;
    return (
      <div className={classes.root}>
        <Tabs
          value={index}
          fullWidth
          onChange={this.handleChange}
          style={{ height: '48px' }}
        >
          <Tab label="AdTractor" />
          <Tab label="dAPP" />
          <Tab label="metamask" />
          <Tab label="Ethereum" />
        </Tabs>
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
          interval={8000}
        >
          <div className={classes.slide1}>
            <Grid container spacing={24}>
              <Grid
                className={classes.textHome}
                container
                item
                xs={12}
                direction="column"
              >
                <Grid container item direction="row" className={classes.title}>
                  Welcome to AdTractor
                </Grid>
                <Grid
                  continaer
                  item
                  direction="row"
                  className={classes.secondaryText}
                >
                  <Grid container item direction="row" spacing={24}>
                    <Grid item xs={12} className={classes.secondaryText}>
                      A Decentralized Advertising Network
                    </Grid>
                    <Grid item xs={12} align="center">
                      <Button
                        variant="outlined"
                        className={classes.learnButton}
                        onClick={this.handleOpen}
                      >
                        Get Started
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container item direction="row" className={classes.text}>
                  <Grid item xs={5} className={classes.text}>
                    <Typography paragraph="true" variant="subtitle1">
                      Are you looking for a secure advertising network? Look no
                      further, AdTractor prevents fraud by utilizing security
                      features provided by the Ethereum blockchain. Our
                      advertising network has the potential to save companies
                      billions of dollars per year. Advertise with us before its
                      too late.
                    </Typography>
                    <Typography variant="button">
                      <Button
                        variant="outlined"
                        className={classes.learnButton}
                        onClick={this.handleOpen}
                      >
                        Get Started
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <GetStarted />
            </Modal>
          </div>
          <div className={classes.slide2}>
            <Grid container spacing={24}>
              <Grid
                className={classes.textHome}
                container
                item
                xs={12}
                direction="column"
              >
                <Grid container item direction="row" className={classes.title}>
                  What is Web3
                  <Grid
                    item
                    xs={12}
                    align="center"
                    className={classes.secondaryText}
                  >
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      onClick={this.handleOpenOutSide}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
                <Grid container item direction="row" className={classes.text}>
                  <Grid item xs={5} className={classes.text}>
                    <Typography paragraph="true" variant="subtitle1">
                      Are you still using and developping web2? Sadly, it will
                      become the past tense soon. Why? Web 2.0 is a writable and
                      more social oriented World Wide Web that uses Google as a
                      catalyst to perform. It means we have a CENTRALIZED server
                      -- Google. Everyone's data is stored in here and sellable.
                      Web3 is a dAPP -- Decentralized Application.
                    </Typography>
                    <Typography variant="button">
                      <Button
                        variant="outlined"
                        className={classes.learnButton}
                        onClick={this.handleOpenOutSide}
                      >
                        Learn More
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className={classes.slide3}>
            <Grid container spacing={24}>
              <Grid
                className={classes.textHome}
                container
                item
                xs={12}
                direction="column"
              >
                <Grid container item direction="row" className={classes.title}>
                  Metamask now!
                  <Grid
                    item
                    xs={12}
                    align="center"
                    className={classes.secondaryText}
                  >
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      onClick={this.handleOpenMetamask}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
                <Grid container item direction="row" className={classes.text}>
                  <Grid item xs={5} className={classes.text}>
                    <Typography paragraph="true" variant="subtitle1">
                      MetaMask is a bridge that allows you to visit the
                      distributed web of tomorrow in your browser today. It
                      allows you to run Ethereum dApps right in your browser
                      without running a full Ethereum node
                    </Typography>
                    <Typography variant="button">
                      <Button
                        variant="outlined"
                        className={classes.learnButton}
                        onClick={this.handleOpenMetamask}
                      >
                        Install Metamask
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <GetStarted />
            </Modal>
          </div>
          <div className={classes.slide4}>
            <Grid container spacing={24}>
              <Grid
                className={classes.textHome}
                container
                item
                xs={12}
                direction="column"
              >
                <Grid container item direction="row" className={classes.title}>
                  New money - Ethereum
                  <Grid
                    item
                    xs={12}
                    align="center"
                    className={classes.secondaryText}
                  >
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      onClick={this.handleOpenEthereum}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
                <Grid container item direction="row" className={classes.text}>
                  <Grid item xs={5} className={classes.text}>
                    <Typography paragraph="true" variant="subtitle1">
                      Ethereum is an open-source, public, blockchain-based
                      distributed computing platform and operating system
                      featuring smart contract functionality. It supports a
                      modified version of Nakamoto consensus via
                      transaction-based state transitions. Ether is a token
                      whose blockchain is generated by the Ethereum platform
                    </Typography>
                    <Typography variant="button">
                      <Button
                        variant="outlined"
                        className={classes.learnButton}
                        onClick={this.handleOpenEthereum}
                      >
                        Learn More
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </AutoPlaySwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
