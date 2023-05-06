import React, {useState} from 'react';

import INITIAL_HISTORY from '../data/chat_log.json'

export function ChatPane(props) {
  console.log("calling ChatPane");

  const [clickCount, setClickCount] = useState(340)

  // const stateResult = useState(340); //arg: is the initial value
  // const clickCount = stateResult[0] //current value of that state variable
  // const setClickCount = stateResult[1]; 


  const handleClick = function(event) {
    console.log("You clicked me!");
    setClickCount(clickCount + 1) //put that into state (in RAM, the corner)
    //ANND it re-renders the component
  }

  //data!! -- an array of messages [{}]
  const messageObjArray = INITIAL_HISTORY;

  //content!! [<MessageItem>]
  const messageElemArray = messageObjArray.map((messageObj) => {
    const messageElem = <MessageItem 
      userName={messageObj.userName} 
      userImg={messageObj.userImg} 
      text={messageObj.text}
      key={messageObj.timestamp} />
    
      return messageElem; //put it in the new array!
  });


  return (
    <div>
      <div>
        {/* button.addEventListener('click', handleClick) */}
        <button onClick={handleClick} className="btn btn-success">Click me!</button>
        <p>You clicked me {clickCount} times</p>
      </div>

      {messageElemArray}
      {/* <ComposeForm /> */}
    </div>
  )
}

function MessageItem(props) {
  const userName = props.userName;
  const userImg = props.userImg;
  const text = props.text;
  console.log("rendering", text);

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = function(event) {
    setIsLiked(!isLiked);
  }

  let buttonClass = "btn-outline-danger";
  if(isLiked) {
    buttonClass = "btn-danger"; //filled in
  }

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div>
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button onClick={handleClick} className={"btn "+buttonClass}>Like</button>
    </div>
   </div> 
  )
}
