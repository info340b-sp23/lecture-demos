import React from 'react';

export function ChanellList(props) {

  const ChannelArray = ["general", "random", "chat", "info340", "info341", "info342"]

  console.log("I am rendered in the channel list");

  const ChanellListElemArray = ChannelArray.map((channelString) => {return (
    <li key={channelString}>
      <a className="text-success" href={"/"+channelString}>
      {channelString}
      </a>
    </li>
  )})

  return (
    <div>
      <ul className="channel-list">
        {ChanellListElemArray}
      </ul>
    </div>
  )
} 