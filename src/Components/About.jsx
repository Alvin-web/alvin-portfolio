import React from "react";
import "./Styles.css";
import TiltedCard from "./TiltedCard";
import html from "../assets/html.svg";
import javascript from "../assets/javascript.svg";
import css from "../assets/css.svg";
import sass from "../assets/sass.svg";
import node from "../assets/node-js.svg";
import react from "../assets/react (2).svg";



export default function About() {
  return (
    <div className="about">
      <div className="hero-sec">
        <h1 className="heading">My Skills</h1>
        <h2 className="text-light">I work mostly with Frontend Technologies</h2>
        <h4 className="text-light">
          Here are some of the <span>tools</span> i've worked with over the
          years,
          <br /> for my <span>personal</span>, <span>professional</span> and{" "}
          <span>open source</span> projects.
        </h4>
        <div className="card-container">
          <div className="card">
            <a href="https://www.w3schools.com/html/">
              <TiltedCard
                imageSrc={html}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="80%"
                // containerHeight="300px"
                // containerWidth="300px"
                imageHeight="200px"
                imageWidth="200px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={<p className="tilted-card-demo-text">HTML</p>}
              />
            </a>
          </div>

          <div className="card">
            <TiltedCard
              imageSrc={css}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="70%"
              // containerHeight="300px"
              // containerWidth="300px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-demo-text">CSS</p>}
            />
          </div>

          <div className="card">
            <TiltedCard
              imageSrc={javascript}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="30%"
              // containerHeight="300px"
              // containerWidth="300px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Javascript</p>
              }
            />
          </div>

          <div className="cardd">
            <a href="https://react.dev/">
              <TiltedCard
                imageSrc={react}
                altText="50%"
                captionText="50%"
                // containerHeight="300px"
                // containerWidth="300px"
                imageHeight="200px"
                imageWidth="200px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">React JS</p>
                }
              />
            </a>
          </div>

          <div className="cardd">
            <TiltedCard
              imageSrc={sass}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="60%"
              // containerHeight="300px"
              // containerWidth="300px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-demo-text">Sass</p>}
            />
          </div>

          <div className="cardd">
            <TiltedCard
              imageSrc={node}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="60%"
              // containerHeight="300px"
              // containerWidth="300px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-demo-text">Node JS</p>}
            />
          </div>

          {/* Add more cards as necessary */}
        </div>

        <div className="about-skills">
          <div className="about-skill">
            <p className="p">HTML & CSS</p>
            <hr  style={{ width: "70%" }} />
            <p className="p">70%</p>
          </div>
          <div className="about-skill">
            <p className="p">React JS</p>
            <hr style={{ width: "50%" }} />
            <p className="p">50%</p>
          </div>
          <div className="about-skill">
            <p className="p">JavaScript</p>
            <hr style={{ width: "30%" }} />
            <p className="p">30%</p>
          </div>
          <div className="about-skill">
            <p className="p">Sass</p>
            <hr style={{ width: "60%" }} />
            <p className="p">60%</p>
          </div>
          <div className="about-skill">
            <p className="p">Node JS</p>
            <hr style={{ width: "40%" }} />
            <p className="p">40%</p>
          </div>
        </div>

        <button className="main-button-about" type="button">
          View Resume
        </button>
      </div>
    </div>
  );
}
