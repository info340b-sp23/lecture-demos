import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';

import INITIAL_HISTORY from '../data/chat_log.json'

function App(props) {

  const [currentChannel, setCurrentChannel] = useState('general');

  const changeChannel = (newChannel) => {
    setCurrentChannel(newChannel);
  }

  const [messageObjArray, setMessageObjArray] = useState(INITIAL_HISTORY);

  const addMessage = (userObj, text, channel) => {
    const newMessageObj = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": text,
      "timestamp": Date.now(),
      "channel": channel
    }
    const newMessageArray = [...messageObjArray, newMessageObj];
    setMessageObjArray(newMessageArray); //update state & rerender
    // writing to the file
  }

  const [currentUserObj, setCurrentUserObj] = useState({userId: null, userName: "Log Out", userImg: '/img/null.png'})

  const updateUser = (newUserObj) => {
    setCurrentUserObj(newUserObj)
  }

  const msgCountChannel = messageObjArray.reduce(
    (accumulatedItem, currentItem) => {
      const newAccumulatedItem = {...accumulatedItem};
      const channelString = currentItem.channel;
      if (!accumulatedItem[channelString]){
        newAccumulatedItem[channelString] = 1;
      } else {
        newAccumulatedItem[channelString] = accumulatedItem[channelString] + 1;
      }
      // console.log(newAccumulatedItem);
    return newAccumulatedItem
    }, {})

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar
        currentUserObj={currentUserObj}
        updateUser={updateUser}/>
      <div className="row flex-grow-1">

        <div className="col-3">
          <ChannelList
            currentChannel={currentChannel}
            howToChangeTheChannel={changeChannel}
            msgCountChannel={msgCountChannel}
          />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane
            currentChannel={currentChannel}
            messageObjArray={messageObjArray}
            howToAddMessage={addMessage}
            currentUserObj={currentUserObj}
          />
        </div>

      </div>
    </div>
  );
}

export default App;