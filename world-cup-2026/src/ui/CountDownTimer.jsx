import React from "react";
import { useCountdown } from "../hooks";
import { isBefore } from "date-fns";

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="flex flex-col items-center text-dec-background space-y-0 py-4">
      <div className="text-dec-t1 font-extrabold">{value}</div>
      <div className="text-dec-xs">{type}</div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes] = useCountdown(targetDate);
  return isBefore(new Date(), targetDate) ? (
    <ShowCounter days={days} hours={hours} minutes={minutes} />
  ) : null;
};

const ShowCounter = ({ days, hours, minutes }) => {
  return (
    <div className="flex space-x-2 sm:space-x-8">
      <DateTimeDisplay value={days} type={"Days"} />
      <DateTimeDisplay value={hours} type={"Hours"} />
      <DateTimeDisplay value={minutes} type={"Mins"} />
    </div>
  );
};

export default CountdownTimer;
