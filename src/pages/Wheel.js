import LatestWins from "../components/moonstone/latestWins";
import SectionHeader from "../components/moonstone/SectionHeader";
import SpinningWheel from "../components/moonstone/spinningWheel";

import "../assets/css/moonstone.css";

export default function Wheel(params) {
  const winners = [
    { user: "usernameX", award: "Award", time: "15 seconds ago" },
    { user: "john-robert", award: "Award Z", time: "30 minutes ago" },
    { user: "usernameX", award: "Award", time: "53 minutes ago" },
    { user: "john-robert", award: "Award Z", time: "2 hours ago" },
    { user: "usernameX", award: "Award", time: "30 minutes ago" },
    { user: "john-robert", award: "Award Z", time: "53 minutes ago" },
  ];
  return (
    <div className="userProfile">
      <SectionHeader
        title="Wheel"
        subtitle="Spin the wheel and win awards!"
      ></SectionHeader>
      <div className="main">
        <SpinningWheel></SpinningWheel>
        <LatestWins winners={winners}></LatestWins>
      </div>
    </div>
  );
}
