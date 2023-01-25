import { withoutAuth } from "@components/Auth";

import Navbar from "@components/website/utils/Navbar";
import Footer from "@components/website/utils/Footer";

import Hero from "@components/website/team/Hero";
import FindUs from "@components/website/team/FindUs";

import Organization from "@components/website/team/Organization";

function Index() {
  return (
    <Navbar bgColor="primary" button="quinary" fgColor="white">
      <Hero />
      <Organization />
      <FindUs />
      <Footer color="primary" />
    </Navbar>
  );
}

export default withoutAuth(Index);
