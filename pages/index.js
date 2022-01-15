import Hero from '/components/website/home/Hero';
import Sponsors from '/components/website/home/Sponsors';
import Hackathon from '/components/website/home/Hackathon';
import Speakers from '/components/website/home/Speakers';
import Partners from "/components/website/home/Partners";

import Navbar from '/components/website/utils/Navbar';
import Schedule from '/components/website/utils/Schedule';
import Footer from '/components/website/utils/Footer';

export default function Index() {
  return (
      <Navbar bgColor="secondary" button="quinary" fgColor="black">
        <Hero />
        <Schedule color="tertiary" detailed={false}/>
        <Sponsors/>
        <Hackathon />
        <Speakers />
        <Partners />
        <Footer color="secondary" />
      </Navbar>
  )
}