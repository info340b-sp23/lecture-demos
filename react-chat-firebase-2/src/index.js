import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './components/App';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAztNYJ7990EhpZXF2tozazu0ATukDlL9A",
  authDomain: "react-chat-info340b-sp23-25df4.firebaseapp.com",
  databaseURL: "https://react-chat-info340b-sp23-25df4-default-rtdb.firebaseio.com",
  projectId: "react-chat-info340b-sp23-25df4",
  storageBucket: "react-chat-info340b-sp23-25df4.appspot.com",
  messagingSenderId: "152132246005",
  appId: "1:152132246005:web:94c3070c13536e27a828bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>    
);