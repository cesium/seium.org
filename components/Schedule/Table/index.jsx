import { useSearchParams } from "next/navigation";

import Block from "./Block";

import schedule from "/data/schedule.json";

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

export default function Table({ date, updateHasFocused, hash, detailed }) {
  const searchParams = useSearchParams();

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
    .filter(({ activity }) => {
      const currentSelectedFilters =
        searchParams.get("filter")?.split(",") ?? [];

      // when query params are: filter = []
      if (currentSelectedFilters.length === 0) return true;

      // When query params are: filter = [""]
      if (
        currentSelectedFilters.length === 1 &&
        currentSelectedFilters[0] === ""
      )
        return true;

      // When query params are for example: filter = ["Pitch"]; or for example: filter = ["", "Pitch"]
      switch (activity.activityType) {
        case "Coffee Break":
          return currentSelectedFilters.includes("Breaks");
        case "Talk":
          return currentSelectedFilters.includes("Talks");
        case "Pitch":
          return currentSelectedFilters.includes("Pitch");
        case "Workshop":
          return currentSelectedFilters.includes("Workshops");
        default:
          break;
      }
    });

  updateHasFocused(filtered.filter((activity) => activity.focused).length != 0);

  filtered = group(filtered);

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
