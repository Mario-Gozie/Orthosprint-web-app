import React from "react";
import { Calendar } from "lucide-react";
import DateUI from "./DateUI";
import BookAppointmentForm from "./BookAppointmentForm";

function Booking() {
  return (
    <div className="appointment-booking">
      <div className="booking-welcome-text">
        <div>
          <h3>Orthosprint Prosthetic & Orthotic Centre</h3>
          <p>Book Your Appointment</p>
        </div>
        <div className="availble-days-info-container">
          <Calendar />
          <p>Available: Mondays, Wednesdays & Fridays</p>
        </div>
      </div>
      <DateUI />
      <BookAppointmentForm />
    </div>
  );
}

export default Booking;
