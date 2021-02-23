import React, { useEffect, useState } from "react";

import Header from "./Header";
import UserAchievementsItems from "./User/UserAchievementsItems";
import API from "../../utils/api";
import { useUser } from "./context/user";

import WheelComponent from "./wheel/WheelComponent";
import "react-wheel-of-prizes/dist/index.css";

const getSegments = (prizes) => {
  const names = [];

  for (const { name } of prizes) {
    names.push(name);
  }

  return names;
};

const segColors = [
  "#0bfeb9",
  "#1afdbc",
  "#27fdc0",
  "#32fdc3",
  "#3efdc7",
  "#4bfdca",
  "#56fdce",
  "#63fdd1",
  "#6ffdd5",
  "#7afdd8",
  "#86fedc",
  "#93fedf",
  "#9ffee3",
  "#adfee7",
  "#b7feea",
  "#c3feed",
  "#cffef1",
  "#d1fef1",
  "#d3fef2",
  "#d6fef3",
];

const SpinningWheel = (props) => {
  const { user } = useUser();
  const [info, setInfo] = useState({ prizes: undefined, state: 0, tokens: 0 });

  useEffect(() => {
    async function fetchData() {
      const {
        data: { data: prizes },
      } = await API.get(`/api/v1/roulette/prizes`);

      const {
        data: { data: attendee },
      } = await API.get(`/api/v1/attendees/${user.id}`);

      setInfo({ prizes, state: info.state, tokens: attendee.token_balance });
    }
    fetchData();
  }, []);

  const incrementState = () => {
    setInfo({
      prizes: info.prizes,
      state: info.state + 1,
      tokens: info.tokens,
    });
  };

  return (
    <div className="spinningWheel">
      <Header style={{ width: "100%" }} title="Achievements">
        <div
          style={{ display: "flex", whiteSpace: "nowrap", paddingTop: "7%" }}
        >
          <UserAchievementsItems state={info.state} />
        </div>
      </Header>
      {info.prizes === undefined ? (
        ""
      ) : (
        <WheelComponent
          disabled={info.tokens < 30}
          setRolling={props.setRolling}
          segments={getSegments(info.prizes)}
          segColors={segColors}
          onFinished={(winner) => incrementState()}
          primaryColor="black"
          contrastColor="black"
        />
      )}
    </div>
  );
};

export default SpinningWheel;
