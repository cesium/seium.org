import SectionHeader from "../components/moonstone/SectionHeader";
import RankCarousel from "../components/moonstone/rank/RankCarousel";

import "../assets/css/moonstone.css";

export default function Leaderboard(params) {
  return (
    <div className="userProfile">
      <SectionHeader
        title="Leaderboard"
        subtitle="Check the users with the highest number of badges"
      ></SectionHeader>
      <div className="main">
        <RankCarousel></RankCarousel>
      </div>
    </div>
  );
}
