import React from 'react';

export function ChannelList(props) {
  const setNewChannel = props.setNewChannel;
  //data! (an array of strings)
  const CHANNEL_NAMES_ARRAY = ['general', 'random', 'dank-memes', 'birds', 'channel-5'];

  function handleClick(event){
    event.preventDefault();
    const clickedChannel = event.target.text;
    setNewChannel(clickedChannel);
  }

  //content!! (an array of `<li>`)
  const liArray = CHANNEL_NAMES_ARRAY.map((channelNameString) => {
    const liElem = (
      <li key={channelNameString}>
        <a 
          onClick={handleClick}
          name={channelNameString}
          href={"/"+channelNameString}>{channelNameString}</a>
      </li>
    )
    return liElem; //put it in the new array
  })

  return (
    <nav className="text-light bg-secondary h-100 py-3 px-1 channel-nav">
      <ul>
        {liArray}
      </ul>
    </nav>
  )
}