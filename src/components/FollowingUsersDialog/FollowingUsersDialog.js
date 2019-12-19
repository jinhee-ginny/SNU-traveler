import React, { Component, useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/functions';



class FollowingUsersDialog extends Component {


  render() {
    // Dialog Properties
    const { dialogProps } = this.props;
    const { user } = this.props;
    const followArray =[];

    // firebase.database().ref().child(`users`).child(`${user.uid}`).child('follows').update({ email: ` `})

    firebase.database().ref().child(`users`).child(`${user.uid}`).child('follows').on('value', function(snapshot) {
      Object.values(snapshot.val()).map(follow => followArray.push(follow));
    });


    return (

      <Dialog {...dialogProps}>
        <DialogTitle>You're Now Following...</DialogTitle>
        {
					followArray.map(follow=>(
						<DialogTitle>{follow}</DialogTitle>
            )
					 )
				}
        {user.follows}

      </Dialog>
    );
  }
}

FollowingUsersDialog.propTypes = {
  // Dialog Properties
  dialogProps: PropTypes.object.isRequired,
};

export default FollowingUsersDialog;
