import React, { useState } from 'react';
import { ComposeForm } from './ComposeForm';
import INITIAL_HISTORY from '../data/chat_log.json'

export function ChatPane(props) {

  console.log("calling ChatPane");
  const [clickCount, setClickCount] = useState(100)

  const handleClick = (event) => {
    // console.log("You clicked me!");
    setClickCount(clickCount + 1) //put that into state (in RAM, the corner)
    //AND it re-renders the component
    // setCurrentChannel("random");
  }

  //data!! -- an array of messages [{}]
  const messagesToShow = INITIAL_HISTORY
    .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order

  const messageElemArray = messagesToShow.map((messageObj) => {
    const messageElem = <MessageItem
      userName={messageObj.userName}
      userImg={messageObj.userImg}
      text={messageObj.text}
      key={messageObj.timestamp} />

    return messageElem; //put it in the new array!
  });


  return (
    <div className="scrollable-pane">
      <div className="pt-2 my-2">
        <button onClick={handleClick} className="btn btn-success">Click me!</button>
        <p>You clicked me {clickCount} times</p>
      </div>
      <hr />

      {messageElemArray}
      {/* <ComposeForm /> */}
    </div>
  )
}

function MessageItem(props) {
  const userName = props.userName;
  const userImg = props.userImg;
  const text = props.text;

  return (
    <div className="message d-flex mb-3">
      <div className="me-2">
        <img src={userImg} alt={userName + "'s avatar"} />
      </div>
      <div className="flex-grow-1">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}
