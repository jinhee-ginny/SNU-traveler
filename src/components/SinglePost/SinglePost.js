import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import ViewPost from '../ViewPost';

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

//connect to database
// const getPost = (key) => {
//   firebase.database().ref().child('currentPost').set({
//     key: `${key}`,
//   });
// }

const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  postCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});



const SinglePost = (props) => {
  const { classes } = props;
  const { post } = props;

  return (
    <Grid item key={post.id} xs={12} sm={6} md={3}>
      <Link to={{
        pathname: "/viewpost",
        state: {
          post: post
        }
      }}>
        <Card className={classes.postCard}>
          <CardActionArea>
            <CardMedia className={classes.cardMedia} image={post.imageLink} title="Image title" />
            <CardContent className={classes.cardContent}>
              <Typography component="h5" variant="overline">
                {post.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>

  )
}

export default withStyles(styles)(SinglePost);
