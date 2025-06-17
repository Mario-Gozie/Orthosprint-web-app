import { React, useState } from "react";
import GenerateDate from "./GenerateDate";
import dayjs from "dayjs";
import clsx from "clsx";
import months from "../../Data/jsonData/months.json";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "../../Css/CustomerAppCss.css";

function DateUI({ choosenDate, selectDate: onSelectDate }) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [activeDate, setActiveDate] = useState(currentDate);

  const handleDateChange = (day, currentMonth) => {
    const stringDate = day.format("D-MMMM-YYYY");
    console.log(stringDate);
    if (choosenDate === stringDate) {
      onSelectDate(stringDate); // Call the prop function
    } else {
      if (day.$M === currentMonth) {
        // setChosenDate(stringDate);
        choosenDate = stringDate;
      } else {
        setActiveDate(day);
        onSelectDate(stringDate); // Call the prop function
      }
    }
  };

  return (
    <div className="select-date-container">
      <div className="day-date-container">
        <div className="month-year-switch">
          <h3>
            {months[activeDate.month()]}, {activeDate.year()}
          </h3>
          <div className="today-switch-button-container">
            <GrFormPrevious
              className="previous-month-button"
              onClick={() => {
                setActiveDate(activeDate.month(activeDate.month() - 1));
              }}
            />
            <button
              type="button"
              className="today-button"
              onClick={() => setActiveDate(currentDate)}
            >
              Today
            </button>
            <GrFormNext
              className="next-month-button"
              onClick={() => {
                setActiveDate(activeDate.month(activeDate.month() + 1));
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
          {GenerateDate(activeDate.month(), activeDate.year()).map(
            ({ date, currentMonth, currentToday }, index) => {
              const isUnclickable =
                [0, 2, 4, 6].includes(date.$W) || currentToday;

              return (
                <div className={`num-day-container`} key={index}>
                  <h1
                    data-date={date.format("YYYY-MM-DD")}
                    className={clsx("day", {
                      "inactive-month": !currentMonth,
                      today: currentToday,
                      "inactive-day": [0, 2, 4, 6].includes(date.$W),
                      selected: date.isSame(choosenDate, "day"),
                      unclickable: isUnclickable,
                    })}
                    style={{ fontSize: "10px" }}
                    onClick={
                      isUnclickable ? undefined : () => handleDateChange(date)
                    }
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
        {choosenDate && <h3>{`Your chosen date is ${choosenDate}`}</h3>}
        {!choosenDate && ""}
      </div>
    </div>
  );
}

export default DateUI;
