import React from "react";
import AboutServiceList from "./AboutServiceList";

function AboutUs() {
  return (
    <section id="about">
      <div className="about-container" style={{ height: "100%" }}>
        <div className="about-img-container"></div>
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
