import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Homepage() {
  const location = useLocation();
  const aboutRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    // Chek URL hash (e.g., /#about, /#contact)

    const hash = location.hash;

    if (hash === "#about") {
      aboutRef.current?.scrollIntoView({ behaviour: "smooth" });
    } else if (hash === "#contact") {
      contactRef.current?.scrollIntoView({ behaviour: "smooth" });
    }
  }, [location]);

  return (
    <>
      <section>Hero Barner</section>
      <section ref={aboutRef}>About Us</section>
      <section ref={aboutRef}>Services</section>
      <section ref={aboutRef}>Testimonies</section>
      <section ref={contactRef}>Contact</section>
    </>
  );
}

export default Homepage;
