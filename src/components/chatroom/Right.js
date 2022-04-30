import { useEffect, React, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./Right.css";

function Right() {
  const auth = getAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [joiningdate, setJoiningdate] = useState("");
  let [timing, setTiming] = useState("");
  let [profileImage, setProfileImage] = useState("");
  let [users, setUsers] = useState([]);
  let [activeUser, setActiveuser] = useState("");
  let [requsers, setRequsers] = useState([]);
  let [clickactiveuser, setClickactiveuser] = useState("");
  let dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
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

  // =============================Getting all current members from database=====================
  let userArr = [];
  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (activeUser !== item.val().id) {
          userArr.push(item.val());
        }
      });
      setUsers(userArr);
    });
  }, [activeUser]);

  // request show
  let reqArr = [];
  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "request/");
    onValue(userRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (activeUser !== item.val().id) {
          reqArr.push(item.val());
        }
      });
      setRequsers(reqArr);
    });
  }, [activeUser]);

  let handleActive = (id) => {
    setClickactiveuser(id);
    dispatch({ type: "ACTIVE_USER", payload: id });
  };
  let userdata = useSelector((item) => item);

  let handleSendingRequest = (item) => {
    // console.log(item.id, item.username);
    // console.log(auth.currentUser.displayName);
    const db = getDatabase();
    set(ref(db, "request/" + auth.currentUser.uid), {
      username: auth.currentUser.displayName,
      reciever: item.id,
      sender: auth.currentUser.uid,
    });
  };

  let handleAcceptRequest = (item) => {
    console.log(item.sender, item.username);
    console.log(item.reciever);
    const db = getDatabase();
    set(ref(db, "friends/" + auth.currentUser.uid), {
      username: item.username,
      friendid: item.sender,
      useradmin: item.reciever,
    });
    remove(ref(db, "request/" + item.sender));
  };

  return (
    <>
      <h2>Group Control Panel</h2>
      <div className="timing">
        <h6>
          Account created At:
          <p className="info">{moment(timing).fromNow()}</p>
        </h6>
      </div>
      <div className="signInMembersList">
        <h6>Existing Members:</h6>
        {users.map((item) => (
          <h4
            style={clickactiveuser == item.id ? active : notactive}
            key={"item"}
            onClick={() => handleActive(item.id)}
          >
            {item.username}{" "}
            <span
              onClick={() => handleSendingRequest(item)}
              class="material-icons-sharp"
              title="Add Group Member"
            >
              person_add_alt
            </span>
          </h4>
        ))}
      </div>
      <div className="sendRequestList">
        <h6>Request Send:</h6>
        {requsers.map((item) =>
          item.reciever == auth.currentUser.uid ? (
            <h4 key={"item"}>
              {item.username}
              <span
                class="material-icons-sharp"
                title="Add Group Member"
                onClick={() => handleAcceptRequest(item)}
              >
                person_add_alt
              </span>
            </h4>
          ) : (
            ""
          )
        )}
      </div>
      <div className="item add-product">
        <div className="AddComments">
          <div className="addCommentsTitle">
            <span className="material-icons-sharp">add</span>
            <h3>Add Comments</h3>
          </div>
          <div class="spin sp-wave"></div>
        </div>
      </div>
    </>
  );
}

let active = {
  color: "red",
};
let notactive = {
  color: "#000",
};
export default Right;
