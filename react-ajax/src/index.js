import React from 'react';
import ReactDOM from 'react-dom/client';
import 'whatwg-fetch';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App.js';
import UnmountNode from './components/Unmount';

// const url = "https://api.github.com/search/repositories?q=random&sort=stars";

// async function text(){
//   const response = await fetch(url);
//   const jsondata = await response.json();
//   console.log("text function finished");
//   console.log(jsondata.items[0])
// }

// function text_not_async(){
//   console.log("text_not_async function finished");
// }

// text();
// console.log("finished running text()");

// text_not_async();
// console.log("finished running text_not_async()");


//render the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <App />
  
</>);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
<>
<UnmountNode root={root}/>
  
</>);

