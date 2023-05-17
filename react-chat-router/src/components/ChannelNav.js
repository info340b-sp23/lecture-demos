import React from 'react';

export function ChannelList(props) {
  const {messageObjArray} = props; //extract from props

  const CHANNEL_NAMES_ARRAY = ['general', 'random', 'dank-memes', 'birds', 'channel-5'];

  //count how many messages in each channel
  const channelMessageCounts = messageObjArray.reduce( (acc, curr) => {
    const whichChannel = curr.channel;
    if(!acc[whichChannel]){ //if doesn't exist yest
      acc[whichChannel] = 0; //start at 0
    }
    acc[whichChannel] = acc[whichChannel] + 1;    
    return acc; //ideally should a copy;

  }, {}) //initialize as an empty object 


  //content!! (an array of `<a>`)
  const linkElemArray = CHANNEL_NAMES_ARRAY.map((channelNameString) => {
    const count = channelMessageCounts[channelNameString] || 0;
    const linkElem = (
      <div key={channelNameString}>
        <a 
          name={channelNameString}
          href={"/"+channelNameString}>{channelNameString} ({count})</a>
      </div>
    )
    return linkElem; //put it in the new array
  })

  return (
    <nav className="text-light bg-secondary h-100 py-3 px-1 channel-nav">
      {linkElemArray}
    </nav>
  )
}