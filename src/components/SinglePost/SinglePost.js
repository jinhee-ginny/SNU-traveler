import React, {useState, useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/functions';


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
  const { user } = props;
  const { country } = props;

  useEffect(() => {
		const storageRef = firebase.storage().ref();
		storageRef.child(`${post.key}.jpg`).getDownloadURL().then(function(url) {
			const imageLink = url;
			document.querySelector('img').src = imageLink;
		}).catch(function(error) {

		});

	  }, []);

  return (
    <Grid item key={post.id} xs={12} sm={6} md={3}>
      <Link to={{
        pathname: "/viewpost/",
        state: {
          post: post,
          user: user.uid,
          country: country,
        }
      }}>
        <Card className={classes.postCard}>
          <CardActionArea>
            <img src="imageLink" height="225px" width="400px"/>
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
