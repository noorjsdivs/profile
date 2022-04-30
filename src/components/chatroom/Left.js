import { React, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "./Chatbox.css";
import { Link } from "react-router-dom";
import "./Left.css";

function Left() {
  const auth = getAuth();
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [joiningdate, setJoiningdate] = useState("");
  let [timing, setTiming] = useState("");
  let [profileImage, setProfileImage] = useState("");
  let [activeUser, setActiveuser] = useState("");
  let [acceptedfriends, setAcceptedfriends] = useState([]);
  let [currentuser, setCurrentuser] = useState("");

  //======================== Leftpart start here ==============================

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setCurrentuser(uid);
      setUsername(auth.currentUser.displayName);
      setEmail(auth.currentUser.email);
      setJoiningdate(auth.currentUser.metadata.creationTime);
      setTiming(user.metadata.creationTime);
      setActiveuser(user.uid);
      setProfileImage(user.photoURL);
      // ...
    } else {
      console.log("No user sign in");
    }
  });
  // ============================ Sign Out value goes here====================
  let handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signout successfully");
        alert("Log out successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // ====================== Profile picture modal start here==================
  let handleImageModal = () => {
    let imageModal = document.querySelector(".imageModal");
    imageModal.style.display = "block";
  };
  let friendsArr = [];
  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "friends/");
    onValue(userRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (activeUser !== item.val().id) {
          friendsArr.push(item.val());
        }
      });
      setAcceptedfriends(friendsArr);
    });
  }, []);
  // ================================= Profile picture modal end here
  return (
    <>
      {/* ==================================================================
                                LeftPart start here 
        ================================================================== */}
      <div className="leftPart">
        <h2 className="userTitle">Your Information is available here</h2>
        <div className="userInfo">
          <div className="profileImage">
            <img src={profileImage} alt="" />
            <div className="icons">
              <span
                onClick={handleImageModal}
                class="material-icons-sharp"
                title="Update your Profile Picture"
              >
                add_a_photo
              </span>
              <span class="material-icons-sharp" title="Create your Group">
                group_add
              </span>
              <span class="material-icons-sharp" title="Start messaging">
                question_answer
              </span>

              <span class="material-icons-sharp" title="Show Notification">
                pending
              </span>
            </div>
          </div>
          <h6>
            Your Name : <p className="info">{username}</p>
          </h6>
          <h6>
            Email : <p className="info">{email}</p>
          </h6>
          <h6>
            Joining Date:<p className="info joiningdate">{joiningdate}</p>
          </h6>
        </div>

        <div className="membersinfo">
          <h6>Friends:</h6>
          {acceptedfriends.map((item) =>
            item.activeUser !== currentuser ? (
              <h4 key={"item"}>
                {item.username}
                <span class="material-icons-sharp" title="Add Group Member">
                  group_add
                </span>
              </h4>
            ) : (
              ""
            )
          )}
        </div>

        <div className="buttons">
          <Link to={"/dashboard"}>
            <button className="loginbtn">Dashboard</button>
          </Link>
          <Link to={"/dashboard"}>
            <button onClick={handleLogout} className="loginbtn">
              Log out
            </button>
          </Link>
        </div>
      </div>
      {/* ==================================================================
                                LeftPart end here 
        ================================================================== */}
    </>
  );
}

export default Left;
