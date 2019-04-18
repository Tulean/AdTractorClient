import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Link } from 'react-router-dom';

const styles = theme => ({
  list: {
    width: 250
  },
  IconWrapper: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex !important',
      right: '0'
    },
    [theme.breakpoints.up('xs')]: {
      display: 'none'
    },
    textAlign: 'center'
  }
});

class NavBarDrawer extends Component {
  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button key={'Home'} component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem button key={'Listings'} component={Link} to="/listing">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary={'Listings'} />
          </ListItem>
          <ListItem button key={'Create AdTract'} component={Link} to="/create">
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary={'Create AdTract'} />
          </ListItem>
        </List>
        <Divider />
        <ListItem button key={'AboutUs'} component={Link} to="/aboutus">
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary={'AboutUs'} />
        </ListItem>
      </div>
    );
    return (
      <div>
        <Button
          className={classes.IconWrapper}
          onClick={this.toggleDrawer('right', true)}
        >
          <MenuIcon fontSize="large" />
        </Button>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(NavBarDrawer);
