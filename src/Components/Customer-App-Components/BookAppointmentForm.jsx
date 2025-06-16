import { React, useState } from "react";
import { Calendar } from "lucide-react";
import services from "../../Data/jsonData/services.json";
import months from "../../Data/jsonData/months.json";
import TimeSlotPicker from "./TimePicker";

function BookAppointmentForm({ inputs, handleInputChange, isButtonDisabled }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", inputs);
  };

  return (
    <div className="book-appointment-detail-container">
      <h3>Appointment Details</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="service-specialist-container">
          <div className="service-container">
            <label htmlFor="">
              Service Type<span style={{ color: "red" }}> *</span>
            </label>
            <select
              required
              name="service"
              id=""
              value={inputs.service}
              onChange={handleInputChange}
            >
              <option value="">Select service</option>
              {services.map((service, index) => {
                return (
                  <option key={index} value={service.service}>
                    {service.service}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="specialist-container">
            <label htmlFor="">
              Specialist<span style={{ color: "red" }}> *</span>
            </label>
            <select
              required
              name="specialist"
              id=""
              value={inputs.specialist}
              onChange={handleInputChange}
            >
              <option value="">Select specialist</option>
              {months.map((month, index) => {
                return (
                  <option key={index} value={month}>
                    {month}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <TimeSlotPicker />
        <div className="extra-note-container">
          <label>Notes:</label>
          <textarea
            name="bookingNote"
            value={inputs.bookingNote}
            onChange={handleInputChange}
            placeholder="Describe your specific needs..."
          />
        </div>
        <button
          type="submit"
          className="btn-apt-submit"
          disabled={isButtonDisabled}
        >
          <Calendar /> <span>Book Appointment</span>
        </button>
      </form>
    </div>
  );
}

export default BookAppointmentForm;
