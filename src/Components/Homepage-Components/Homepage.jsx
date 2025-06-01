import React from "react";
import { useEffect, useState } from "react";
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
  const [fetchError, setFetchError] = useState(null);

  const [staff, setStaff] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      const { data, error } = await supabase.from("Orthosprint_Team").select();

      if (error) {
        setFetchError(`Could not fetch the staff`);
        setStaff(null);
        console.log(error);
        console.log(fetchError);
      }

      if (data) {
        setStaff(data);
        setFetchError(null);
        console.log(data);
      }
    };
    fetchStaff();
  }, []);
  return (
    <>
      <Nav />
      <Home />
      <AboutUs />
      {staff && <p>{staff[0].id}</p>}
      <Services />
      <Testimonies />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
