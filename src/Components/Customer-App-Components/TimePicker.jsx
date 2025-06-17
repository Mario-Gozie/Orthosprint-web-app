import React, { useState } from "react";

const TimeSlotPicker = ({
  availableTimeSlots,
  inputs,
  chosenTime,
  setChosenTime,
  isAvailableTime,
  bookTime: onBookedTime,
}) => {
  //   const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slot) => {
    if (chosenTime === slot) {
      setChosenTime(null);
      onBookedTime("");
    } else {
      setChosenTime(slot);
      onBookedTime(slot);
    }
  };

  // Sample time slots (replace with your actual data)
  const timeSlots = availableTimeSlots || [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  //   const timeSlots = "";

  return (
    <div
      className="time-slot-picker"
      role="group"
      aria-labelledby="timeslot-label"
      hidden={isAvailableTime}
    >
      {timeSlots && (
        <>
          <h3 id="timeslot-label">Available Time Slots</h3>
          <div className="slot-grid">
            {timeSlots.map((slot) => (
              <button
                name="bookedTime"
                key={slot}
                type="button"
                className={`slot-button ${
                  chosenTime === slot ? "selected" : ""
                }`}
                value={inputs.bookedTime}
                onClick={() => handleSlotClick(slot)}
                aria-pressed={chosenTime === slot}
              >
                {slot}
              </button>
            ))}
          </div>
          {chosenTime && (
            <p className="time-confirmation" aria-live="polite">
              Selected: <strong>{chosenTime}</strong>
            </p>
          )}
        </>
      )}
      {!timeSlots && (
        <div className="unavailable-slot-info">{`Chigozirim has no available slot for 20th February 2025`}</div>
      )}
    </div>
  );
};

export default TimeSlotPicker;
