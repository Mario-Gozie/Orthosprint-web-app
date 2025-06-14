import React from "react";
import { Calendar } from "lucide-react";

function BookAppointmentForm() {
  return (
    <div>
      <h3>Appointment Details</h3>
      <form action="">
        <div>
          <label htmlFor=""></label>
        </div>
        <div>
          <label htmlFor=""></label>
        </div>
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
