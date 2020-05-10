import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import SinglePost from '../SinglePost'

import nameCard from "../../img/design/page2/namecard.png"
import request from "../../img/design/page2/request.PNG"
import matchedpeople from "../../img/design/page2/matchedpeople.PNG"

import './MyPage.css'



import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import { Button, ButtonGroup } from '@material-ui/core';


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

const MyPage = (props) => {

  const { classes } = props;

  const { user } = props;
  const [postList, setPostList] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const [changedPostList, setChangedPostList] = useState('');

//   const onSort = (e, standard = 'title') => {
//      e.preventDefault();
//      const sortResult = []
//      const queryUrl = `postlist/${country}`
//      const query = firebase.database().ref(queryUrl);
//      query.orderByChild(standard)
//        .once('value', function(snapshot) {
//          snapshot.forEach(function(childSnapshot) {
//            sortResult.push(childSnapshot.val());
//        })
//        setChangedPostList(sortResult.reverse());
//      });
//    }
//   const onChangeSearchValue = (e) => setSearchValue(e.target.value);
//   const onSearch = (e) => {
//     e.preventDefault();
//     const searchResult = postList.filter(post => post.title.indexOf(searchValue) !== -1);
//     setChangedPostList(searchResult);
//     setSearchValue('');
//   }

//   useEffect(() => {
//     setPostList([]);

//     const query = firebase.database().ref(`postlist/${country}/`);
//     query.once("value")
//       .then(function(snapshot) {
//         snapshot.forEach(function(childSnapshot) {
//           postList.push(childSnapshot.val());
//       })

//       setPostList(postList);
//     })
//   }, []);

  return (
    <React.Fragment>
      <main>
        <div className={classes.postHeader}>
          <Container align="center">
            {/* <Typography component="h1" variant="h5" align="center" color="textPrimary">
              {user.email}
            </Typography> */}
            <img src={nameCard} alt="banner-image" className="namecard"/>
            <img src={request} alt="banner-image" className="request"/>
            <img src={matchedpeople} alt="banner-image" className="matchedpeople"/>

          </Container>
        </div>





      </main>


      <Link to={{
        pathname: "/mypageedit",
        state: {
          user: {
            uid: user.uid,
            email: user.email,
          },
        }
      }}>
        <Button align="center">
            프로필 수정하기
        </Button>
      </Link>


    </React.Fragment>
  )
}

export default withStyles(styles)(MyPage);
