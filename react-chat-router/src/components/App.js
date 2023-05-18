import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import { HeaderBar } from './HeaderBar.js';

import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageObjArray, setMessageObjArray] = useState(INITIAL_HISTORY);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initially null;

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
      <Routes>
        <Route path="chating/:channelID?" element={
          <ChatPage 
          currentUser={currentUser} 
          messageArray={messageObjArray}
          howToAddAMessage={addMessage}
          />
        }/>
        <Route path="signin" element={<SignInPage currentUser={currentUser} loginUserFunction={loginUser} />} />
        <Route path="/" element={<Static.WelcomePage />} />
        {/* <Route path="about" element={<Static.AboutPage />} /> */}


        <Route path="about" element={<Static.AboutPage />}>
          <Route path="welcome" element={<Static.WelcomePage />} />
          <Route path="error" element={<Static.ErrorPage />} />
        </Route>

        {/* <Route path="error" element={<Static.ErrorPage />} /> */}
        <Route path="*" element={<Static.ErrorPage />} />

      </Routes>

    </div>
  );
}



export default App;