import React, { useState } from 'react';
import ChatHistory from "../data/chat_log.json"

export default function MessagePane(props) {

  // console.log(ChatHistory);

  const MessageItemArray = ChatHistory.map(
    (msgObject) => {
      return (
        <MessageItem key={msgObject.timestamp} userName={msgObject.userName} userMsg={msgObject.text} userImg={msgObject.userImg} />
      )
    }
  )

  let [clickCount, setClickCount] = useState(100);

  // NEVER DO THIS
  // let [clickCountDouble, setClickCountDouble] = useState(clickCount * 2);

  let [arrayExp, setArrayExp] = useState([0,0,0]);

  console.log("I am rendered!!!");

  function handleClick(event){
    // console.log("I am clicked!");
    // Step1, update the clickCount value
    // Step2, rerender this particular component
    // setClickCount(clickCount + 1);
    // clickCount = clickCount + 1;
    // console.log(clickCount);

    // arrayExp[0] += 1;
    // setArrayExp(arrayExp);

    let arrayNew = [... arrayExp];
    arrayNew[0] += 1;
    arrayNew[1] += 1;
    arrayNew[2] += 1;
    setArrayExp(arrayNew);
  }

  return (
    <div>
      <button onClick={handleClick} className="btn btn-success">Click Me!</button>
      <p className="click-string"> Clicked {arrayExp} times!</p>
      <div className="message-pane">
        {MessageItemArray}
      </div>
    </div>
  )
}

function MessageItem(props) {
  // console.log(props)
  return (
    <div className="user-message d-flex m-2">
      <div className='m-1'>
        <img src={props.userImg} alt="eagle's avatar" />
      </div>
      <div>
        <p className="m-1 user-message-name"> {props.userName}</p>
        <p className="m-1"> {props.userMsg}</p>
      </div>
    </div>
  )
}

