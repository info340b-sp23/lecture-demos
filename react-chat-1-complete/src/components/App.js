import React from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';

function App(props) {
  return (
    <div className="container-fluid">
      <HeaderBar />
      <div className="row">
        <div className="col-3">
          <ChannelList />
        </div>
        <div className="col">
          <ChatPane />
        </div>
      </div>
    </div>
  );
}

export default App;