import Table from './Table';
import Day from './Day';

import { useState } from 'react'

function isAfter(date1, date2) // equivalent to date1 > date2
{
    const arr1 = date1.split("/");
    const arr2 = date2.split("/");
    const year1 = parseInt(arr1[0]), month1 = parseInt(arr1[1]), day1 = parseInt(arr1[2]);
    const year2 = parseInt(arr2[0]), month2 = parseInt(arr2[1]), day2 = parseInt(arr2[2]);

    return year1 != year2 ? year1 > year2 :
           month1 != month2 ? month1 > month2 :
           day1 > day2;
}

function leapYear(year)
{
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function addDate(date, days) //date is a string "yyyy/mm/dd"
{
    //Assume days < 28 and the year won't need changing
    const arr = date.split("/");
    const year = parseInt(arr[0]);
    let month = parseInt(arr[1]);
    let day = parseInt(arr[2]);

    const month_len = [ 31, leapYear(parseInt(arr[0])) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    day += days;

    if (day <= 0)
    {
        month--;
        day += month_len[month - 1];
    }
    else if (day > month_len[month - 1])
    {
        day -= month_len[month - 1];
        month++;
    }

    return year + "/" + month + "/" + day;
}

export default function Schedule()
{
    const min_date = "2022/2/15";
    const max_date = "2022/2/20";

    const _today = new Date();
    const today = _today.getFullYear() + "/" + (_today.getMonth() + 1) + "/" + _today.getDate();
    const default_date = isAfter(today, min_date) ? today : min_date;
    
    const [date, updateDate] = useState(default_date);
    const table = <Table date = { date } />;

    const previous_day = function(){
        const new_date = addDate(date, -1);
        if (!isAfter(min_date, new_date) && !isAfter(new_date, max_date))
            updateDate(new_date);
    };

    const next_day = function(){
        const new_date = addDate(date, 1);
        if (!isAfter(min_date, new_date) && !isAfter(new_date, max_date))
            updateDate(new_date);
    };

    const day = <Day date = { date } previousDay = { previous_day } nextDay = { next_day } />;

    return (
        <div className="grid grid-cols-2 bg-medium_blue pt-20 px-60">
            <div className="">
                { day }
            </div>

            <div className="">
                { table }
            </div>
        </div>
    );
}