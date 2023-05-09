import React from 'react';
import { HeaderBar } from './Header';
import { ChanellList } from './Channel';
import MessagePane from './MessagePane';

function App(props) {
  return (
    <div className="container-fluid">
      <HeaderBar />
      {/* <WorkplaceList /> */}
      <div className="row">
        <div className="col-3">
          <ChanellList />
        </div>
        <div className="col">
          <MessagePane />
        </div>
      </div>
      {/* <UserPane /> */}
    </div>
  );
}

export default App;