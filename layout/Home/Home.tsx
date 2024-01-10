import { withoutAuth } from "@context/Auth";

import { Hero, Sponsors, Hackathon, Speakers, Partners } from "./components";

import Navbar from "@components/Navbar";
import Schedule from "@components/Schedule";
import Footer from "@components/Footer";

function Home() {
  return (
    <Navbar bgColor="secondary" button="quinary" fgColor="white">
      <Hero />
      {/*<Schedule />*/}
      <Sponsors />
      {/*<Speakers />*/}
      <Partners />
      <Footer color="secondary" />
    </Navbar>
  );
}

export default withoutAuth(Home);
