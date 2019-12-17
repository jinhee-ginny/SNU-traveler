import React, { useState, useEffect } from 'react'
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

//
import EmptyState from '../EmptyState';
//

import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import { Button } from '@material-ui/core';




firebase.analytics();

//connect to database
const getPost = () => {
  const dbRefObject = firebase.database().ref().child('postlist').child('seoul');
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
  const [searchValue, setSearchValue] = useState('');
  const [searchedPostList, setSearchedPostList] = useState('');
  // Need to be connected with backend
  

  const [postList, setPostList] = useState([]); 

  
  /*
  const postList =
  [{id:1, title:"제목1", imageLink:"https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png"},
  {id:2, title:"제목2", imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6w3kYS_RibexdVur0op-t-E22ecIZGCoVEP4ELEM9OI2nctlDg&s"},
  {id:3, title:"제목3", imageLink:"https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png"},
  {id:4, title:"제목4", imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6w3kYS_RibexdVur0op-t-E22ecIZGCoVEP4ELEM9OI2nctlDg&s"},
  {id:5, title:"제목5", imageLink:"https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png"},
  {id:6, title:"제목6", imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6w3kYS_RibexdVur0op-t-E22ecIZGCoVEP4ELEM9OI2nctlDg&s"}];
  */

 useEffect(() => { 
    setPostList([]);

    const query = firebase.database().ref("postlist/seoul/");
    query.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          postList.push(childSnapshot.val());
      })

      setPostList(postList);
    })


  }, []);



  const { countryName } = props;
  const onChangeSearchValue = (e) => setSearchValue(e.target.value);
  const onSearch = (e) => {
    e.preventDefault();
    const searchResult = postList.filter(post => post.title.indexOf(searchValue) !== -1);
    setSearchedPostList(searchResult);
    setSearchValue('');
  }

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
            {searchedPostList ?
              searchedPostList.map(post => (
                <Grid item key={post.id} xs={12} sm={6} md={3}>

                  <Link to ="/viewpost">
                  
                  <Card  className={classes.postCard}>  
                    <CardActionArea onClick={()=>getPost()}>
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
              ))
              : postList.map(post => (
              <Grid item key={post.id} xs={12} sm={6} md={3}>
                
                <Link to ="/viewpost">
                
                <Card className={classes.postCard}>
                  <CardActionArea onClick={()=>getPost()}>
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
            ))}
          </Grid>
        </Container>
        <form className={classes.inputArea} onSubmit={onSearch}>
          <TextField className={classes.textInput} variant="outlined" value={searchValue} onChange={onChangeSearchValue}/>
          <IconButton type="submit" className={classes.iconButton} aria-label="search" onSubmit={onSearch}>
            <SearchIcon />
          </IconButton>
        </form>
      </main>
      

      <Link to ="/writePost" fullWidth>글 작성하기</Link>

    </React.Fragment>
  )
}

export default withStyles(styles)(PostListContent);
