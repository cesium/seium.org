import { useState } from "react";
import { withoutAuth } from "/components/Auth";

import Hero from "/components/website/schedule/Hero";

import Navbar from "../components/website/utils/Navbar";
import Schedule from "/components/website/utils/Schedule";
import Footer from "/components/website/utils/Footer";

function Index() {
  const [hasFocusedElem, updateHasFocused] = useState();
  const bg = hasFocusedElem ? "secondary" : "tertiary";

  return (
    <Navbar bgColor="tertiary" button="quinary" fgColor="black">
      <Hero />
      <Schedule color={bg} detailed={true} updateHasFocused={updateHasFocused}>
        <div className="py-24" />
      </Schedule>
      <Footer color={bg} />
    </Navbar>
  );
}

export default withoutAuth(Index);
