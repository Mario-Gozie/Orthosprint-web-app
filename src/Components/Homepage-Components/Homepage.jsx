import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Testimonies from "./Testimonies";
import Contact from "./Contact";
import Nav from "./HomepageNav";
import Footer from "./Footer";
import "../../Css/homepageCss.css";
import supabase from "../../config/supabaseClient.js";

function Homepage() {
  console.log(supabase);
  return (
    <>
      <Nav />
      <Home />
      <AboutUs />
      <Services />
      <Testimonies />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
