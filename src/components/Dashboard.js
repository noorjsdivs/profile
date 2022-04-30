import { useState, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image_logo from "../images/mern.png";
import Image_profile from "../images/profile_Picture.png";
import updateImage__1 from "../images/client__1.png";
import updateImage__2 from "../images/client__3.png";
import updateImage__3 from "../images/client__2.png";
import moment from "moment";
import "./Dashboard.css";

function Dashboard() {
  const auth = getAuth();
  const navigate = useNavigate();
  let [userName, setUsername] = useState("");
  let [chatboxaccess, setChatboxaccess] = useState("");
  var date = moment().format("DD-MM-YYYY");
  let [showingwatch, setShowingwatch] = useState("");
  var oneDate = moment();
  var dayName = oneDate.format("dddd");

  const sideMenu = document.querySelector("aside");
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  let notify = () => toast.error();

  let clock = () => {
    const watch = new Date().toLocaleTimeString();
    setShowingwatch(watch);
  };
  setInterval(clock, 1000);

  // setInterval(watch, 1000);

  // ===================================== Show sidebar =====================================
  let handleMenu = () => {
    menuBtn.addEventListener("click", () => {
      sideMenu.style.display = "block";
    });
  };
  // ======================================= Close sidebar ===================================
  let handleMenuClose = () => {
    closeBtn.addEventListener("click", () => {
      sideMenu.style.display = "none";
    });
  };
  // =============================== Sidebar hover effect declare here =====================

  let sideBar = document.querySelectorAll(".design");
  let sideBarArr = Array.from(sideBar);

  function designChanging() {
    sideBarArr.map((design) => {
      design.addEventListener("mouseover", () => {
        design.classList.add("activeSidebar");
      });
    });
  }
  designChanging();

  function overOut() {
    sideBarArr.map((design, index) => {
      design.addEventListener("mouseout", () => {
        design.classList.remove("activeSidebar");
      });
    });
  }
  overOut();

  // ============================= Background theme changer start here==========================
  let themeToggle = () => {
    let themeToggler = document.querySelector(".theme-toggler");
    themeToggler.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme-variables");
      themeToggler
        .querySelector("span:nth-child(1)")
        .classList.toggle("active");
      themeToggler
        .querySelector("span:nth-child(2)")
        .classList.toggle("active");
    });
  };
  // ====================================== User state check here==========================

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUsername(auth.currentUser.displayName);
      setChatboxaccess(auth.currentUser.uid);
      // ...
    } else {
      // console.log("No user sign in");
    }
  });
  // ====================================== Sign Out value goes here==========================
  let handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signout successfully");
        alert("Log out successfully");
        // notify(toast("LOGOUT SUCCESSFULLY_Thank you!"));
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let handleWelcomeMsg = () => {
    notify(toast(" YOUR ARE CURRENTLY LOGGED IN!!!"));
  };

  // ====================================== ChatBox access define here==========================
  let handleChatbox = () => {
    if (chatboxaccess !== "") {
      navigate("/chatbox");
    } else {
      notify(toast("ACCESS DENIED - NEED TO LOG IN_chatboxX"));
    }
  };
  let handleMembers = () => {
    if (chatboxaccess !== "") {
      navigate("/chatbox");
    } else {
      notify(toast("ACCESS DENIED - NEED TO LOG IN_members"));
    }
  };
  let handleRequest = () => {
    if (chatboxaccess !== "") {
      navigate("/chatbox");
    } else {
      notify(toast("ACCESS DENIED - NEED TO LOG IN_request"));
    }
  };
  let handleReadingMaterials = () => {
    navigate("/readingmaterials");
  };
  let handleSlider = () => {
    navigate("/sliderone");
  };
  let handleProducts = () => {
    navigate("/products");
  };
  let handleViewProjects = () => {
    navigate("/finishedprojects");
  };
  // setInterval(Dashboard, 1000);

  return (
    <>
      <div className="container">
        {/*=======================================================
                            Side bar start here 
       =======================================================*/}
        <aside>
          <div className="top">
            <div className="logo">
              <img src={Image_logo} alt="" />
              <h2>
                MERN <span className="danger">Group</span>
              </h2>
            </div>
            <div className="close" id="close-btn" onClick={handleMenuClose}>
              <span className="material-icons-sharp"> close </span>
            </div>
          </div>
          <div className="sidebar">
            <a onClick={handleChatbox} className="design">
              <span className="material-icons-sharp"> question_answer </span>
              <h3>Chat Room</h3>
            </a>
            <a onClick={handleMembers} className="design">
              <span className="material-icons-sharp"> person_outline </span>
              <h3>Members</h3>
            </a>
            <a onClick={handleRequest} className="design">
              <span className="material-icons-sharp"> receipt_long </span>
              <h3>Requests</h3>
            </a>
            <a onClick={handleReadingMaterials} className="design">
              <span className="material-icons-sharp"> insights</span>
              <h3>Reading Materials</h3>
            </a>
            <a className="design" onClick={handleSlider}>
              <span className="material-icons-sharp">
                <span class="material-icons-sharp">center_focus_strong</span>
              </span>
              <h3>Sliders</h3>
              <span className="message-count">2</span>
            </a>
            <a onClick={handleProducts} className="design">
              <span className="material-icons-sharp">inventory </span>
              <h3>Fake Store API</h3>
            </a>
            <a onClick={handleViewProjects} className="design">
              <span className="material-icons-sharp">
                report_gmailerrorred{" "}
              </span>
              <h3>View Projects</h3>
            </a>
            <a className="design">
              <span className="material-icons-sharp"> settings </span>
              <h3>Access</h3>
            </a>
            <a className="design">
              <span className="material-icons-sharp"> add </span>
              <h3>Add Members</h3>
            </a>
            <a onClick={handleLogout} className="design">
              <span className="material-icons-sharp"> logout </span>
              <h3>Logout</h3>
            </a>
          </div>
        </aside>
        {/*=======================================================
                            Side bar end here 
       =======================================================*/}
        {/*=======================================================
                            Middle part start here 
       =======================================================*/}
        <main>
          <div className="status">
            <div className="welcomeMsg">
              <h1>Welcome {userName ? userName : "Stranger"} !</h1>
            </div>
            {userName ? (
              <div onClick={handleWelcomeMsg} className="spin sp-wave">
                <div className=""></div>
              </div>
            ) : (
              ""
            )}

            <div className="login">
              <button className="registrationbtn">
                <Link to={"/registration"}>Registration</Link>
              </button>
              <button className="loginbtn">
                <Link to={"/login"}>login</Link>
              </button>
            </div>
          </div>
          <div className="date" id="current_date">
            {date} / {dayName} / Local Time_
            <span>{showingwatch}</span>
          </div>
          <div className="insights">
            {/*=============== Sales part start here =============*/}

            <div className="sales">
              <span className="material-icons-sharp"> groups </span>
              <div className="middle">
                <div className="left">
                  <h3>Total Projects</h3>
                  <h1>30</h1>
                </div>
                <div className="progress">
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>81%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            {/*=============== Sales part end here =============*/}

            {/*=============== Expences part start here =============*/}

            <div className="expenses">
              <span className="material-icons-sharp"> manage_accounts </span>

              <span className="material-icons-sharp"> pending </span>
              <div className="middle">
                <div className="left">
                  <h3>Active Projects</h3>
                  <h1>10</h1>
                </div>
                <div className="progress">
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>62%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            {/*=============== Expences part end here =============*/}

            {/*=============== Income part start here =============*/}
            <div className="income">
              <span className="material-icons-sharp"> group_add </span>
              <div className="middle">
                <div className="left">
                  <h3>Project Wishlist</h3>
                  <h1>10</h1>
                </div>
                <div className="progress">
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>44%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            {/*=============== Income part end here =============*/}
          </div>
          <div className="recent-orders">
            <h2>Published Reading Materials online</h2>
            <table>
              <thead>
                <tr>
                  <th>Topic Name</th>
                  <th>Search Key</th>
                  <th>Length</th>
                  <th>Start reading</th>
                  <th>Give Review</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>React Bootstrap</td>
                  <td>React_Bootstrap</td>
                  <td>30 minutes</td>
                  <td className="primary">Details</td>
                  <td className="danger">Unmarked</td>
                </tr>
                <tr>
                  <td>JavaScript Fundamentals</td>
                  <td>javaScript</td>
                  <td>1 hour</td>
                  <td className="primary">Details</td>
                  <td className="primary">Marked</td>
                </tr>
                <tr>
                  <td>Firebase Fundamentals</td>
                  <td>google firebase</td>
                  <td>1.5 hours</td>
                  <td className="primary">Details</td>
                  <td className="danger">Unmarked</td>
                </tr>
                <tr>
                  <td>Responsive Website</td>
                  <td>responsive_css</td>
                  <td>30 minutes</td>
                  <td className="primary">Details</td>
                  <td className="primary">Marked</td>
                </tr>
                <tr>
                  <td>Website Arrangements</td>
                  <td>html_css_javascript</td>
                  <td>2 hours</td>
                  <td className="primary">Details</td>
                  <td className="primary">Marked</td>
                </tr>
              </tbody>
            </table>
            <a>Show All</a>
          </div>
        </main>
        {/*=======================================================
                            Middle part end here 
       =======================================================*/}
        {/*=======================================================
                            Right part Start here 
       =======================================================*/}
        <div className="right">
          {/*=============== Top part start here =============*/}
          <div className="top">
            <button id="menu-btn">
              <span className="material-icons-sharp" onClick={handleMenu}>
                menu
              </span>
            </button>
            <div className="theme-toggler" onClick={themeToggle}>
              <span className="material-icons-sharp active">light_mode</span>
              <span className="material-icons-sharp">dark_mode</span>
            </div>
            <div className="profile">
              <div className="info">
                <p>
                  Hey, <b>Noor</b>
                </p>
                <small className="text-muted">Admin</small>
              </div>
              <div className="profile-photo">
                <img src={Image_profile} alt="" />
              </div>
            </div>
          </div>
          {/*=============== Top part end here =============*/}
          {/*=============== Recent Updates start here =============*/}

          <div className="recent-updates">
            <h2>Recent Updates</h2>
            <div className="updates">
              <div className="update">
                <div className="profile-photo">
                  <img src={updateImage__1} alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>Rakib Hasan </b>Commented about social welfare in the
                    group.
                  </p>
                  <small className="text-muted">2 Hours Ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img src={updateImage__2} alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>Mohammad </b>Arranging a Home party to celebrate the
                    Group Achievements.
                  </p>
                  <small className="text-muted">2 Minutes Ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img src={updateImage__3} alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>Christina </b>joined as a web developer in MERN Group.
                  </p>
                  <small className="text-muted">a month Ago</small>
                </div>
              </div>
            </div>
          </div>
          {/*=============== Recent Updates end here =============*/}

          {/*=============== Sales Analytics start here =============*/}

          <div className="sales-analytics">
            <h2>Business Analytics</h2>
            <div className="item online">
              <div className="icon">
                <span className="material-icons-sharp">shopping_cart</span>
              </div>
              <div className="right">
                <div className="info">
                  <h3>EVENTS</h3>
                  <small className="text-muted">Last 24 Hours</small>
                </div>
                <h5 className="success">+39%</h5>
                <h3>3849</h3>
              </div>
            </div>
            <div className="item offline">
              <div className="icon">
                <span className="material-icons-sharp">local_mall</span>
              </div>
              <div className="right">
                <div className="info">
                  <h3>FIND SPONSORS</h3>
                  <small className="text-muted">Last 24 Hours</small>
                </div>
                <h5 className="danger">-11%</h5>
                <h3>1100</h3>
              </div>
            </div>
            <div className="item customers">
              <div className="icon">
                <span className="material-icons-sharp">person</span>
              </div>
              <div className="right">
                <div className="info">
                  <h3>NEW MEMBERS</h3>
                  <small className="text-muted">Last 24 Hours</small>
                </div>
                <h5 className="success">+25%</h5>
                <h3>849</h3>
              </div>
            </div>
            <div className="item add-product">
              <div>
                <span className="material-icons-sharp">add</span>
                <h3>Add Components</h3>
                <div className="spin sp-wave"></div>
              </div>
            </div>
          </div>
          {/*=============== Sales Analytics end here =============*/}

          {/*=======================================================
                            Right part end here 
       =======================================================*/}
        </div>
      </div>
      {/* ==================== Notification start here ====================== */}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Dashboard;
