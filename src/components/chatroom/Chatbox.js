import { useEffect, React, useState } from "react";
import { getAuth } from "firebase/auth";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import "./Chatbox.css";

function Chatbox() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    console.log(user.displayName);
  } else {
    // No user is signed in.
  }
  return (
    <div className="chatbox">
      {/* ==================================================================
                                LeftPart start here 
        ================================================================== */}
      <div className="leftPart">
        <Left />
      </div>
      {/* ==================================================================
                                LeftPart end here 
        ================================================================== */}
      {/* ==================================================================
                                MiddlePart start here 
        ================================================================== */}
      <div className="middlePart">
        <Middle />
      </div>
      {/* ==================================================================
                                MiddlePart end here 
        ================================================================== */}
      {/* ==================================================================
                                RightPart start here 
        ================================================================== */}
      <div className="rightPart">
        <Right />
      </div>
      {/* ==================================================================
                                RightPart end here 
        ================================================================== */}
    </div>
  );
}

export default Chatbox;
