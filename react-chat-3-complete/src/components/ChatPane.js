import React, {useState} from 'react';
import { ComposeForm } from './ComposeForm';

export function ChatPane(props) {
  const currentChannel = props.currentChannel;
  const messageObjArray = props.messageArray;
  const howToAddAMessage = props.howToAddAMessage;
  const currentUser = props.currentUser;
  // console.log("calling ChatPane");



  //what we look like
  const messagesToShow = messageObjArray
    .filter((messageObj) => {
      return messageObj.channel === currentChannel; //keep
    })
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
    <> {/* fake div */}
      <div className="scrollable-pane pt-2 my-2">
          {/* conditional rendering */}
          { messageObjArray.length === 0 && 
            <p>No messages found</p>
          }

          {messageElemArray}
        </div>

        <ComposeForm 
          currentUser={currentUser}
          currentChannel={currentChannel} howToAddAMessage={howToAddAMessage} />
    </>
  )
}

function MessageItem(props) {
  const userName = props.userName;
  const userImg = props.userImg;
  const text = props.text;

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = function(event) {
    setIsLiked(!isLiked);
  }


  //decide what it looks like
  let buttonColor = "grey";
  if(isLiked) {
    buttonColor = "red"; //filled in
  }

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
