import SectionHeader from "../components/moonstone/SectionHeader";
import RankCarousel from "../components/moonstone/rank/RankCarousel";
import Rank from "../components/moonstone/rank";

import "../assets/css/moonstone.css";

export default function Leaderboard(params) {
  const winners = [
    { rank: "1", username: "usernameX", badges: "43" },
    { rank: "2", username: "john-robert", badges: "23" },
    { rank: "3", username: "usernameX", badges: "45" },
    { rank: "4", username: "john-robert", badges: "23" },
    { rank: "5", username: "usernameX", badges: "45" },
    { rank: "6", username: "john-robert", badges: "45" },
  ];

  return (
    <div className="userProfile">
      <SectionHeader
        title="Leaderboard"
        subtitle="Check the users with the highest number of badges"
      ></SectionHeader>
      <div className="main">
        <RankCarousel></RankCarousel>
        <Rank winners={winners}></Rank>
      </div>
    </div>
  );
}
