import { React, useState, useEffect, useRef } from "react";
import { Calendar } from "lucide-react";
import DateUI from "./DateUI";
import BookAppointmentForm from "./BookAppointmentForm";

function Booking() {
  const initialState = {
    service: "",
    specialist: "",
    bookedDate: null,
    bookedTime: "",
    bookingNote: "",
  };
  const [inputs, setInputs] = useState(initialState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isAvailableTime, setIsAvailableTime] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlot] = useState(null);
  const [choosenDate, setChosenDate] = useState(null);
  const [chosenTime, setChosenTime] = useState(null);

  // Form Clearing
  const formRef = useRef();
  const clearForm = () => {
    setInputs(initialState); // Reset React state
    if (formRef.current) {
      formRef.current.reset(); // Optional DOM reset
    }
  };
  // Validation Process

  useEffect(() => {
    const isServiceValid = inputs.service.trim() !== "";
    const isSpecialistValid = inputs.specialist.trim() !== "";
    const isDateValid = inputs.date !== null;
    const isBookedTimeValid = inputs.bookedTime.trim() !== "";

    setIsButtonDisabled(
      !(isServiceValid && isSpecialistValid && isDateValid && isBookedTimeValid)
    );
    setIsAvailableTime(!(isDateValid && isSpecialistValid && isServiceValid));
  }, [inputs]);

  // Update state for external date picker
  const handleDateChange = (bookedDate) => {
    setInputs((prev) => ({ ...prev, bookedDate }));
  };

  // Update state for form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  // For time slot specifically
  const handleBookedTime = (slot) => {
    setInputs((prev) => ({ ...prev, bookedTime: slot }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", inputs);
    clearForm();
    setChosenDate(null);
    setChosenTime(null);
    console.log("Form submitted:", inputs);
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
      <DateUI
        choosenDate={choosenDate}
        setChosenDate={setChosenDate}
        bookedDate={inputs.bookedDate}
        bookDate={handleDateChange}
      />
      <BookAppointmentForm
        availableTimeSlots={availableTimeSlots}
        inputs={inputs}
        handleInputChange={handleInputChange}
        handleBookedTime={handleBookedTime}
        isButtonDisabled={isButtonDisabled}
        onFormSubmit={handleSubmit}
        formRef={formRef}
        chosenTime={chosenTime}
        setChosenTime={setChosenTime}
        isAvailableTime={isAvailableTime}
      />
    </div>
  );
}

export default Booking;
