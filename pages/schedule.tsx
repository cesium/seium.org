import { withoutAuth } from "@components/Auth";

import Hero from "@components/website/schedule/Hero";

import Navbar from "@components/website/utils/Navbar";
import Schedule from "@components/website/utils/Schedule";
import Footer from "@components/website/utils/Footer";

function Index() {
  return (
    <Navbar bgColor="tertiary" button="quinary" fgColor="black">
      <Hero />
      <Schedule color="tertiary" detailed={true}>
        <div className="pb-24" />
      </Schedule>
      <Footer color="tertiary" />
    </Navbar>
  );
}

export default withoutAuth(Index);
