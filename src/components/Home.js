import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {}
});

export class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
