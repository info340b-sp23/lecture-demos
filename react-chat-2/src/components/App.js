import React, {useState} from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';

function App(props) {
  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList/>
        </div>
        <div className="col d-flex flex-column">
          <ChatPane/>
        </div>
      </div>
    </div>
  );
}

export default App;