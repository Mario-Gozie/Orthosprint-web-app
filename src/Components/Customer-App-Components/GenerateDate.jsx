import React from "react";
import dayjs from "dayjs";

function GenerateDate(month = dayjs().month(), year = dayjs().year()) {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  // Generate prefix date
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push(firstDateOfMonth.day(i));
  }

  // Generate current date
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push(firstDateOfMonth.date(i));
  }

  //Suffix Days

  const remaining = 42 - arrayOfDate.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push(lastDateOfMonth.date(i));
  }
  return arrayOfDate;
}

export default GenerateDate;
