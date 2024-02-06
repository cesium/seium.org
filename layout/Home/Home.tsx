import { Hero, Sponsors, Speakers, Partners } from "./components";

import Navbar from "@components/Navbar";
import Schedule from "@components/Schedule";
import Footer from "@components/Footer";

function Home() {
  return (
    <Navbar bgColor="secondary" button="quinary" fgColor="white">
      {/* FIXME: The parameter could probably be better in some way */}
      <Hero />
      <Schedule />
      <Sponsors />
      <Speakers />
      <Partners />
      <Footer color="secondary" />
    </Navbar>
  );
}

export default Home;
