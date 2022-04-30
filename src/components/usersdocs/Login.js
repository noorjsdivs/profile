import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../firebaseconfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

function Login() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  let [email, setEmail] = useState("");
  let [erremail, setErremail] = useState("");
  let [password, setPassword] = useState("");
  let [errpassword, setErrpassword] = useState("");
  let [alertnotify, setAlertnotify] = useState(true);
  let [loading, setLoading] = useState(false);
  let [activeUser, setActiveuser] = useState("");

  //   Onchange Value
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };
  //   Submit button value
  let handleSubmit = (e) => {
    e.preventDefault();
    if (email == "") {
      setErremail("Give a valid Email");
    } else if (password == "") {
      setErrpassword("Give a password");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          setLoading(true);
          // Signed in
          navigate("/dashboard");
          setLoading(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  const notify = () => toast(state);
  if (alertnotify) {
    if (state) {
      notify();
      setAlertnotify(false);
    }
  }
  return (
    <div className="registration">
      <div className="gapping"></div>
      <form className="form">
        <h2 className="title">Login form</h2>

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

        <button onClick={handleSubmit} className="submitbtn">
          {loading ? <div className="sp sp-sphere"></div> : "Submit"}
        </button>
        <p className="loginnow">
          Already have an Account?{" "}
          <Link className="link" to={"/registration"}>
            <b> Sign Up</b>
          </Link>{" "}
          /
          <Link className="link" to={"/"}>
            <b> Dashboard</b>
          </Link>
        </p>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Login;
