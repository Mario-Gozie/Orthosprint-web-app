import { React, useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import DateUI from "./DateUI";
import BookAppointmentForm from "./BookAppointmentForm";

function Booking() {
  const [inputs, setInputs] = useState({
    service: "",
    specialist: "",
    date: null,
    bookedTime: "",
    bookingNote: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [availableTimeSlots, setAvailableTimeSlot] = useState(null);

  // Validation Process

  useEffect(() => {
    const isServiceValid = inputs.service.trim() !== "";
    const isSpecialistValid = inputs.specialist.trim() !== "";
    const isDateValid = inputs.date !== null;
    const isBookedTimeValid = inputs.bookedTime.trim() !== "";

    setIsButtonDisabled(
      !(isServiceValid && isSpecialistValid && isDateValid && isBookedTimeValid)
    );
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

  // For time slot specifically
  const handleTimeSlotSelect = (slot) => {
    setInputs((prev) => ({ ...prev, bookedTime: slot }));
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
      <DateUI choosenDate={inputs.date} selectDate={handleDateChange} />
      <BookAppointmentForm
        availableTimeSlots={availableTimeSlots}
        inputs={inputs}
        handleInputChange={handleInputChange}
        handleTimeSlotSelect={handleTimeSlotSelect}
        isButtonDisabled={isButtonDisabled}
      />
    </div>
  );
}

export default Booking;
