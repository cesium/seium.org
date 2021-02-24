import $ from "jquery";
import "../../../assets/css/rank.css";
import RankPlaces from "./RankPlaces";
import API from "../../../utils/api";
import { useEffect, useState, useCallback } from "react";
import { useUser } from "../context/user";

export default function Index(props) {
  const [rank, setRank] = useState([]);
  const [rank8, setRank8] = useState([]);
  const [rankType, setRankType] = useState([]);
  const { user, dispatch } = useUser();

  var d = new Date();
  let month = d.getMonth() + 1;
  month = `0${month}`.slice(-2);
  let year = d.getFullYear();
  let date = [year, month, props.day].join("-");

  let processRank = (rank) => {
    setRank(rank);
    const rank8 = rank.slice(0, 8);
    let checkownertop = rank8.filter((element) => element.name == user.name);
    if (checkownertop.length > 0) {
      setRank8(rank8);
    } else {
      let ownerentry = rank.filter((element) => element.name == user.name);
      let finalrank = rank8.concat(ownerentry);
      setRank8(finalrank);
    }
  };

  useEffect(async () => {
    if (rankType.length === 0 || rankType === "leaderboard") {
      const { data } = await API.get(`/api/v1/leaderboard/${date}`);
      const rank = data.data;
      processRank(rank);
    } else if (rankType === "halloffame") {
      const { data } = await API.get(`/api/v1/leaderboard`);
      const rank = data.data;
      processRank(rank);
    }
  }, [props.day, rankType]);

  const hall = useCallback(async () => {
    const rankType = "halloffame";
    setRankType(rankType);
  }, []);

  const learder = useCallback(async () => {
    const rankType = "leaderboard";
    setRankType(rankType);
  }, []);

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
          onClick={(handleFormSubmit(), learder)}
        >
          Daily Ranking
        </button>
        <button
          style={{ width: "140px" }}
          class="buttonBoard"
          onClick={(handleFormSubmit(), hall)}
        >
          Global Ranking
        </button>
      </div>
      <div className="rankPlace">
        <p className="place info">Rank</p>
        <p className="place info">Name</p>
        <p className="place info" style={{ textAlign: "right" }}>
          Badges
        </p>
      </div>
      {rank8
        ? rank8.map((item, index) => (
            <RankPlaces
              rank={
                item.name === user.name
                  ? rank.findIndex((x) => x.name === user.name) + 1
                  : index + 1
              }
              owner={item.id === user.id ? "owner" : null}
              username={item.nickname ? item.nickname : item.name}
              badges={item.badges}
            ></RankPlaces>
          ))
        : ""}
    </div>
  );
}
