import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Testimonies from "./Testimonies";
import Contact from "./Contact";
import Nav from "./Nav-Footer Components/Nav";

function Homepage() {
  const location = useLocation();

  const homeRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const testimoniesRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    // Chek URL hash (e.g., /#about, /#contact)

    const hash = location.hash;

    if (hash === "#home") {
      homeRef.current?.scrollIntoView({ behaviour: "smooth" });
    } else if (hash === "#about") {
      aboutRef.current?.scrollIntoView({ behaviour: "smooth" });
    } else if (hash === "#services") {
      servicesRef.current?.scrollIntoView({ behaviour: "smooth" });
    } else if (hash === "#testimonies") {
      testimoniesRef.current?.scrollIntoView({ behaviour: "smooth" });
    } else if (hash === "#contact") {
      contactRef.current?.scrollIntoView({ behaviour: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Nav />
      <Home ref={homeRef} />
      <AboutUs />
      <Services />
      <Testimonies />
      <Contact />
    </>
  );
}

export default Homepage;
