import React, {useState} from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';

function App(props) {
  const [currentChannel, setCurrentChannel] = useState('general');

  const changeChannel = (newChannel) => {
    setCurrentChannel(newChannel); //changes the state variable (in RAM)
                                 //AND re-renders the component

  }


  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList currentChannel={currentChannel} howToChangeTheChannel={changeChannel} />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane currentChannel={currentChannel} />
        </div>
      </div>
    </div>
  );
}

export default App;