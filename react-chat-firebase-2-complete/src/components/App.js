import React, {useEffect, useState} from 'react';

import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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
  console.log("rendering App with user", currentUser);

  const navigateTo = useNavigate(); //navigation hook

  //effect to run when the component first loads
  useEffect(() => {
    //log in a default user
    //loginUser(DEFAULT_USERS[1])

    onAuthStateChanged(getAuth(), function(firebaseUser) {
      console.log("someone logged in or logged out!");
      if(firebaseUser) { //not null, so signed in
        //local changes
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";
        console.log(firebaseUser);        
      } 
      else { //signed out
        console.log("signed out!");
      }
      setCurrentUser(firebaseUser);
    })


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

  useEffect(() => {
    console.log("getting shoe size");
    if(currentUser == null){
      return;
    }
    const db = getDatabase();
    const currentUserDataRef = ref(db, "userData/"+currentUser.userId);
    onValue(currentUserDataRef, (snapshot) => {
      const value = snapshot.val();
      console.log(value);
    })
  }, [currentUser])

  const loginUser = (userObj) => {
    console.log("logging in as", userObj.userName);
    setCurrentUser(userObj);
    if(userObj.userId !== null){
      //navigateTo('/chat/general'); //go to chat after login
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
      <HeaderBar currentUser={currentUser} setCurrentUser={setCurrentUser} />

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
  if(props.currentUser === null) { //not undefined at all (no user)
    return <Navigate to="/signin"/>
  }
  else if(props.currentUser.userId === null){ //starting null user
    return <p>Spinner</p>;
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;