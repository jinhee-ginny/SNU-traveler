import React from 'react';

import ReactDOM from 'react-dom';

import MailboxDialog from './MailboxDialog';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <MailboxDialog
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
