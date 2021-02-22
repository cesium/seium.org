import { useEffect, useState } from "react";
import API from "../utils/api";

import LatestWins from "../components/moonstone/latestWins";
import SectionHeader from "../components/moonstone/SectionHeader";
import SpinningWheel from "../components/moonstone/spinningWheel";

import "../assets/css/moonstone.css";

const timeDiffFromNow = (now, dateString) => {
  const date = new Date(dateString);
  const seconds = Math.round(-(date - now) / 1000);

  if (seconds > 60) {
    return `${Math.round(seconds / 60)} minutes ago`;
  } else if (seconds > 3600) {
    return `${Math.round(seconds / 3600)} hours ago`;
  }

  return `${seconds} seconds ago`;
};

const getWinners = (winners) => {
  const r = [];
  const now = new Date();

  for (const {
    attendee_name,
    date,
    prize: { name },
  } of winners) {
    r.push({
      user: attendee_name,
      award: name,
      time: timeDiffFromNow(now, date),
    });
  }

  return r;
};

export default function Wheel() {
  const [info, setInfo] = useState({ winners: [], rolling: false });

  useEffect(() => {
    async function fetchData() {
      const {
        data: { data: winners },
      } = await API.get(`/api/v1/roulette/latestwins`);
      setInfo({ winners, rolling: info.rolling });
    };

    if (!info.rolling) {
      fetchData();
    }

    const interval = setInterval(() => {
      if(!info.rolling) {
        fetchData();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [info.rolling]);

  const setRolling = (rolling) => {
    setInfo({ winners: info.winners, rolling: rolling });
  }

  return (
    <div className="userProfile">
      <SectionHeader
        title="Wheel"
        subtitle="Spin the wheel and win awards!"
      ></SectionHeader>
      <div className="main">
        <SpinningWheel setRolling={setRolling} />
        <LatestWins winners={getWinners(info.winners)}></LatestWins>
      </div>
    </div>
  );
}
