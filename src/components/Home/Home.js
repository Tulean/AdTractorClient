import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    background:
      'linear-gradient(to right, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0.8) 80%, transparent), linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/pictures/homepage.jpg")',
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
    fontSize: 'calc(7px + 1.3vw)',
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
                    component={Link}
                    to="/create"
                  >
                    Get Started
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item direction="row" className={classes.text}>
              <Grid item xs={7} className={classes.text}>
                Are you looking for a secure advertising network? Look no
                further, AdTractor prevents fraud by utilizing security features
                provided by the Ethereum blockchain. Our advertising network has
                the potential to save companies billions of dollars per year.
                Advertise with us before its too late.
              </Grid>
              <Grid item xs={7} align="right">
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  component={Link}
                  to="/create"
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
