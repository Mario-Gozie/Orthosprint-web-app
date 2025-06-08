import React from "react";
import GenerateDate from "./GenerateDate";

function DateUI() {
  return (
    <div
      className="num-date-container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(6, 1fr)",
        gap: "8px",
      }}
    >
      {GenerateDate().map(({ date, currentMonth, today }, index) => {
        return (
          <div key={index}>
            <h1 style={{ fontSize: "10px" }}>{date.date()}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default DateUI;
