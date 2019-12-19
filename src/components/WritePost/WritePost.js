
import React, { useState, useEffect, Component } from 'react';
import moment from 'moment';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { withStyles } from '@material-ui/core/styles';

import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/functions';

firebase.analytics();


const styles = (theme) => ({});

const WritePost = (props) =>{
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const [newKey, setNewKey] = useState('');
  const [newFile, setNewFile] = useState(null);
  const { user } = props.location.state;
  const { country } = props.location.state;

  const sendPost = () => {

    //save data to realtime database for post DB
    const newPostKey = firebase.database().ref().child('postlist').child(`${country}`).push().key;

    const updates_postDB = {};

    updates_postDB[`/postlist/${country}/` + newPostKey] = {
      title : `${title}`,
      text :`${text}`,
      key :`${newPostKey}`,
      userid : `${user.uid}`,
      date : moment().valueOf(),
      like : 0,
      comment : {0: ' '},
      useremail : `${user.email}`

    }

    //save data to realtime database for User DB
    const updates_userDB = {};
    updates_userDB[`/users/${user.uid}/posts/` + newPostKey] = {
      title : `${title}`,
      text :`${text}`,
      key :`${newPostKey}`,
      userid : `${user.uid}`,
      date : moment().valueOf(),
      like : 0,
      comment : null,
      useremail : `${user.email}`
    }
    setNewKey(newPostKey);
    let submitText = document.getElementById("post-form");
    submitText.reset();

    //image upload
    const storageRef = firebase.storage().ref();
    const mountainsRef = storageRef.child(`${newPostKey}.jpg`);
    mountainsRef.put(newFile).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
    });


    return firebase.database().ref().update(updates_postDB)&&firebase.database().ref().update(updates_userDB);
  }

      //uploadImage();
  useEffect(() => {

    document.getElementById("input").addEventListener('change', function(evt) {
      setNewFile(evt.target.files[0])
    })
	}, []);

    return (
      <div>
        <form id="post-form" style={{ padding: 24 }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                id="travelTitle"
                label="제목"
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
          </Grid>
        </form>
        <Link to ="/">
          <Button fullWidth onClick={()=>sendPost()}>
            글작성하기
          </Button>
        </Link>
        <Link to ="/">
          <Button fullWidth>
            뒤로가기
          </Button>
        </Link>
        <input type="file" id="input"></input>

      </div>
    )

}



export default withStyles(styles)(WritePost);
