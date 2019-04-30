import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';
import { autoPlay } from 'react-swipeable-views-utils';

const styles = theme => ({
  root: {
    background:
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/pictures/aboutus.jpg")',
    backgroundSize: 'cover',
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100vh - 65px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 60px)'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  row1: {
    height: 250
  },
  row2: {

    height: 90,
    marginLeft: "30%",
    marginRight: "20%"
  },
  card: {
    maxWidth: 250,
    background: 'transparent'
  },
  media: {
    height: 150
  },
  social: {
    position: 'fixed',
    width: '30px',
    top: 'auto',
    bottom: 0,
    margin: 'auto',
    marginLeft: "95%",
  },
  wrap: {
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  tab: {
    background: "white",
    height: "48px",
    top: 'auto',
    buttom: 0
  }
});
class AboutUs extends Component {
  cardGenerate = (name, image, title) => {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2" align="center">
              {name}
            </Typography>
            <Typography component="p" align="center">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
          <Grid container spacing={40} align="center" className={classes.wrap}>
            <Grid item xs={6} sm={6} md={3}>
              {this.cardGenerate(
                'Tuan Anh Le',
                '/pictures/avatar.jpg'
              )}
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              {this.cardGenerate(
                'Tsering Dolkar',
                '/pictures/avatar.jpg'
              )}
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              {this.cardGenerate(
                'Cameron Taylor',
                '/pictures/avatar.jpg'
              )}
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              {this.cardGenerate(
                'Jiahao Liu ',
                '/pictures/avatar.jpg'
              )}
            </Grid>
          </Grid>
          <Grid container spacing={6} className={classes.social}>
              <Grid item xs>
                <SocialIcon url="https://twitter.com/AdTractor" />
              </Grid>
              <Grid item xs>
                <SocialIcon url="https://www.facebook.com/weAdTractor/" />
              </Grid>
              <Grid item xs>
                <SocialIcon url="https://chuansongme.com/" network="wechat"/>
              </Grid>
              <Grid item xs>
                <SocialIcon url="mailto:weadtractor@gmail.com" network="email" />
              </Grid>
          </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AboutUs);
