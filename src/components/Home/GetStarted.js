import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.3em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(255,255,255,0.5)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'black',
      outline: '1px solid slategrey'
    }
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[10],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    borderRadius: '5px',
    [theme.breakpoints.up('xs')]: {
      height: '400px',
      width: '350px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '400px',
      width: '60%',
      overflow: 'scroll'
    }
  }
});

class GetStarted extends Component {
  getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={this.getModalStyle()} className={classes.paper}>
        <Typography variant="h4" align="center">
          How To Get Started
        </Typography>
        <Divider variant="fullWidth" />
        <Typography align="center" style={{ paddingTop: '10px' }}>
          <Typography variant="subtitle1" paragraph="true">
            In order to create AdTract contract, please make sure to install and
            be logged in Metamask. After you filled out all information on the
            "Create AdTract" tab, you will need to confirm transaction in
            Metamask. Advertisers can view AdTract contracts on the "Listing"
            tab.
          </Typography>
          <Typography variant="subtitle1" paragraph="true">
            Advertisers will have to slightly modify their website where
            advertisements are happening. When customers buy the advertised
            item, "AdTract" will check for advertisers that the customer viewed.
            After, "AdTract" will assign rewards to each party.
          </Typography>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(GetStarted);
