import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Link from "next/link";

import { Hero, Challenges } from "./components";

function Index() {
  return (
    <Navbar bgColor="secondary" button="quinary" fgColor="white">
      <Hero />
      <Challenges />
      <Footer
        color="secondary"
        footerAnimationText="Just really useful links here. Bye now 👋"
      />
    </Navbar>
  );
}

export default Index;
