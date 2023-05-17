import React, {useState} from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';

import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageObjArray, setMessageObjArray] = useState(INITIAL_HISTORY);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initially null;

  const loginUser = (userObj) => {
    setCurrentUser(userObj);
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

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <ChatPage 
        currentUser={currentUser} 
        messageArray={messageObjArray}
        howToAddAMessage={addMessage}
        />
      {/* <SignInPage currentUser={currentUser} loginUserFunction={loginUser} /> */}
      {/* <Static.WelcomePage /> */}
      {/* <Static.AboutPage /> */}
      {/* <Static.ErrorPage /> */}

    </div>
  );
}



export default App;