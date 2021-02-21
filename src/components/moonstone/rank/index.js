import Winner from "./Winner";
import Header from "../Header";
import Button from "../Button";
import $ from "jquery";

export default function Index(props) {

  const handleFormSubmit = () => {
    $("button").click(function() {
      $("button").removeClass("activate");
      $(this).addClass("activate");
   });
  }

  return (
    <div className="latestWins">
      <div style={{width: "100%", display: "inline-flex", alignItems: "center" }}>
        <h3 className="moonstone-title header-3" style={{ marginRight: "20px" }}>Board</h3>
        <button style={{width: "140px"}} class="buttonBoard activate" onClick={handleFormSubmit}>LEADERBOARD</button>
        <button style={{width: "140px"}} class="buttonBoard" onClick={handleFormSubmit}>HALL OF FAME</button>
      </div>
      <div className="winner">
        <p className="award info">Rank</p>
        <p className="award info">Name</p>
        <p className="award info" style={{ textAlign: "right"}}>Badges</p>
      </div>
      {props.winners
        ? props.winners.map((item) => (
            <Winner
              rank={item.rank}
              username={item.username}
              badges={item.badges}
            ></Winner>
          ))
        : ""}
    </div>
  );
}
