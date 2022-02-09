import Table from "./Table";
import Day from "./Day";

import styles from "./style.module.css";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function leapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function isValid(date) {
  const arr = date.split("/");
  if (arr.length != 3) return false;

  const y = parseInt(arr[0]),
    m = parseInt(arr[1]),
    d = parseInt(arr[2]);
  const month_len = [
    31,
    leapYear(y) ? 29 : 28,
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

  return m >= 1 && m <= 12 && d >= 1 && d <= month_len[m - 1];
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

export default function Schedule(props) {
  const min_date = "2022/2/15";
  const max_date = "2022/2/20";
  const defaultFilter = props.filters === undefined ? "" : props.filters;

  //calculate default date
  const _today = new Date();
  const today =
    _today.getFullYear() +
    "/" +
    (_today.getMonth() + 1) +
    "/" +
    _today.getDate();
  const default_date = isAfter(today, min_date) ? today : min_date;

  const [date, updateDate] = useState(default_date);
  const [hash, updateHash] = useState("");
  const [filters, updateFilters] = useState(defaultFilter);
  const [hasFocusedElem, updateHasFocused] = useState(false);

  const table = (
    <Table
      detailed={props.detailed}
      date={date}
      hash={hash}
      filters={filters}
      updateHasFocused={updateHasFocused}
    />
  );
  if (props.updateHasFocused !== undefined)
    props.updateHasFocused(hasFocusedElem);

  function handleHash(hash) {
    updateHash(hash);

    const new_date = hash.split("-")[0];
    if (isValid(new_date)) updateDate(new_date);
  }

  //change date based on URL hash change
  useEffect(() => {
    function cena() {
      const hash = window.location.hash.slice(1);
      handleHash(hash);
    }

    cena(); //set initial date and hash if specified
    window.addEventListener("hashchange", cena);
    return () => window.removeEventListener("hashchange", cena);
  }, []);

  //change date based on react links
  const router = useRouter();
  useEffect(() => {
    const onHashChangeStart = (url) => {
      const arr = url.split("#", 2);
      const hash = arr.length == 2 ? arr[1] : "";
      handleHash(hash);
    };

    router.events.on("hashChangeStart", onHashChangeStart);

    return () => router.events.off("hashChangeStart", onHashChangeStart);
  }, [router.events]);

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

  const day = (
    <Day
      date={date}
      previousDay={previous_day}
      nextDay={next_day}
      hasFocusedElem={hasFocusedElem}
      showFilters={props.detailed}
      filters={filters}
      updateFilters={props.detailed ? updateFilters : () => {}}
    />
  );

  return (
    <div
      className={`${styles.smallSpacing} ${styles.responsiveGrid} bg-${props.color} ${styles.bgTransition} relative z-50 pt-60`}
    >
      <div
        className={`${styles.leftGridElem} ${styles.responsiveCentered} mb-10 `}
      >
        <div className="sticky top-12">{day}</div>
      </div>

      <div className={`${styles.rightGridElem}`}>{table}</div>
      {props.children}
    </div>
  );
}
