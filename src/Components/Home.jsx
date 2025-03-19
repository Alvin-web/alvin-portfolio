import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Picture from "../assets/Programming-amico.png";
import image from "../assets/Innovation-amico.png";
import "./Styles.css";
import BlurText from "./BlurText";
import TrueFocus from "./TrueFocus";
import "bootstrap-icons/font/bootstrap-icons.css";

import About from "./About";
const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function () {
  return (
    <>
      <div>
        <div id="main">
          <div className="main-text">
            <div className=" hero-text container fw-bold fs-1" id="text">
              <BlurText
                text="<h1> Hi, I'm Alvin </h1>"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl mb-8"
              />
            </div>
            <div className="h2 text-light" id="sec-text">
              <BlurText
                text="I'm a Web designer and Frontend developer"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
              />
            </div>
            <div>
              <Link to="/About">
                <button className="main-button">
                  See more about me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.3.3 0 0 1 .3-.3h11.793l-3.147-3.146a.3.3 0 0 1 .708-.708l4 4a.3.3 0 0 1 0 .708l-4 4a.3.3 0 0 1-.708-.708L13.293 8.5H1.5A.3.3 0 0 1 1 8"
                    />
                  </svg>
                </button>
              </Link>
            </div>

            <div className="icon text-light">
              <a href="https://github.com/Alvin-web">
                <span className="pe-3">
                  <i class="bi bi-github icons"></i>
                </span>
              </a>
              <span className="pe-3">
                <i class="bi bi-linkedin icons"></i>
              </span>
            </div>
          </div>

          <div>
            <img className="main-img" src={image} />
          </div>
        </div>
        <div  className="second-sec">
          <div className="gege">
            <img className="second-sec-img" src={Picture} />
          </div>

          <div className="second-sec-text">
            <div className="tf">
              {/* Example 2: Customized speed and characters */}
              <TrueFocus
                sentence="Want to see my projects?"
                manualMode={false}
                blurAmount={3}
                borderColor="white"
                animationDuration={1}
                pauseBetweenAnimations={0.5}
              />
            </div>
            <div className="yap">
              <p className="yap fw-bold">
                In my leisure time, I enjoy experimenting with and building
                things that I find personally interesting or useful.
              </p>
            </div>
            <div className="second-sec-button">
              <Link to="./Project">
                <button className="main-buttonn">View my projects</button>
              </Link>
              
            </div>
          </div>
        </div>

        <div className="thirdsec">
        </div>
      </div>
    </>
  );
}
