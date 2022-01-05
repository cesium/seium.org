import dynamic from 'next/dynamic'

import Navbar from '/components/website/utils/Navbar';

import Title from "./Title";

export default function Hero() {
  return (
    <div className=" bg-tertiary">
      <div className="spacing pb-32 z-50 relative">
        <Navbar button="quinary" fg_color="black"/>
        <div className="pt-2">
          <Title />
        </div>
      </div>
    </div>
  );
}