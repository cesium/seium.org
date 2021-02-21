import $ from "jquery";
import "../../../assets/css/rank.css";
import RankPlaces from "./RankPlaces";

export default function Index(props) {
  const handleFormSubmit = () => {
    $("button").click(function () {
      $("button").removeClass("activate");
      $(this).addClass("activate");
    });
  };

  return (
    <div className="rank">
      <div
        style={{ width: "100%", display: "inline-flex", alignItems: "center" }}
      >
        <h3
          className="moonstone-title header-3"
          style={{ marginRight: "20px" }}
        >
          Board
        </h3>
        <button
          style={{ width: "140px" }}
          class="buttonBoard activate"
          onClick={handleFormSubmit}
        >
          LEADERBOARD
        </button>
        <button
          style={{ width: "140px" }}
          class="buttonBoard"
          onClick={handleFormSubmit}
        >
          HALL OF FAME
        </button>
      </div>
      <div className="rankPlace">
        <p className="place info">Rank</p>
        <p className="place info">Name</p>
        <p className="place info" style={{ textAlign: "right" }}>
          Badges
        </p>
      </div>
      {props.winners
        ? props.winners.map((item) => (
            <RankPlaces
              rank={item.rank}
              username={item.username}
              badges={item.badges}
            ></RankPlaces>
          ))
        : ""}
    </div>
  );
}
