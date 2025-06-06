import React from "react";
import { FileText } from "lucide-react";

function ViewReportButton() {
  return (
    <div className="view-report">
      <button className="view-report-botton">
        <FileText /> <p>View Report</p>
      </button>
    </div>
  );
}

export default ViewReportButton;
