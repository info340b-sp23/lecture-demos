import React from "react";

function UnmountNode(props) {
  function handleClick() {
    props.root.unmount();
  }

  return (
    <div className="container">
      <button className="btn btn-warning" onClick={handleClick}>Click to unmount</button>
    </div>
  );
}

export default UnmountNode;