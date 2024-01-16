import Block from "./Block";
import { isSelected } from "../Day/Filters";

import schedule from "/data/schedule.json";

function filterElem(filters) {
  return function (elem) {
    if (filters == "") return true;

    let result = elem.activity.author == filters;
    if (result) return true;

    switch (elem.activity.activityType) {
      case "Coffee Break":
        result = isSelected(filters, "Breaks");
        break;
      case "Lunch Break":
        result = isSelected(filters, "Breaks");
        break;
      case "Talk":
        result = isSelected(filters, "Talks");
        break;
      case "Pitch":
        result = isSelected(filters, "Pitch");
        break;
      case "Workshop":
        result = isSelected(filters, "Workshops");
        break;
      default:
        break;
    }
    return result;
  };
}

/*
 *  Groups the activities into arrays. Two elements will be in the same array if they happen at the same
 *  time
 */
function group(list) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    const temp = [];
    for (
      let j = i;
      j < list.length &&
      list[j].activity.startTime == list[i].activity.startTime &&
      list[j].activity.endTime == list[i].activity.endTime;
      j++
    ) {
      temp.push(list[j]);
    }
    result.push(temp);
    i += temp.length - 1;
  }

  return result;
}

/*
 * If not on a mobile screen and a group of activities has a focused element, hide the other elements.
 */
function hideOtherItemsOnFocus(list) {
  if (window.innerWidth < 768) return list;

  function findFocusedItem(arr) {
    return arr.find((item) => item.focused);
  }

  return list
    .map((subArr) => {
      if (subArr.length > 1) {
        const focusedItem = findFocusedItem(subArr);
        return focusedItem ? [focusedItem] : subArr;
      }
      return subArr;
    })
    .filter((subArr) => subArr.length > 0);
}

export default function Table({
  date,
  updateHasFocused,
  hash,
  filters,
  detailed,
}) {
  const obj = schedule.find((obj) => obj.date == date);

  if (obj === undefined || obj.activities === undefined) {
    updateHasFocused(false);
    return [];
  }

  let filtered = obj.activities
    .map((activity, id) => ({
      activity: activity,
      id: id,
      focused: hash == `${date}-${id}`,
    }))
    .filter(filterElem(filters));

  updateHasFocused(filtered.filter((activity) => activity.focused).length != 0);

  filtered = group(filtered);
  filtered = hideOtherItemsOnFocus(filtered);

  return filtered.map((elem, id) => (
    <Block
      key={`${date}-${id}`}
      date={date}
      detailed={detailed}
      focused={elem.focused}
      elems={elem}
    />
  ));
}
