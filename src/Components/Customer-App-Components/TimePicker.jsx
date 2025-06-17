import { Target } from "lucide-react";
import React, { useState } from "react";
import { to } from "react-spring";

const TimeSlotPicker = ({
  availableTimeSlots,
  inputs,
  selectTime: onTimeSlotSelect,
}) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slot) => {
    if (selectedSlot === slot) {
      setSelectedSlot(null);
      onTimeSlotSelect("");
    } else {
      setSelectedSlot(slot);
      onTimeSlotSelect(slot);
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
                  selectedSlot === slot ? "selected" : ""
                }`}
                value={inputs.bookedTime}
                onClick={() => handleSlotClick(slot)}
                aria-pressed={selectedSlot === slot}
              >
                {slot}
              </button>
            ))}
          </div>
          {selectedSlot && (
            <p className="time-confirmation" aria-live="polite">
              Selected: <strong>{selectedSlot}</strong>
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
