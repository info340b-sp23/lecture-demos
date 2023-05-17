import React from 'react';

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
      <h1>React Chat</h1>

      <nav>
        {/* links go here */}
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/chat">Chat</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signin">
              <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
            </a>
          </li>
        </ul>
      </nav>

    </header>
  )
}