import SectionHeader from "../components/moonstone/SectionHeader";
import RankCarousel from "../components/moonstone/rank/RankCarousel";
import Rank from "../components/moonstone/rank";

import "../assets/css/moonstone.css";

export default function Leaderboard(params) {
  return (
    <div className="userProfile">
      <SectionHeader
        title="Leaderboard"
        subtitle="Check the users with the highest number of badges"
      ></SectionHeader>
        <RankCarousel></RankCarousel>
    </div>
  );
}
