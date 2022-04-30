import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../firebaseconfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import damiImage from "../../images/profile_Picture.png";

import "./Registration.css";

function Registration() {
  const auth = getAuth();
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [errusername, setErrusername] = useState("");
  let [email, setEmail] = useState("");
  let [erremail, setErremail] = useState("");
  let [password, setPassword] = useState("");
  let [errpassword, setErrpassword] = useState("");
  let [cpassword, setCpassword] = useState("");
  let [errcpassword, setErrcpassword] = useState("");
  let [passmatch, setPassmatch] = useState("");
  let [loading, setLoading] = useState(false);

  //   Onchange Value
  let handleUsername = (e) => {
    setUsername(e.target.value);
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };
  let handleCpassword = (e) => {
    setCpassword(e.target.value);
  };
  //   Submit button value
  let handleSubmit = (e) => {
    e.preventDefault();
    if (username == "") {
      setErrusername("Please give your full Name");
    } else if (email == "") {
      setErremail("Give a valid Email");
    } else if (password == "") {
      setErrpassword("Give a password");
    } else if (cpassword == "") {
      setErrcpassword("Confirm your password");
    } else if (password !== cpassword) {
      setPassmatch("Passwrod not matched, try again!");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          setLoading(true);
          // Signed in
          updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: damiImage,
          })
            .then(() => {
              const db = getDatabase();
              set(ref(db, "users/" + user.user.uid), {
                username: username,
                createdAt: Date(),
                email: email,
                id: user.user.uid,
              });
            })
            .then(() => {
              setErrusername("");
              setErremail("");
              setErrpassword("");
              setErrcpassword("");
              setPassmatch("");
              setUsername("");
              setEmail("");
              setPassword("");
              setCpassword("");
              navigate("/login", {
                state: "Account created Successfully...",
              });
              setLoading(false);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          alert("Email already in use");

          // ..
        });
    }
  };

  return (
    <div className="registration">
      <div className="gapping"></div>
      <form className="form">
        <h2 className="title">Registration form</h2>
        <div className="mappinginput">
          <label>
            <h6>Full Name:</h6>
          </label>
          <input
            onChange={handleUsername}
            id="username"
            type="text"
            placeholder="enter your full name"
          />
          {errusername ? <p className="errmsg">{errusername}</p> : ""}
        </div>
        <div className="email mappinginput">
          <label>
            <h6>Email address:</h6>
          </label>
          <input
            onChange={handleEmail}
            id="email"
            type="email"
            placeholder="give a valid email"
          />
          {erremail ? <p className="errmsg">{erremail}</p> : ""}
        </div>
        <div className="password mappinginput">
          <label>
            <h6>Password:</h6>
          </label>
          <input
            onChange={handlePassword}
            id="password"
            type="password"
            placeholder="give a password"
          />
          {errpassword ? <p className="errmsg">{errpassword}</p> : ""}
        </div>
        <div className="cpassword mappinginput">
          <label>
            <h6>Confirm Password:</h6>
          </label>
          <input
            onChange={handleCpassword}
            id="cpassword"
            type="password"
            placeholder="confirm your password"
          />
          {errcpassword ? <p className="errmsg">{errcpassword}</p> : ""}
          {passmatch ? <p className="errmsg">{passmatch}</p> : ""}
        </div>
        <button onClick={handleSubmit} className="submitbtn">
          {loading ? <div className="sp sp-sphere"></div> : "Submit"}
        </button>
        <p className="loginnow">
          Already have an Account?{" "}
          <Link className="link" to={"/login"}>
            <b> Login</b>
          </Link>{" "}
          /
          <Link className="link" to={"/"}>
            <b> Dashboard</b>
          </Link>
        </p>
      </form>
      {/* <div className="sp sp-sphere"></div> */}
    </div>
  );
}

export default Registration;
