import { withoutAuth } from "@components/Auth";

import Navbar from "@components/website/utils/Navbar";
import Footer from "@components/website/utils/Footer";

import Hero from "@components/website/team/Hero";
import FindUs from "@components/website/team/FindUs";

import Organization from "@components/website/team/Organization";

function Index() {
  return (
    <Navbar bgColor="quaternary" button="tertiary" fgColor="white">
      <Hero />
      <Organization />
      <FindUs />
      <Footer color="quaternary" />
    </Navbar>
  );
}

export default withoutAuth(Index);
