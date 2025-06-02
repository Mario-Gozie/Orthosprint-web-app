import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Team from "./Team";
import Testimonies from "./Testimonies";
import Contact from "./Contact";
import Nav from "./HomepageNav";
import Footer from "./Footer";
import "../../Css/homepageCss.css";

function Homepage() {
  return (
    <>
      <Nav />
      <Home />
      <AboutUs />
      <Services />
      {/* <Team /> */}
      <Testimonies />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
