import React, { useState } from 'react';

export function ComposeForm(props) {
  const currentChannel = props.currentChannel;
  const [typedValue, setTypedValue] = useState('');
  const howToAddAMessage = props.howToAddAMessage; //type function
  const currentUserObj = props.currentUserObj;

  // console.log("compose form", howToAddAMessage);
  
  const handleClick = (event) => {
    console.log("posting text", typedValue);
    setTypedValue(''); //clear the input
    //add to the message list

    // const userObj = {userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png'};

    howToAddAMessage(currentUserObj, typedValue, currentChannel);
  }

  const handleChange = (event) => {
    const whatUserTyped = event.target.value;
    setTypedValue(whatUserTyped);
  }

  return (
    <form className="my-2">
      <div className="input-group">
        <img src={currentUserObj.userImg} alt={currentUserObj.userName + " avatar"} />
        <textarea 
          onChange={handleChange}
          value={typedValue}
          className="form-control" rows="2" placeholder="Type a new message"></textarea>
        <button onClick={handleClick} className="btn btn-secondary" type="button">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}