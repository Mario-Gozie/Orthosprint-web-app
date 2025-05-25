import React from "react";

import { BsArrowUpRightCircle } from "react-icons/bs";

import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="home">
      <div className="home-wrapper">
        <div className="overlay"></div>
        <div className="text">
          <h2>Orthosprint Orthotics and Prosthetics</h2>
          <h1>Empowering Your Journey to Progress</h1>

          <p>
            At our Prosthetic and Orthotic Centre in Abia State, Nigeria, we
            offer personalized solutions to enhance mobility and restore
            independence. Our experienced team is dedicated to empowering
            individuals with the support they need to improve their quality of
            life. Start your journey to greater freedom today!
          </p>
          <div className="consultation-button-container">
            <div className="dot"></div>
            <div className="straight-line"></div>
            <Link to="/admin" className="consultation-button">
              <div className="button-text">Book consultation</div>
              <BsArrowUpRightCircle
                className="text-yellow-500"
                style={{
                  fontSize: "32px",
                  color: "white",
                  backgroundColor: "#facc15",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
