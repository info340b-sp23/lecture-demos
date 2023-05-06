import React from 'react';

export function ChannelList(props) {

  //data! (an array of strings)
  const CHANNEL_NAMES_ARRAY = ['general', 'random', 'dank-memes', 'birds', 'channel-5'];


  //content!! (an array of `<li>`)
  const liArray = CHANNEL_NAMES_ARRAY.map((channelNameString) => {
    const liElem = (
      <li key={channelNameString}>
        <a href={"/"+channelNameString}>{channelNameString}</a>
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