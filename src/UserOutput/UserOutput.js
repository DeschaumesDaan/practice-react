import React from "react";
import './UserOutput.css';


const UserOutput = props => {
  return (
    <div className="user-output.css">
      <p>
        Username: {props.testname}
      </p>
      <p>I hope this will be overwritten</p>
      <p>{props.children}</p>
    </div>
  );
};

export default UserOutput;