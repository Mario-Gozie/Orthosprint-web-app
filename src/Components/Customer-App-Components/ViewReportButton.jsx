import React from "react";
import { FileText } from "lucide-react";

function ViewReportButton() {
  return (
    <div className="View-Report">
      <button>
        <FileText /> <p>View Report</p>
      </button>
    </div>
  );
}

export default ViewReportButton;
