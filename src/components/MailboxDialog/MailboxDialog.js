import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// <Dialog {...dialogProps}>
//   <DialogTitle>{MailBox}</DialogTitle>
//
//   <DialogContent>
//     <List disablePadding>
//       <ListItem>
//         <ListItemText
//           primary="Version"
//           secondary={process.env.REACT_APP_VERSION}
//         />
//       </ListItem>
//
//       {user &&
//         <ListItem>
//           <ListItemText
//             primary="UID"
//             secondary={user.uid}
//           />
//         </ListItem>
//       }
//     </List>
//   </DialogContent>
//
//   <DialogActions>
//     <Button color="primary" onClick={dialogProps.onClose}>OK</Button>
//   </DialogActions>
// </Dialog>
class MailboxDialog extends Component {
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

MailboxDialog.propTypes = {
  // Dialog Properties
  dialogProps: PropTypes.object.isRequired,

  // Custom Properties
  content: PropTypes.string,
};

export default MailboxDialog;
