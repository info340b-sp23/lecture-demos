import React, {useState} from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';

import INITIAL_HISTORY from '../data/chat_log.json'

function App(props) {
  const [currentChannel, setCurrentChannel] = useState('general');
  const [messageObjArray, setMessageObjArray] = useState(INITIAL_HISTORY);
  const [currentUser, setCurrentUser] = useState({userId: null, userName: null, userImg: '/img/null.png'}) //initially null;

  const loginUser = (userObj) => {
    setCurrentUser(userObj);
  }

  const changeChannel = (newChannel) => {
    setCurrentChannel(newChannel);
  }

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
  }

  //what we look like
  //{'general': 2}
  //count how many messages in each channel
  const channelMessageCounts = messageObjArray.reduce( (accumulatedValue, currentItem) => {
    const whichChannel = currentItem.channel;
    if(!accumulatedValue[whichChannel]){ //if doesn't exist yest
      accumulatedValue[whichChannel] = 0; //start at 0
    }

    accumulatedValue[whichChannel] = accumulatedValue[whichChannel] + 1;    

    return accumulatedValue; //ideally should a copy;

  }, {}) //initialize as an empty object 
  // console.log(channelMessageCounts);


  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} loginUserFunction={loginUser} />
      <div className="row flex-grow-1">

        {/* if(on the Chat Page)
          <ChatPage />
        else if (on the about page)
          <AboutPage />

        <SignInPage />
        <SearchPage /> */}
        
        <div className="col-3">
          <ChannelList 
            currentChannel={currentChannel} 
            channelMessageCounts={channelMessageCounts}
            howToChangeTheChannel={changeChannel}
          />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane 
            currentUser={currentUser}
            currentChannel={currentChannel} 
            messageArray={messageObjArray} 
            howToAddAMessage={addMessage}
          />
        </div>

      </div>
    </div>
  );
}



export default App;