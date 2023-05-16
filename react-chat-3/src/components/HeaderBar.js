import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DEFAULT_USERS = [
  { userId: null, userName: "Log Out", userImg: '/img/null.png' }, //null user
  { userId: "penguin", userName: "Penguin", userImg: '/img/Penguin.png' },
  { userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png' },
  { userId: "zebra", userName: "Zebra", userImg: '/img/Zebra.png' },
]

export function HeaderBar(props) {
  const currentUserObj = props.currentUserObj;
  const updateUser = props.updateUser;
  //event handler
  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    console.log(selectedUserObj);
    //do something with userObj!
    // switching to a new user
    updateUser(selectedUserObj);
  }

  //for convenience
  const userButtons = DEFAULT_USERS.map((userObj) => {

    let btnClassStr = "btn user-icon";

    if (userObj.userId === currentUserObj.userId) {
      btnClassStr += " bg-warning"
      return null;
    }

    return (
      <Dropdown.Item
        className={btnClassStr}
        key={userObj.userName}
        name={userObj.userId}
        onClick={handleClick}>
        <img src={userObj.userImg} alt={userObj.userName + " avatar"} /> {userObj.userName}
      </Dropdown.Item>
      // <button
      //   className={btnClassStr}
      //   key={userObj.userName}
      //   name={userObj.userId}
      //   onClick={handleClick}
      // >
      //   <img src={userObj.userImg} alt={userObj.userName + " avatar"} />
      // </button>
    )
  })

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Chat</h1>
      <div>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Users
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {userButtons}
            {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
        
      </div>
    </header>
  )
}