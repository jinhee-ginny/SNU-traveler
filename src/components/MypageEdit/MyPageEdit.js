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
import moment from 'moment';


import nameCard from "../../img/design/page2/namecard.png"
import request from "../../img/design/page2/request.PNG"
import matchedpeople from "../../img/design/page2/matchedpeople.PNG"

import './MyPageEdit.css'



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

const MyPageEdit = (props) => {

  const { classes } = props;

  const { user } = props;
  const [postList, setPostList] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const [changedPostList, setChangedPostList] = useState('');

  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [area, setArea] = useState('');
  const [text, setText] = useState(null);



  const [title, setTitle] = useState(null);
  const [newKey, setNewKey] = useState('');
  const [newFile, setNewFile] = useState(null);
  // const { user } = props.location.state;
  // const { country } = props.location.state;

  const onEdit = () => {

    // if(!newFile){
    //   alert('사진을 올려주세요')
    //   return;
    // }

    //save data to realtime database for post DB
    // const newPostKey = firebase.database().ref().child('postlist').child(`${country}`).push().key;
    const newPostKey = firebase.database().ref().key;
    // const updates_postDB = {};

    // updates_postDB[`/postlist/${country}/` + newPostKey] = {
    //   title : `${title}`,
    //   text :`${text}`,
    //   key :`${newPostKey}`,
    //   userid : `${user.uid}`,
    //   date : moment().valueOf(),
    //   like : 0,
    //   comment : {0: ' '},
    //   useremail : `${user.email}`
    // }

    //save data to realtime database for User DB
    // const updates_userDB = {};
    // updates_userDB[`/users/${user.uid}/posts/` + newPostKey] = {
    //   title : `${title}`,
    //   text :`${text}`,
    //   key :`${newPostKey}`,
    //   userid : `${user.uid}`,
    //   date : moment().valueOf(),
    //   like : 0,
    //   comment : null,
    //   useremail : `${user.email}`
    // }

    const updates_userDB = {};
    updates_userDB[`/users/${user.uid}/info`] = {
      name : `${name}`,
      // level :`${level}`,
      email :`${user.email}`,
      userid : `${user.uid}`,
      text : `${text}`,
      key :`${newPostKey}`,
      area :`${area}`,
      date : moment().valueOf(),
    }


    setNewKey(newPostKey);
    let submitText = document.getElementById("post-form");
    submitText.reset();

    //image upload
    // const storageRef = firebase.storage().ref();
    // const imageRef = storageRef.child(`${newPostKey}.jpg`);
    // if(newFile){
    //   imageRef.put(newFile).then(function(snapshot) {
    //     console.log('Uploaded a file!');
    //     });    
    // }


    // return firebase.database().ref().update(updates_postDB)&&firebase.database().ref().update(updates_userDB);
    return firebase.database().ref().update(updates_userDB);
  }

  // uploadImage();
  // useEffect(() => {

  //   document.getElementById("input").addEventListener('change', function(evt) {
  //     setNewFile(evt.target.files[0])
  //   })
	// }, []);


  return (
    <React.Fragment>
      <main>

        <div>
          <form id="post-form" style={{ padding: 24 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  id="travelTitle"
                  label="이름"
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setText(e.target.value)}
                  fullWidth
                  id="travelText"
                  label="글"
                  margin="normal"
                  multiline
                  required
                  rows={20}
                  rowsMax={100}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setArea(e.target.value)}
                  fullWidth
                  id="travelText"
                  label="분야"
                  margin="normal"
                  multiline
                  required
                  rows={20}
                  rowsMax={100}
                />
              </Grid>
            </Grid>
          </form>
          
          
          {/* <Link to ={`/mypage`}>
            <Button fullWidth onClick={()=>onEdit()}>
              글작성하기
            </Button>
          </Link> */}


          {/* <Link to = {`/posts/${country}/`} >
            <Button fullWidth>
              뒤로가기
            </Button>
          </Link> */}
          {/* <input type="file" id="input"></input> */}

        </div>






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
        pathname: "/mypage",
        state: {
          user: {
            uid: user.uid,
            email: user.email,
          },
        }
      }}>
        <Button align="center" onClick={onEdit}>
            수정완료
        </Button>
      </Link>


    </React.Fragment>
  )
}

export default withStyles(styles)(MyPageEdit);
