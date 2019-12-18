import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

class FollowingUsersDialog extends Component {
  render() {
    // Dialog Properties
    const { dialogProps } = this.props;
    const { user } = this.props;

    return (

      <Dialog {...dialogProps}>
        <DialogTitle>You're Now Following...</DialogTitle>

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
