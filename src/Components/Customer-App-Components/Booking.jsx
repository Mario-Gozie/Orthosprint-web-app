import { React, useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import DateUI from "./DateUI";
import BookAppointmentForm from "./BookAppointmentForm";

function Booking() {
  const [inputs, setInputs] = useState({
    service: "",
    specialist: "",
    date: null,
    bookingNote: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Validation Process

  useEffect(() => {
    const isDateValid = inputs.date !== null; // Replace with your validation logic
    const areInputsFilled = Object.values(inputs).every(
      (value) => value !== "" && value !== null
    );
    setIsButtonDisabled(!(areInputsFilled && isDateValid));
  }, [inputs]);

  // Update state for external date picker
  const handleDateChange = (date) => {
    setInputs((prev) => ({ ...prev, date }));
  };

  // Update state for form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
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
      <DateUI choosenDate={inputs.date} changeDate={handleDateChange} />
      <BookAppointmentForm
        inputs={inputs}
        handleInputChange={handleInputChange}
        isButtonDisabled={isButtonDisabled}
      />
    </div>
  );
}

export default Booking;
