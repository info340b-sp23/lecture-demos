import React, {useEffect, useState} from 'react';

import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { getDatabase, ref as firebaseDatabaseRef, set as firebaseDatabaseSet, onValue, push as firebaseDatabasePush} from 'firebase/database';

import { HeaderBar } from './HeaderBar.js';

import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import ProfilePage from './ProfilePage';
import * as Static from './StaticPages';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageObjArray, setMessageObjArray] = useState(INITIAL_HISTORY);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initially null;

  const navigateTo = useNavigate(); //navigation hook

  //effect to run when the component first loads
  useEffect(() => {
    //log in a default user
    loginUser(DEFAULT_USERS[0])

    const db = getDatabase();
    // const messageRef = firebaseDatabaseRef(db, "one_message")
    // onValue(messageRef, (snapshot) => {
    //   // console.log(snapshot.val());
    //   const messageObj = snapshot.val();
    //   const newMessageArray = [...messageObjArray, messageObj];
    //   setMessageObjArray(newMessageArray); //update state & rerender
    // })

    const allMessagesRef = firebaseDatabaseRef(db, "allMessages")
    onValue(allMessagesRef, (snapshot) => {
      // console.log(snapshot.val());
      const allMessagesObj = snapshot.val();
      // console.log(allMessagesObj);
      
      const allKeys = Object.keys(allMessagesObj);
      const allMessageArray = allKeys.map((key) => {
        allMessagesObj[key].key = key;
        // console.log(allMessagesObj[key])
        return allMessagesObj[key]
      })

      const newMessageArray = [...INITIAL_HISTORY, ...allMessageArray];
      console.log("this is the whole array", newMessageArray);
      setMessageObjArray(newMessageArray); //update state & rerender
    })



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
    // const newMessageArray = [...messageObjArray, newMessageObj];
    // setMessageObjArray(newMessageArray); //update state & rerender

    const db = getDatabase();

    // const dataRef = firebaseDatabaseRef(db, "one_message");
    // firebaseDatabaseSet(dataRef, newMessageObj);

    const messageArrayRef = firebaseDatabaseRef(db, "allMessages");
    firebaseDatabasePush(messageArrayRef, newMessageObj);

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