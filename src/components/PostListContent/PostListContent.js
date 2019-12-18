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
import ViewPost from '../ViewPost/ViewPostStyle'
import SinglePost from '../SinglePost'

//
import EmptyState from '../EmptyState';
//

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import { Button } from '@material-ui/core';


firebase.analytics();

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
});

const PostListContent = (props) => {
  const { classes } = props;
  const { country } = props;
  const { user } = props;
  const [postList, setPostList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [changedPostList, setChangedPostList] = useState('');

  const onSort = (e, standard = 'title') => {
    e.preventDefault();
    const sortResult = []
    const query = firebase.database().ref('postlist/seoul/');
    query.orderByChild(standard)
      .once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          sortResult.push(childSnapshot.val());
      })
      setChangedPostList(sortResult.reverse());
    });
  }
  const onChangeSearchValue = (e) => setSearchValue(e.target.value);
  const onSearch = (e) => {
    e.preventDefault();
    const searchResult = postList.filter(post => post.title.indexOf(searchValue) !== -1);
    setChangedPostList(searchResult);
    setSearchValue('');
  }

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

  return (
    <React.Fragment>
      <main>
        <div className={classes.postHeader}>
          <Container>
            <Typography component="h1" variant="h5" align="left" color="textPrimary">
              {country} 여행 게시판
            </Typography>
          </Container>
        </div>
        <Container>
          <Button variant="outlined" onClick={(e)=> onSort(e, 'title')}>제목순</Button>
          <Button variant="outlined" onClick={(e)=> onSort(e, 'date')}>최신순</Button>
          <Button variant="outlined" onClick={(e)=> onSort(e, 'like')}>추천순</Button>
        </Container>
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {changedPostList ?
              changedPostList.map(post => (
                <SinglePost key={post.key} post={post} country={country} user={user} />
              ))
              : postList.map(post => (
                <SinglePost key={post.key} post={post} country={country} user={user} />
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

      <Link to="/writePost" fullwidth="true">
        <Button fullwidth="true">
            글 작성하기
        </Button>
      </Link>

    </React.Fragment>
  )
}

export default withStyles(styles)(PostListContent);
