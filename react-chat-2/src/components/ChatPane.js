import React, { useState } from 'react';
import { ComposeForm } from './ComposeForm';
import INITIAL_HISTORY from '../data/chat_log.json'

export function ChatPane(props) {

  const currentChannel = props.currentChannel;

  console.log("calling ChatPane");
  const [clickCount, setClickCount] = useState(100)



  const [chatHistory, setChatHistory] = useState(INITIAL_HISTORY);

  const handleClick = (event) => {
    // setClickCount(clickCount + 1) //put that into state (in RAM, the corner)
    //AND it re-renders the component
    // setCurrentChannel("random");

    // setCurrentChannel("birds");

    addMessage("parrot", "Parrot", "Test msg", currentChannel);
  }

  function addMessage(userID, userName, text, channel) {
    console.log(Date.now());
    const newMessage = {
      "userId": userID,
      "userName": userName,
      "userImg": "/img/" + userName+ ".png",
      "text": text,
      "timestamp": Date.now(),
      "channel": channel
    }
    // chatHistory.push(newMessage);
    // console.log(chatHistory);

    const newChatHistory = [... chatHistory, newMessage]
    setChatHistory(newChatHistory);
  }

  //data!! -- an array of messages [{}]
  const messagesToShow = chatHistory
    .filter((messageObj) => { return messageObj.channel === currentChannel })
    .sort((m1, m2) => m1.timestamp - m2.timestamp); //reverse chron order

  const emptyConditionMessage = <p> Add new message! </p>

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

      {messagesToShow.length === 0 && emptyConditionMessage}

      {messagesToShow.length !== 0 && messageElemArray}

      <ComposeForm howToAddMessage={addMessage} currentChannel={currentChannel}/>
    </div>
  )
}

function MessageItem(props) {
  const userName = props.userName;
  const userImg = props.userImg;
  const text = props.text;

  const [isLiked, setIsLiked] = useState(false);

  function handleClick(event) {
    setIsLiked(!isLiked);
  }

  let colorString = 'black';
  if (isLiked) {
    colorString = "red";
  } else {
    colorString = "gray";
  }

  return (
    <div className="message d-flex mb-3">
      <div className="me-2">
        <img src={userImg} alt={userName + "'s avatar"} />
      </div>
      <div className="flex-grow-1">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
        <button onClick={handleClick} className="btn like-button">
          <span className="material-icons" style={{ color: colorString }}>favorite_border</span>
        </button>
      </div>
    </div>
  )
}
