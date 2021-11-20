import Title from "./Title";
import SocialMedia from "./SocialMedia";
import Organization from "./Organization";
import ExpectList from "./ExpectList";
import Pitch from "./Pitch";

export default function Hero() {
  return (
    <div className="py-20 bg-black">
      <Title />
      <div className="relative grid grid-cols-2 mt-20">
        <SocialMedia />
        <Organization />
      </div>
      <div className="grid grid-cols-2 mt-40">
        <ExpectList />
        <Pitch />
      </div>
    </div>
  );
}

