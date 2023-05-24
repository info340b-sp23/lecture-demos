import React from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DEFAULT_USERS from '../data/users.json';

export function HeaderBar(props) {
  const currentUser = props.currentUser;
  const navigateTo = useNavigate(); //navigation hook

  const handleSignOut = (event) => {
    console.log("signing out");
    navigateTo("");
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
          {( currentUser && currentUser.userId) && 
          <>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">Profile</NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
          }
          {( !currentUser || !currentUser.userId) &&
            <li className="nav-item">
              <NavLink className="nav-link" to="/signin">
                <img src='/img/null.png' alt="Sign out" />
              </NavLink>
            </li>
          }
        </ul>
      </nav>

    </header>
  )
}