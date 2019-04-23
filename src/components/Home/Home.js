import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import GetStarted from './GetStarted';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
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
  state = { open: false };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
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
    );
  }
}

export default withStyles(styles)(Home);
