import React from "react";
import { X, QrCode, RotateCcw } from "lucide-react";

function PendingAppointmentButtons() {
  return (
    <div>
      <button>
        <div>
          <QrCode />
          <p>QR code</p>
        </div>
      </button>
      <button>
        {" "}
        <div>
          <RotateCcw />
          <p>Reschedule</p>
        </div>
      </button>
      <button>
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
