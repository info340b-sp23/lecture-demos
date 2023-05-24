import React, {useEffect, useState} from 'react';

import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database'

import { HeaderBar } from './HeaderBar.js';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import ProfilePage from './ProfilePage.js';
import * as Static from './StaticPages';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageObjArray, setMessageObjArray] = useState(INITIAL_HISTORY);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initially null;

  const navigateTo = useNavigate(); //navigation hook
  
  //effect to run when the component first loads
  useEffect(() => {
    //log in a default user
    // loginUser(DEFAULT_USERS[1])

    //hook up a listener to Firebase
    const db = getDatabase();
    const allMessagesRef = ref(db, "allMessages");

    //fetch message data from firebase
    onValue(allMessagesRef, function(snapshot) {
      const allMessagesObj = snapshot.val();
      const objKeys = Object.keys(allMessagesObj);
      const objArray = objKeys.map((keyString) => {
        allMessagesObj[keyString].key = keyString;
        return allMessagesObj[keyString];
        
      })
      setMessageObjArray(objArray); //update state & rerender
    });

  }, []) //array is list of variables that will cause this to rerun if changed

  const loginUser = (userObj) => {
    console.log("logging in as", userObj.userName);
    setCurrentUser(userObj);
    if(userObj.userId !== null){
      navigateTo('/chat/general'); //go to chat after login
    }
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

    const db = getDatabase();
    const allMMessagesRef = ref(db, "allMessages");
    firebasePush(allMMessagesRef, newMessageObj);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>
        <Route index element={ <Static.WelcomePage /> }/>
        <Route path="about" element={ <Static.AboutPage /> } />
        <Route path="signin" element={ <SignInPage currentUser={currentUser} loginUserFunction={loginUser} />} />

        <Route element={<ProtectedPage currentUser={currentUser} />} >
          <Route path="chat/:channelName?" element={
            <ChatPage 
              currentUser={currentUser} 
              messageArray={messageObjArray}
              howToAddAMessage={addMessage}
              />
          } />
          <Route path="profile" element={<ProfilePage currentUser={currentUser} />}/>
        </Route>
        <Route path="*" element={<Static.ErrorPage />} />
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  //...determine if user is logged in
  if(props.currentUser.userId === null) { //not undefined
    return <Navigate to="/signin"/>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;