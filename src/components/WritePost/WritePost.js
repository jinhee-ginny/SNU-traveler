
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

  const sendPost = () => {

    //save data to realtime database for post DB
    const newPostKey = firebase.database().ref().child('postlist').child('seoul').push().key;

    const updates_postDB = {};

    updates_postDB['/postlist/seoul/' + newPostKey] = {
      title : `${title}`,
      text :`${text}`,
      key :`${newPostKey}`,
      userid : `${props.user.uid}`,
      date : moment().valueOf(),
      like : 0,
      comment : {0: ' '},
      useremail : `${props.user.email}`

    }

    //save data to realtime database for User DB
    const updates_userDB = {};
    updates_userDB[`/users/${props.user.uid}/posts/` + newPostKey] = {
      title : `${title}`,
      text :`${text}`,
      key :`${newPostKey}`,
      userid : `${props.user.uid}`,
      date : moment().valueOf(),
      like : 0,
      comment : null,
      useremail : `${props.user.email}`
    }

    let submitText = document.getElementById("post-form");
    submitText.reset();

    return firebase.database().ref().update(updates_postDB)&&firebase.database().ref().update(updates_userDB);
  }


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
        <Link to ="/mapcontent">
          <Button fullWidth onClick={()=>sendPost()}>
            글작성하기
          </Button>
        </Link>
        <Link to ="/mapcontent">
          <Button fullWidth>
            뒤로가기
          </Button>
        </Link>

      </div>
    )

}



export default withStyles(styles)(WritePost);
