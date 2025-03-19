import React from 'react';
import  "../assets/html.svg"
import "./Project.css"
import first from "../assets/11.png"
import second from "../assets/22.png";
import third from "../assets/33.png"
import fourth from "../assets/44.png"



const Slider = () => {
  return (
     <>
      <div>
        <h2 className="head">Here are some of my recent projects</h2>
        <h4 className='text'>In my leisure time, I enjoy experimenting with and building things that I find personally interesting or useful. <br /> A few examples of these projects can be found on my <span><a className='span' href="www.github.com/Alvin-web">GitHub page</a></span>, <br /> where you can also find other miscellaneous creations I have worked on.</h4>
      </div>

     <section className="container">
      <div className="slider-wrapper">
        <div className="slider">
          <img
            id="slide-1"
            src={first}
            alt="3D rendering of an imaginary orange planet in space"
          />
          <img
            id="slide-2"
            src={second}
            alt="3D rendering of an imaginary green planet in space"
          />
          <img
            id="slide-3"
            src={third}
            alt="3D rendering of an imaginary blue planet in space"
          />
          <img
            id="slide-4"
            src={fourth}
            alt="3D rendering of an imaginary blue planet in space"
          />
        </div>
        <div className="slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
          <a href="#slide-4"></a>
        </div>
      </div>
    </section>
     
     </>

    
  );
};

export default Slider;
