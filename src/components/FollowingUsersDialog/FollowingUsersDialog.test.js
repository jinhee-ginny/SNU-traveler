import React from 'react';

import ReactDOM from 'react-dom';

import FollowingUsersDialog from './FollowingUsersDialog';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <FollowingUsersDialog
      dialogProps={
        {
          open: true,

          onClose: () => {}
        }
      }

      content={<div></div>}
    />,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
