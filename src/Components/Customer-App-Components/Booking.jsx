import React from "react";
import { Calendar } from "lucide-react";
import GenerateDate from "./GenerateDate";

function Booking() {
  console.log(GenerateDate());
  return (
    <div className="appointment-booking">
      <div>
        <h3>Orthosprint Prosthetic & Orthotic Centre</h3>
        <p>Book Your Appointment</p>
      </div>
      <div>
        <Calendar />
        <p>Available: Mondays, Wednesdays & Fridays</p>
      </div>
    </div>
  );
}

export default Booking;
