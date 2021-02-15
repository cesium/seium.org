import Winner from "./Winner";
import Header from "../Header";
export default function Index(props) {
  let index = 0;
  return (
    <div className="latestWins">
      <Header
        title="Latest wins"
        style={{ marginBottom: "30px", width: "100%" }}
      ></Header>
      {props.winners
        ? props.winners.map((item) => (
            <Winner
              key={index++}
              user={item.user}
              award={item.award}
              time={item.time}
            ></Winner>
          ))
        : ""}
    </div>
  );
}
