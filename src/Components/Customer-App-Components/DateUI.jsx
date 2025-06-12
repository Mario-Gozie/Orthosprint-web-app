import { React, useState } from "react";
import GenerateDate from "./GenerateDate";
import dayjs from "dayjs";
import months from "../../Data/jsonData/months.json";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "../../Css/CustomerAppCss.css";

function DateUI() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  return (
    <div className="select-date-container">
      <div className="day-date-container">
        <div className="month-year-switch">
          <h3>
            {months[today.month()]}, {today.year()}
          </h3>
          <div className="today-switch-button-container">
            <GrFormPrevious
              className="previous-month-button"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h3
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h3>
            <GrFormNext
              className="next-month-button"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="day-container">
          {days.map((day, index) => {
            return (
              <div className="string-day" key={index}>
                <h1 style={{ fontSize: "10px" }}>{day}</h1>
              </div>
            );
          })}
        </div>
        <div className="num-days-container">
          {GenerateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div className="num-day-container" key={index}>
                  <h1
                    className={`day ${currentMonth ? " " : "inactive-month"}  ${
                      today ? "today" : "Not-today"
                    }`}
                    style={{ fontSize: "10px" }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="chosen-date-container">
        <h3>{`Your chosen date is `}</h3>
      </div>
    </div>
  );
}

export default DateUI;
