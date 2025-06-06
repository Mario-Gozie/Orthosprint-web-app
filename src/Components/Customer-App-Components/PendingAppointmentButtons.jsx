import React from "react";
import { X, QrCode, RotateCcw } from "lucide-react";

function PendingAppointmentButtons() {
  return (
    <div className="pending-buttons-container">
      <button className="pend-button QrCode-button">
        <div>
          <QrCode />
          <p>QR code</p>
        </div>
      </button>
      <button className="pend-button reschedule-button">
        {" "}
        <div>
          <RotateCcw />
          <p>Reschedule</p>
        </div>
      </button>
      <button className="pend-button cancel-button">
        {" "}
        <div>
          <X />
          <p>Cancel</p>
        </div>
      </button>
    </div>
  );
}

export default PendingAppointmentButtons;
