import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import { getAuth, signOut } from 'firebase/auth';


const DEFAULT_USERS = [
  { userId: null, userName: "Log Out", userImg: '/img/null.png' }, //null user
  { userId: "penguin", userName: "Penguin", userImg: '/img/Penguin.png' },
  { userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png' },
  { userId: "zebra", userName: "Zebra", userImg: '/img/Zebra.png' },
]

export function HeaderBar(props) {
  const currentUser = props.currentUser;
  const setCurrentUser = props.setCurrentUser;

  const handleSignOut = (event) => {
    console.log("signing out");
    setCurrentUser(DEFAULT_USERS[0]);
    signOut(getAuth());
  }

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Chat</h1>

      <nav>
        {/* links go here */}
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/chat">Chat</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          {currentUser && currentUser.userId && 
          <>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">Profile</NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        }
        {!currentUser || !currentUser.userId &&
          <li className="nav-item">
            <NavLink className="nav-link" to="/signin">
              {/* <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} /> */}
              Sign In
            </NavLink>
          </li>
        }
        </ul>
      </nav>

    </header>
  )
}