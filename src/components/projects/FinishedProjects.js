import React from "react";
import { Link } from "react-router-dom";
import Images1 from "../../images/amazon/amazon__1.png";
import ImgProduct from "../../images/amazon/amazon__3.png";
import ImgAmazonLogin from "../../images/amazon/amazon__login.png";
import ImgAmazonRegistration from "../../images/amazon/amazon__registration.png";
import SaharaImg1 from "../../images/sahara/sahara__1.png";
import SaharaImg2 from "../../images/sahara/sahara__2.png";
import SaharaImg3 from "../../images/sahara/sahara__3.png";
import "./FinishedProjects.css";

function FinishedProjects() {
  return (
    <>
      <div className="finishProjects">
        <div className="finishProjectsContainer">
          <div className="title">
            <h1>
              Some of my Projects view before submitting the Client with actual
              requirements
            </h1>
            <Link to={"/dashboard"}>
              <button className="loginbtn">Dashboard</button>
            </Link>
          </div>

          <div className="projectCards">
            <div className="firstRow">
              <div className="productBox">
                <div className="desone">
                  <img src={Images1} alt="" />
                  <p>
                    Amazon clone Home page with react-respnosive-slider.
                    Designed with amazon actual navbar.
                  </p>
                </div>
                <div className="desone">
                  <img src={ImgProduct} alt="" />
                  <p>
                    Product are showing here with Add to Basket Button and
                    advertisement logo.
                  </p>
                </div>
                <div className="desone">
                  <img src={ImgAmazonLogin} alt="" />
                  <img
                    className="loginImg"
                    src={ImgAmazonRegistration}
                    alt=""
                  />
                  <p className="loginRes">
                    Login and Registration page with Firebase Authentication
                    using Email varification and Custome setup of Users data
                    Recovery.
                  </p>
                </div>
                <a href="https://noormohammad.netlify.app/" target="_blank">
                  <button className="loginbtn">Amazon_Clone-page</button>
                </a>
              </div>
              <div className="productBox">
                <div className="desone">
                  <img src={SaharaImg1} alt="" />
                  <p>
                    Sahara Hospitality Company S.A.O.G proposed Website with
                    extensive Home Page.
                  </p>
                </div>
                <div className="desone">
                  <img src={SaharaImg2} alt="" />
                  <p>
                    Detail-oriented about companies work and other activities.
                    Seperately linked pages for each and every section.
                  </p>
                </div>
                <div className="desone">
                  <img src={SaharaImg3} alt="" />
                  <p className="loginRes">
                    Bootstrap and pure CSS are used to keep the design pattern
                    as requested.
                  </p>
                </div>
                <a
                  href="https://unknown2832021.github.io/Sahara_Hospitality_Company/index.html"
                  target="_blank"
                >
                  <button className="loginbtn">Sahara Hospitality__Demo</button>
                </a>
              </div>
            </div>
            <div className="secondRow">
              <div className="productBox"></div>
              <div className="productBox"></div>
              <div className="productBox"></div>
            </div>
            {/* <div className="ThirdRow">
              <div className="productBox"></div>
              <div className="productBox"></div>
              <div className="productBox"></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default FinishedProjects;
