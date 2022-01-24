import Filters from "./Filters";
import styles from "./style.module.css";

function getDayDescriptor(year, month, day) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const target = new Date(year, month - 1, day);
  const _today = new Date();
  const today = new Date(
    _today.getFullYear(),
    _today.getMonth(),
    _today.getDate()
  );

  const day_difference =
    (target.getTime() - today.getTime()) / (24 * 3600 * 1000);

  if (day_difference == -1) return "Yerterday";
  else if (day_difference == 0) return "Today";
  else if (day_difference == 1) return "Tomorrow";
  else return weekdays[target.getDay()];
}

export default function Day(props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Set",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = props.date.split("/");
  const date_string = date[2] + " " + months[date[1] - 1];
  const date_descriptor = getDayDescriptor(
    parseInt(date[0]),
    parseInt(date[1]),
    parseInt(date[2])
  );

  const ans = (
    <div className="grid place-items-center lg:block">
      <div className={`${styles.wrapper} text-5xl sm:text-7xl md:text-8xl`}>
        <div className={`${styles.leftArrow} ${styles.arrowWrapper}`}>
          <button
            className={`${styles.prev} ${styles.arrow}`}
            onClick={props.previousDay}
          ></button>
        </div>

        <div className={`-mt-10 ${styles.dateWrapper}`}>
          <h5 className={`font-ibold text-2xl text-quinary md:text-3xl`}>
            {date_string}
          </h5>
          <h2
            className={`font-iextrabold text-${
              props.fg_color == undefined ? "white" : props.fg_color
            }`}
          >
            {date_descriptor}
          </h2>
        </div>

        <div className={`${styles.rightArrow} ${styles.arrowWrapper}`}>
          <button
            className={`${styles.next} ${styles.arrow}`}
            onClick={props.nextDay}
          ></button>
        </div>
      </div>
    </div>
  );

  if (props.showFilters)
    return [
      ans,
      <Filters
        key="key"
        filters={props.filters}
        updateFilters={props.updateFilters}
      />,
    ];
  else return ans;
}
