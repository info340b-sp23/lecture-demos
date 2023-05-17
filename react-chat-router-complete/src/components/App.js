import React, {useState} from 'react';

import { Routes, Route, Outlet } from 'react-router-dom';

import { HeaderBar } from './HeaderBar.js';

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

      <Routes>

        <Route index element={ <Static.WelcomePage /> }/>
        <Route path="about" element={ <Static.AboutPage /> } />
        <Route path="signin" element={ <SignInPage currentUser={currentUser} loginUserFunction={loginUser} />} />

        <Route path="" element={<RequireAuth currentUser={currentUser} />} >
          <Route path="chat/:channelName?" element={
            <ChatPage 
              currentUser={currentUser} 
              messageArray={messageObjArray}
              howToAddAMessage={addMessage}
              />
          } />
        </Route>
        
        <Route path="*" element={<Static.ErrorPage />} />

      </Routes>

    </div>
  );
}

function RequireAuth(props) {
  //...determine if user is logged in
  if(props.currentUser.userId === null) { //not undefined
    return <p>Forbidden!</p>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}


export default App;