import $ from "jquery";
import "../../../assets/css/rank.css";
import RankPlaces from "./RankPlaces";
import API from "../../../utils/api";
import { useEffect, useState, useCallback } from "react";

export default function Index(props) {
  const [rank, setRank] = useState([]);
  var d = new Date();
  let month = d.getMonth() + 1;
  month = `0${month}`.slice(-2);
  var year = d.getFullYear();
  let date = [year, month, props.day].join("-");
  console.log(date)

  useEffect(async () => {
    const { data } = await API.get(`/api/v1/leaderboard`);
    const rank = data.data;
    console.log(rank);
    setRank(rank);
  }, []);

  const hall = useCallback(async () => {
    const { data } = await API.get(`/api/v1/leaderboard`);
    const rank = data.data;
    console.log(rank);
    setRank(rank);
  }, [])

  const learder = useCallback(async () => {
    const { data } = await API.get(`/api/v1/leaderboard/${date}`);
    const rank = data.data;
    console.log(rank);
    setRank(rank);
  }, [])

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
          onClick={handleFormSubmit(), learder}
        >
          LEADERBOARD
        </button>
        <button
          style={{ width: "140px" }}
          class="buttonBoard"
          onClick={handleFormSubmit(), hall}
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
        ? rank.map((item, index) => (
            <RankPlaces
              rank={index + 1}
              username={item.nickname}
              badges={item.badges}
            ></RankPlaces>
          ))
        : ""}
    </div>
  );
}
