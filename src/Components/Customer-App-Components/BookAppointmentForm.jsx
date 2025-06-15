import React from "react";
import { Calendar } from "lucide-react";
import services from "../../Data/jsonData/services.json";
import months from "../../Data/jsonData/months.json";
import TimeSlotPicker from "./TimePicker";

function BookAppointmentForm() {
  console.log(services);
  return (
    <div>
      <h3>Appointment Details</h3>
      <form action="">
        <div>
          <label htmlFor="">Service Type</label>
          <select name="" id="">
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
        <div>
          <label htmlFor="">Specialist</label>
          <select name="specialist" id="">
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
        <TimeSlotPicker />
        <div className="form-group">
          <label>Notes:</label>
          <textarea
            name="notes"
            placeholder="Describe your specific needs..."
          />
        </div>
        <button type="submit" className="btn-apt-submit">
          <Calendar /> Book Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointmentForm;
