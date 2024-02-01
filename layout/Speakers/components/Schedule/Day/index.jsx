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

const RightArrow = () => (
  <svg
    className="h-[0.8em] w-[0.8em] fill-transparent transition-all hover:fill-white"
    width="42"
    height="65"
    viewBox="0 0 42 65"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        d="M23.4299 28.0481L5.02799 7.62693L12.4568 0.932693L37.1704 28.3582L12.5527 55.8698L5.10057 49.2016L23.4311 28.7162L23.7304 28.3817L23.4299 28.0481Z"
        stroke="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.309082"
        y="0.182373"
        width="41.5826"
        height="64.4078"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const LeftArrow = () => (
  <svg
    className="h-[0.8em] w-[0.8em] fill-transparent transition-all hover:fill-white"
    width="42"
    height="65"
    viewBox="0 0 42 65"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        d="M37.3861 49.2873L29.9456 55.9686L5.27991 28.5L29.9456 1.03139L37.3861 7.71264L19.0199 28.1659L18.7199 28.5L19.0199 28.8341L37.3861 49.2873Z"
        stroke="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.60791"
        y="0.325317"
        width="41.4843"
        height="64.3494"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

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
  let date = props.date.split("/");
  let date_string = date[2] + " " + months[date[1] - 1];

  return (
    <div className={`${styles.wrapper} text-6xl sm:text-8xl`}>
      <div className={`${styles.leftArrow} ${styles.arrowWrapper}`}>
        <button onClick={props.previousDay}>
          <LeftArrow />
        </button>
      </div>

      <div className={`-mt-10 flex flex-col ${styles.dateWrapper}`}>
        <h5 className="font-terminal-uppercase m-auto text-3xl text-quinary">
          {" "}
          Happening on{" "}
        </h5>
        <h2
          className={`font-terminal-uppercase m-auto text-5xl text-white sm:text-8xl`}
        >
          {" "}
          {date_string}{" "}
        </h2>
      </div>

      <div className={`${styles.rightArrow} ${styles.arrowWrapper}`}>
        <button onClick={props.nextDay}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
}
