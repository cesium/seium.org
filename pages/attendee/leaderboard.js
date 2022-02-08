import { useState, useEffect } from "react";

import { withAuth } from "/components/Auth";
import { useAuth } from "/components/Auth/useAuth";

import Dashboard from "/components/moonstone/user/utils/Dashboard";
import Table from "/components/moonstone/user/leaderboard/Table";

import Day from "/components/website/utils/Schedule/Day";
import ErrorMessage from "/components/utils/ErrorMessage";

import { getLeaderboard } from "/lib/api";

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
  let month = parseInt(arr[1]);
  let day = parseInt(arr[2]);

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
  day = day < 10 ? "0" + fay : day;

  return year + "/" + month + "/" + day;
}

function Leaderboard() {
  const min_date = "2022/02/15";
  const max_date = "2022/02/20";

  const _today = new Date();
  const today =
    _today.getFullYear() +
    "-" +
    (_today.getMonth() + 1) +
    "-" +
    _today.getDate();
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
    <Dashboard
      href="leaderboard"
      title="Leaderboard"
      description="Check the users with the highest number of badges"
    >
      <div className="mt-12 grid-cols-2 overflow-hidden">
        <div className="col-span-1 float-left w-full md:w-1/2">
          <Day
            date={date}
            fg_color="quinary"
            previousDay={previous_day}
            nextDay={next_day}
            fontSize="lg"
          />
        </div>
        <div className="col-span-1 float-left w-full pl-24 md:w-1/2">
          <b className="text-ibold">Board</b>
          <button
            className={`font-iregular bg-${
              hallOfFame ? "white" : "quinary"
            } ml-24 h-12 items-center rounded-full px-4 py-1 text-center`}
            onClick={(e) => {
              updateHallOfFame(false);
            }}
          >
            LEADERBOARD
          </button>
          <button
            className={`font-iregular bg-${
              hallOfFame ? "quinary" : "white"
            } ml-12 h-12 items-center rounded-full px-4 py-1 text-center`}
            onClick={(e) => {
              updateHallOfFame(true);
            }}
          >
            HALL OF FAME
          </button>
          {error && <ErrorMessage />}
          <Table list={leaderboard} user={user.id} maxUsersToShow={5} />
        </div>
      </div>
    </Dashboard>
  );
}

export default withAuth(Leaderboard);
