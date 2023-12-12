import { useState, useEffect } from "react";

import { withAuth, useAuth } from "@context/Auth";

import Layout from "@components/Layout";
import { Table } from "./components";

import Button from "@components/Button";
import Day from "@components/Schedule/Day";
import ErrorMessage from "@components/ErrorMessage";

import { getLeaderboard } from "@lib/api";

import scheduleData from "@data/schedule.json";
import dayjs from "dayjs";

function leapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function isAfter(date1, date2) {
  // equivalent to date1 > date2
  const arr1 = date1.split("/");
  const arr2 = date2.split("/");
  const year1 = parseInt(arr1[0]),
    month1 = parseInt(arr1[1]),
    day1 = parseInt(arr1[2]);
  const year2 = parseInt(arr2[0]),
    month2 = parseInt(arr2[1]),
    day2 = parseInt(arr2[2]);

  return year1 != year2
    ? year1 > year2
    : month1 != month2
    ? month1 > month2
    : day1 > day2;
}

function addDate(date, days) {
  //date is a string "yyyy/mm/dd"
  //Assume days < 28 and the year won't need changing
  const arr = date.split("/");
  const year = parseInt(arr[0]);
  let month: number | string = parseInt(arr[1]);
  let day: number | string = parseInt(arr[2]);

  const month_len = [
    31,
    leapYear(parseInt(arr[0])) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  day += days;

  if (day <= 0) {
    month--;
    day += month_len[month - 1];
  } else if (day > month_len[month - 1]) {
    day -= month_len[month - 1];
    month++;
  }

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return year + "/" + month + "/" + day;
}

function Leaderboard() {
  /* Fetch first and last day of the event from schedule data */
  const eventDates = scheduleData.map((day) => day.date).sort();
  const min_date = dayjs(eventDates[0]).format("YYYY/MM/DD");
  const max_date = dayjs(eventDates[eventDates.length - 1]).format(
    "YYYY/MM/DD"
  );

  const _today = new Date().toISOString().split("T")[0];
  const today = _today.replace(/-/g, "/");
  const defaultDate = isAfter(today, min_date) ? today : min_date;

  const { user } = useAuth();

  const [hallOfFame, updateHallOfFame] = useState(false);
  const [date, updateDate] = useState(defaultDate);
  const [leaderboard, updateLeaderboard] = useState([]);
  const [error, updateError] = useState(false);

  useEffect(() => requestLeaderboard(), [hallOfFame, date]);

  const requestLeaderboard = () => {
    const args = hallOfFame ? "" : date.replaceAll("/", "-");
    getLeaderboard(args)
      .then((response) => updateLeaderboard(response.data))
      .catch((_) => updateError(true));
  };

  const previous_day = () => {
    const new_date = addDate(date, -1);
    if (!isAfter(min_date, new_date) && !isAfter(new_date, max_date))
      updateDate(new_date);
  };

  const next_day = () => {
    const new_date = addDate(date, 1);
    if (!isAfter(min_date, new_date) && !isAfter(new_date, max_date))
      updateDate(new_date);
  };

  return (
    <Layout
      title="Leaderboard"
      description="Check the users with the highest number of badges"
    >
      <div className="mt-12 grid grid-cols-1 justify-items-center gap-y-10 overflow-hidden md:gap-y-20 2xl:grid-cols-2">
        <div className="col-span-1 w-full">
          {!hallOfFame ? (
            <Day
              date={date}
              fg_color="quinary"
              previousDay={previous_day}
              nextDay={next_day}
              fontSize="lg"
            />
          ) : (
            <h2 className="font-terminal-uppercase select-none text-center text-4xl text-quinary xs:text-5xl sm:text-7xl md:text-8xl">
              All Time
            </h2>
          )}
        </div>
        <div className="col-span-1 w-full 2xl:pl-24">
          <div className="flex justify-center gap-6 xs:gap-10 md:gap-24">
            <Button
              className={`font-iregular bg-${
                hallOfFame ? "white" : "quinary"
              } h-12 items-center rounded-full px-4 py-1 text-center text-black`}
              onClick={(e) => {
                updateHallOfFame(false);
              }}
              title="LEADERBOARD"
            />

            <Button
              className={`font-iregular bg-${
                hallOfFame ? "quinary" : "white"
              } h-12 items-center rounded-full px-4 py-1 text-center text-black`}
              onClick={(e) => {
                updateHallOfFame(true);
              }}
              title="HALL OF FAME"
            />
          </div>
          {error && <ErrorMessage />}
          <Table list={leaderboard} user={user.id} maxUsersToShow={5} />
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Leaderboard);
