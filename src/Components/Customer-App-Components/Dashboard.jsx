import React from "react";
import Welcome from "./Welcome";
import AppointmentCards from "./AppointmentCards";
import "../../Css/CustomerAppCss.css";

function Dashboard() {
  return (
    <div className="app-dashboard">
      <Welcome />
      <AppointmentCards />
    </div>
  );
}

export default Dashboard;
