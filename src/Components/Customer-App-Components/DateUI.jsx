import React from "react";
import GenerateDate from "./GenerateDate";
import cn from "./cn";
import "../../Css/CustomerAppCss.css";

function DateUI() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className="day-date-container">
      <div
        className="day-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gridTemplateRows: "repeat(1, 1fr)",
          gap: "8px",
        }}
      >
        {days.map((day, index) => {
          return (
            <div
              key={index}
              style={{
                height: "2rem",
                display: "grid",
                placeContent: "center",
              }}
            >
              <h1 style={{ fontSize: "10px" }}>{day}</h1>
            </div>
          );
        })}
      </div>
      <div
        className="num-date-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gridTemplateRows: "repeat(6, 1fr)",

          //   gap: "8px",
        }}
      >
        {GenerateDate().map(({ date, currentMonth, today }, index) => {
          return (
            <div
              key={index}
              style={{
                height: "2rem",
                display: "grid",
                borderTop: "1px solid #ddd",
                // placeContent: "center",
              }}
            >
              <h1
                className={`day ${currentMonth ? " " : "inactive-month"}, ${
                  today ? "today" : "Not-today"
                }`}
                style={{ fontSize: "10px" }}
              >
                {date.date()}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DateUI;
