import React from 'react';

import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';

export default function ChatPage(props) {
  const currentUser = props.currentUser;
  const messageObjArray = props.messageArray;
  const howToAddAMessage = props.howToAddAMessage;

  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelList messageObjArray={messageObjArray} />
      </div>
      <div className="col d-flex flex-column">
        <ChatPane
          currentUser={currentUser}
          messageArray={messageObjArray}
          howToAddAMessage={howToAddAMessage}
        />
      </div>
    </div>
  )
}