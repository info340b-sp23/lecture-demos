import React, { useState } from 'react';

export function ComposeForm(props) {
  const addMessage = props.howToAddMessage;
  const currentChannel = props.currentChannel;

  const [userInputValue, setUserInputValue] = useState('');

  function handleChange(event){
    const newUserInputValue = event.target.value;
    setUserInputValue(newUserInputValue);
  }

  function handleClick(event){
    const userInput = userInputValue;
    addMessage("parrot", "Parrot", userInput, currentChannel);
    setUserInputValue('');
  }

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea 
          onChange={handleChange}
          value={userInputValue}
          className="form-control" rows="2" placeholder="Type a new message"></textarea>
        <button onClick={handleClick} className="btn btn-secondary" type="button">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}