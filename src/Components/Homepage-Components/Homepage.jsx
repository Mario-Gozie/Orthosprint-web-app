import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Testimonies from "./Testimonies";
import Contact from "./Contact";
import Nav from "./HomepageNav";
import "C:/Users/MarioGozie/Desktop/orthosprint-web-app/src/Css/homepageCss.css";

function Homepage() {
  return (
    <>
      <Nav />
      <Home />
      <AboutUs />
      <Services />
      <Testimonies />
      <Contact />
    </>
  );
}

export default Homepage;
