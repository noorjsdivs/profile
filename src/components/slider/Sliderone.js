import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import sliderImageOne from ".././../images/Slider/1.jpg";
import sliderImageTwo from ".././../images/Slider/2.jpg";
import sliderImageFour from ".././../images/Slider/4.jpg";
import sliderImageFive from ".././../images/Slider/5.jpg";
import sliderImageSix from ".././../images/Slider/6.jpg";
import sliderImageSeven from ".././../images/Slider/7.jpg";
import nextImage from ".././../images/Slider/next.png";
import "./Sliderone.css";

function Sliderone() {
  return (
    <>
      <div className="startupSlider">
        <h2 className="sliderOneTitle">
          React-responsive-slider demo start over here
        </h2>
        <Link to={"/dashboard"}>
          <button className="loginbtn">Dashboard</button>
        </Link>
      </div>
      <div className="sliderone">
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showStatus={true}
          showThumbs={true}
          showIndicators={true}
        >
          <div>
            <img
              className="slides"
              loading="lazy"
              alt="image_1"
              src={sliderImageOne}
            />
            <p className="legend">
              What I love is to see the nature from a closer!
            </p>
          </div>
          <div>
            <img
              className="slides"
              loading="lazy"
              alt="image_2"
              src={sliderImageTwo}
            />
            <p className="legend">
              Capture the memories like the way you wanna capture your loved
              ones in your arms.
            </p>
          </div>
          <div>
            <img
              className="slides"
              loading="lazy"
              alt="image_3"
              src={sliderImageOne}
            />
            <p className="legend">
              Sometimes it's better not to see closer of everything.
            </p>
          </div>
          <div>
            <img
              className="slides"
              loading="lazy"
              alt="image_4"
              src={sliderImageFour}
            />
            <p className="legend">
              The best way to realize how lucky you are just to visualize the
              nature.
            </p>
          </div>
          <div>
            <img
              className="slides"
              loading="lazy"
              alt="image_5"
              src={sliderImageFive}
            />
            <p className="legend">Fifth Image</p>
          </div>
          <div>
            <img
              className="slides"
              loading="lazy"
              alt="image_6"
              src={sliderImageSix}
            />
            <p className="legend">Sixth Image</p>
          </div>
          <div>
            <img
              className="slides"
              loading="lazy"
              alt="image_7"
              src={nextImage}
            />
            <p className="legend">Next logoImage</p>
          </div>
          <div>
            <img
              className="slides"
              loading="lazy"
              alt="image_next"
              src={sliderImageOne}
            />
            <p className="legend">Third Image</p>
          </div>
        </Carousel>
        <h2 className="sliderOneTitle">Reponsive slider the way we learned</h2>
      </div>
    </>
  );
}

export default Sliderone;
