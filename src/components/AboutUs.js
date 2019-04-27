import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
  card: {
    maxWidth: 250
  },
  media: {
    height: 150
  },
  wrap: {
    paddingLeft: '10px',
    paddingRight: '10px'
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
      </div>
    );
  }
}

export default withStyles(styles)(AboutUs);
