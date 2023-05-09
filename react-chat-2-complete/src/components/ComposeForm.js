import React, { useState } from 'react';

export function ComposeForm(props) {
  const currentChannel = props.currentChannel;
  const [typedValue, setTypedValue] = useState('');
  const howToAddAMessage = props.howToAddAMessage; //type function

  const handleClick = (event) => {
    console.log("posting text", typedValue);
    setTypedValue(''); //clear the input
    //add to the message list

    howToAddAMessage("parrot", "Parrot", typedValue, currentChannel);
  }

  const handleChange = (event) => {
    const whatUserTyped = event.target.value;
    setTypedValue(whatUserTyped);
  }

  return (
    <form className="my-2">
      <div className="input-group">
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