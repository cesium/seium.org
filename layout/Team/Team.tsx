import { withoutAuth } from "@context/Auth";

import { Hero, FindUs, Organization } from "./components";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

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
