import { useState } from "react";
import { withAuth } from "/components/Auth";

import Dashboard from "/components/moonstone/user/utils/Dashboard";
import Table from "/components/moonstone/user/leaderboard/Table";

import Day from "/components/website/utils/Schedule/Day";

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

  return year + "/" + month + "/" + day;
}

function Leaderboard() {
  const min_date = "2022/2/15";
  const max_date = "2022/2/20";

  const _today = new Date();
  const today =
    _today.getFullYear() +
    "/" +
    (_today.getMonth() + 1) +
    "/" +
    _today.getDate();
  const defaultDate = isAfter(today, min_date) ? today : min_date;

  const defaultState = {
    hallOfFame: false,
    date: defaultDate,
  };

  const [st, updateState] = useState(defaultState);

  const changeLeaderboard = (b) => {
    updateState({
      hallOfFame: b,
      date: st.date,
    });
  };

  const updateDate = (d) => {
    updateState({
      hallOfFame: st.hallOfFame,
      date: d,
    });
  };

  const testUser = {
    name: "John Doe",
    badges: 42,
  };

  const me = {
    name: "Me",
    badges: 0,
  };

  const list = [
    testUser,
    testUser,
    testUser,
    testUser,
    testUser,
    testUser,
    testUser,
    testUser,
    me,
  ];

  const previous_day = () => {
    const new_date = addDate(st.date, -1);
    if (!isAfter(min_date, new_date) && !isAfter(new_date, max_date))
      updateDate(new_date);
  };

  const next_day = () => {
    const new_date = addDate(st.date, 1);
    if (!isAfter(min_date, new_date) && !isAfter(new_date, max_date))
      updateDate(new_date);
  };

  return (
    <Dashboard
      href="leaderboard"
      title="Leaderboard"
      description="Check the users with the highest number of badges"
    >
      <div className="grid-cols-2 overflow-hidden mt-12">
        <div className="col-span-1 w-full md:w-1/2 float-left">
          <Day
            date={st.date}
            fg_color="quinary"
            previousDay={previous_day}
            nextDay={next_day}
            fontSize="lg"
          />
        </div>
        <div className="col-span-1 w-full md:w-1/2 pl-24 float-left">
          <b className="text-ibold">Board</b>
          <button
            className={`font-iregular bg-${
              st.hallOfFame ? "white" : "quinary"
            } rounded-full h-12 ml-24 text-center items-center px-4 py-1`}
            onClick={(e) => changeLeaderboard(false)}
          >
            LEADERBOARD
          </button>
          <button
            className={`font-iregular bg-${
              st.hallOfFame ? "quinary" : "white"
            } rounded-full h-12 ml-12 text-center items-center px-4 py-1`}
            onClick={(e) => changeLeaderboard(true)}
          >
            HALL OF FAME
          </button>

          <Table list={list} user="Me" maxUsersToShow={5} />
        </div>
      </div>
    </Dashboard>
  );
}

export default withAuth(Leaderboard);
