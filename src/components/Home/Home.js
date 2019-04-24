import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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
  silde:
  {
    color: '#fff'
  },
  slide1:{
    background:
      'linear-gradient(to right, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(0, 0, 0, 0.4)), url("/pictures/homepage.jpg")',
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100vh - 65px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 60px)'
    }
  },
  slide2:{
    background:
      'linear-gradient(to right, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(0, 0, 0, 0.4)), url("/pictures/ethereum.jpg")',
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100vh - 65px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 60px)'
    }
  },
  slide3:{
    background:
      'linear-gradient(to right, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(0, 0, 0, 0.4)), url("/pictures/metamask.jpg")',
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100vh - 65px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 60px)'
    }
  },
  slide4:{
    background:
      'linear-gradient(to right, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.8) 40%, rgba(0, 0, 0, 0.4)), url("/pictures/dAPP.jpg")',
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100vh - 65px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 60px)'
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
  state = { open: false, index: 0};

  handleOpen = () => {
    this.setState({ open: true });
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
      index,
    });
  };


  render() {
    const { classes } = this.props;
    const { index } = this.state;
    return (
      <div className={classes.root}>
      <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
        <Tab label="homepage" />
        <Tab label="ethereum" />
        <Tab label="metamask" />
        <Tab label="dAPP" />
      </Tabs>
      <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
      <div className={classes.slide1} label="homepage">
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
                    features provided by the Ethereum blockchain. Our advertising
                    network has the potential to save companies billions of
                    dollars per year. Advertise with us before its too late.
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
      <div className={classes.slide2}><Grid container spacing={24}>
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
                  features provided by the Ethereum blockchain. Our advertising
                  network has the potential to save companies billions of
                  dollars per year. Advertise with us before its too late.
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
      <div className={classes.slide3}><Grid container spacing={24}>
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
                  features provided by the Ethereum blockchain. Our advertising
                  network has the potential to save companies billions of
                  dollars per year. Advertise with us before its too late.
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
      <div className={classes.slide4}><Grid container spacing={24}>
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
                  features provided by the Ethereum blockchain. Our advertising
                  network has the potential to save companies billions of
                  dollars per year. Advertise with us before its too late.
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
      </AutoPlaySwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
