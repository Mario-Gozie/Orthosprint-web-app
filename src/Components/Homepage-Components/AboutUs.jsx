import React from "react";
import aboutImg1 from "../../assets/aboutImg1.jpg";
import aboutImg2 from "../../assets/aboutImg2.jpg";
import AboutServiceList from "./AboutServiceList";

function AboutUs() {
  return (
    <section id="about">
      <div className="about-container" style={{ height: "100%" }}>
        <div className="about-img-container">
          <div className="about-image-container-1">
            <img className="about-img-1" src={aboutImg1} alt="" />
          </div>
          <div className="about-svg-container"></div>
          <div className="about-image-container-2">
            <img className="about-img-2" src={aboutImg2} alt="" />
          </div>
          <div className="about-svg-container"></div>
        </div>
        <div className="about-text-container">
          <h2>About us</h2>
          <h3>The Great Place for Prosthetic and Orthotic Services</h3>
          <AboutServiceList />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
