import Hero from '/components/website/home/Hero';
import Sponsors from '/components/website/home/Sponsors';
import Hackathon from '/components/website/home/Hackathon';
import Speakers from '/components/website/home/Speakers';
import Partners from "/components/website/home/Partners";

import Schedule from '/components/website/utils/Schedule';
import Footer from '/components/website/utils/Footer';

export default function Index() {
  return (
    <>
      <Hero />
      <Schedule color="tertiary" detailed={false}/>
      <Sponsors/>
      <Hackathon />
      <Speakers />
      <Partners/>
      <Footer color="secondary" />
    </>
  )
}