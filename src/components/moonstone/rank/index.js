import $ from "jquery";
import "../../../assets/css/rank.css";
import RankPlaces from "./RankPlaces";
import API from "../../../utils/api";
import { useEffect, useState, useCallback } from "react";
import { useUser } from "../context/user";

export default function Index(props) {
  const [rank, setRank] = useState([]);
  const [rank8, setRank8] = useState([]);
  const { user, dispatch } = useUser();

  var d = new Date();
  let month = d.getMonth() + 1;
  month = `0${month}`.slice(-2);
  let year = d.getFullYear();
  let date = [year, month, props.day].join("-");

  let processRank = (rank) => {
    setRank(rank);
    const rank8 = rank.slice(0, 8);
    let checkownertop = rank8.filter((element) => element.nickname == user.nickname);
    if (checkownertop.length > 0) {
      setRank8(rank8);
    } else {
      let ownerentry = rank.filter((element) => element.nickname == user.nickname);
      let finalrank = rank8.concat(ownerentry);
      setRank8(finalrank);
    }
  };

  useEffect(async () => {
    const { data } = await API.get(`/api/v1/leaderboard/${date}`);
    const rank = data.data;
    processRank(rank);
  }, []);

  const hall = useCallback(async () => {
    const { data } = await API.get(`/api/v1/leaderboard`);
    const rank = data.data;
    processRank(rank);
  }, []);

  const learder = useCallback(async () => {
    const { data } = await API.get(`/api/v1/leaderboard/${date}`);
    const rank = data.data;
    processRank(rank);
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
          LEADERBOARD
        </button>
        <button
          style={{ width: "140px" }}
          class="buttonBoard"
          onClick={(handleFormSubmit(), hall)}
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
      {rank8
        ? rank8.map((item, index) => (
            <RankPlaces
              rank={
                item.nickname === user.nickname
                  ? rank.findIndex((x) => x.nickname === user.nickname) + 1
                  : index + 1
              }
              owner={item.nickname === user.nickname ? "owner" : null}
              username={item.name ? item.name : item.nickname}
              badges={item.badges}
            ></RankPlaces>
          ))
        : ""}
    </div>
  );
}
