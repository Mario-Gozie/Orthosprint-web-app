import React from "react";
import ServicesCards from "./ServicesCards";

function Services() {
  return (
    <section style={{ height: "100vh" }} id="services">
      {" "}
      <div className="services-container">
        <div className="services-text">
          <h2>Our Specialized Services</h2>
          <p>
            We offer comprehensive care and cutting-edge solutions tailored to
            your specific needs.
          </p>
        </div>
        <div className="services-card-container">
          <ServicesCards />
        </div>
      </div>
    </section>
  );
}

export default Services;
