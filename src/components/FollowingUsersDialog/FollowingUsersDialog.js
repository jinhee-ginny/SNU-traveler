import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

class FollowingUsersDialog extends Component {
  render() {
    // Dialog Properties
    const { dialogProps } = this.props;

    const { user } = this.props;

    // Custom Properties
    const {
      content,
    } = this.props;

    return (

      <Dialog {...dialogProps}>
        <DialogTitle>MailBox</DialogTitle>

        {content}
        {user.uid}
      </Dialog>
    );
  }
}

FollowingUsersDialog.propTypes = {
  // Dialog Properties
  dialogProps: PropTypes.object.isRequired,

  // Custom Properties
  content: PropTypes.string,
};

export default FollowingUsersDialog;
