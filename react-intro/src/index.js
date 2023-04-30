import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const messageString = "I am a string";

const msgObj = (
  <div>
    <header>
      <h1 id="hello" className="myclass m-4">Hello World</h1>
    </header>
    <body>
      <p>{messageString}</p>
    </body>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(msgObj);

