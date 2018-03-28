import React from "react";
import './UserInput.css';


const UserInput = props => {
  return (
    <div className="user-input.css">
      <input type="text" onChange={props.changed} value={props.testname} />
    </div>
  );
};

export default UserInput;