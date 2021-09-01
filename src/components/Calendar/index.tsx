import React from "react";
import moment from "moment";

export default function Calendar({ users }) {
  console.log(users);

  let currentMonth = Number(moment().format("M"));
  let currentYear = Number(moment().format("YYYY"));

  function printCalendar(month, year) {
    const calendarDays = [];

    const startMonth = moment(`${month}-${year}`, "MM-YYYY").startOf("month");
    const endMonth = moment(`${month}-${year}`, "MM-YYYY").endOf("month");

    let tempDay = startMonth.clone().startOf("isoWeek");
    while (tempDay < endMonth.clone().endOf("isoWeek")) {
      tempDay["currentMonth"] =
        month === Number(tempDay.format("M")) ? true : false;
      calendarDays.push(tempDay);
      tempDay = tempDay.clone().add(1, "days");
    }

    return calendarDays;
  }

  return (
    <>
      <section className="daysOfWeek">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </section>
      <section className="days">
        {printCalendar(currentMonth, currentYear).map((day) => {
          return (
            <div
              key={day.format("DD-MM-YYYY")}
              data-date={day.format("DD-MM-YYYY")}
              className={day.currentMonth ? "current" : "notCurrent"}
            >
              {day.format("D")}
              <div>{day.users}</div>
            </div>
          );
        })}
      </section>
    </>
  );
}
