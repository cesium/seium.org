import Title from "./Title";
import Social from "/components/Social";
import Organization from "./Organization";
import ExpectList from "./ExpectList";
import Pitch from "./Pitch";

export default function Hero() {
  return (
    <div className="px-60 py-20 bg-dark_blue">
      <Title />
      <div className="relative grid grid-cols-2 mt-20">
        <div className="absolute left-0 text-white">
          <h5 className="text-md">
            Follow us on
          </h5>
          <Social />
        </div>
        <Organization />
      </div>
      <div className="grid grid-cols-2 mt-40">
        <ExpectList />
        <Pitch />
      </div>
    </div>
  );
}

