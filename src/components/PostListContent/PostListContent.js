import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

firebase.analytics();

//connect to database
const getPost = () => {
  const dbRefObject = firebase.database().ref().child('postlist-seoul');
  dbRefObject.on('value', snap => alert(snap.val()));
}



const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  postHeader: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
  },
  inputArea: {
    paddingBottom: theme.spacing(4),
  },
  textInput: {
    marginLeft: theme.spacing(4),
    width: '90%',
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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



const PostListContent = (props) => {
  const { classes } = props;
  // Need to be connected with backend
  const postList =
  [{id:1, title:"제목1", imageLink:"https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png"},
  {id:2, title:"제목2", imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6w3kYS_RibexdVur0op-t-E22ecIZGCoVEP4ELEM9OI2nctlDg&s"},
  {id:3, title:"제목3", imageLink:"https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png"},
  {id:4, title:"제목4", imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6w3kYS_RibexdVur0op-t-E22ecIZGCoVEP4ELEM9OI2nctlDg&s"},
  {id:5, title:"제목5", imageLink:"https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png"},
  {id:6, title:"제목6", imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6w3kYS_RibexdVur0op-t-E22ecIZGCoVEP4ELEM9OI2nctlDg&s"}];
  const { countryName } = props;
  return (
    <React.Fragment>
      <main>
        <div className={classes.postHeader}>
          <Container maxWidth={false}>
            <Typography component="h1" variant="h5" align="left" color="textPrimary">
              {countryName} 여행 게시판
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {postList.map(post => (
              <Grid item key={post.id} xs={12} sm={6} md={3}>
                <Card className={classes.postCard}>
                  <CardActionArea onClick={()=>getPost()}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={post.imageLink}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography component="h5" variant="overline">
                        {post.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div className={classes.inputArea}>
          <TextField className={classes.textInput} variant="outlined" />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
      </main>
    </React.Fragment>
  )
}

export default withStyles(styles)(PostListContent);
