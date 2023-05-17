import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const DEFAULT_USERS = [
  { userId: null, userName: "Log Out", userImg: '/img/null.png' }, //null user
  { userId: "penguin", userName: "Penguin", userImg: '/img/Penguin.png' },
  { userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png' },
  { userId: "zebra", userName: "Zebra", userImg: '/img/Zebra.png' },
]

export function HeaderBar(props) {
  const currentUser = props.currentUser;


  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Chat - Live!</h1>

      <nav>
        {/* links go here */}
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/chat">Chat</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}