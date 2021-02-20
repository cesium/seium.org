import Winner from "./Winner";
import Header from "../Header";

export default function Owners(props) {
  return (
    <div className="latestWins">
      <Header
        title={"Owners"}
        style={{ marginBottom: "30px", width: "100%" }}
      ></Header>
      {props.owners && props.owners.length !== 0
        ? props.owners.map((item) => (
            <Winner
              key={item.id}
              user={item.nickname}
              // award={item.award}
              // time={item.time}
            ></Winner>
          ))
        : "Noone redeemed this badge."}
    </div>
  );
}
