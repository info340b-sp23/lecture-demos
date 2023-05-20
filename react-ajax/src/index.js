import React from 'react';
import ReactDOM from 'react-dom/client';
import 'whatwg-fetch'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App.js';
import UnmountNode from './components/Unmount';

const url = "https://api.github.com/search/repositories?q=bootstrap&sort=stars"
const url_local = "http://localhost:3000"

//render the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <App />
  {/* <UnmountNode root={root}/> */}
</>);