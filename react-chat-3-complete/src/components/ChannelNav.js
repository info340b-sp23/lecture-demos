import React from 'react';

export function ChannelList(props) {
  const {currentChannel, howToChangeTheChannel, channelMessageCounts} = props;

  //data! (an array of strings)
  const CHANNEL_NAMES_ARRAY = ['general', 'random', 'dank-memes', 'birds', 'channel-5'];

  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target);
    const chosenChannel = event.target.name;
    howToChangeTheChannel(chosenChannel);
  }

  //content!! (an array of `<li>`)
  const liArray = CHANNEL_NAMES_ARRAY.map((channelNameString) => {
    const count = channelMessageCounts[channelNameString] || 0;
    const liElem = (
      <li key={channelNameString}>
        <a 
          name={channelNameString}
          onClick={handleClick}
          href={"/"+channelNameString}>{channelNameString} ({count})</a>
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