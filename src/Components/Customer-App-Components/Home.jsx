import React from "react";
import Welcome from "./Welcome";
import AppointmentCards from "./AppointmentCards";
import "../../Css/CustomerAppCss.css";

function Home() {
  return (
    <div className="app-home">
      <Welcome />
      <AppointmentCards />
    </div>
  );
}

export default Home;
