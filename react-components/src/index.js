import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


let message = "Hello world! I am a second new message";

const msgElement = (
  <div>
    <h1 id="heading1" className="classh1 m-5">
      Hello World this is INFO340!
    </h1>
    <p> {message} </p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  msgElement
);