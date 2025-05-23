import React from "react";
import ServicesCards from "./ServicesCards";

function Services() {
  return (
    <section id="services">
      {" "}
      <div className="services-container">
        <div className="services-text">
          <h2>Our Specialized Services</h2>
          <p>
            We offer comprehensive care and cutting-edge solutions tailored to
            your specific needs.
          </p>
        </div>

        <ServicesCards />
      </div>
    </section>
  );
}

export default Services;
