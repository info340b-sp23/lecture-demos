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
  apiKey: "AIzaSyB4RbdSdHrKcywDbd0Ga5vfgXj8bRnWCjU",
  authDomain: "react-chat-info340b-sp23.firebaseapp.com",
  projectId: "react-chat-info340b-sp23",
  storageBucket: "react-chat-info340b-sp23.appspot.com",
  messagingSenderId: "784264910279",
  appId: "1:784264910279:web:cece45ec5e9e92078eb5e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>    
);