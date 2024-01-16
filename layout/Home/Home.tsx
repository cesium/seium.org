import { withoutAuth } from "@context/Auth";

import { Hero, Sponsors, Hackathon, Speakers, Partners } from "./components";
import { FeatureFlag } from "@context/FeatureFlags/FeatureFlag";

import Navbar from "@components/Navbar";
import Schedule from "@components/Schedule";
import Footer from "@components/Footer";

function Home() {
  return (
    <Navbar bgColor="secondary" button="quinary" fgColor="white">
      {/* FIXME: The parameter could probably be better in some way */}
      <FeatureFlag feature="BACKOFFICE">
        <Hero />
      </FeatureFlag>
      <Schedule />
      <Sponsors />
      <Speakers />
      <Partners />
      <Footer color="secondary" />
    </Navbar>
  );
}

export default withoutAuth(Home);
