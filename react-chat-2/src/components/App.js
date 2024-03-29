import React, {useState} from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';

function App(props) {
  const [currentChannel, setCurrentChannel] = useState("general")

  function setNewChannel(channelString) {
    setCurrentChannel(channelString);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList setNewChannel={setNewChannel}/>
        </div>
        <div className="col d-flex flex-column">
          <ChatPane currentChannel={currentChannel}/> 
        </div>
      </div>
    </div>
  );
}

export default App;