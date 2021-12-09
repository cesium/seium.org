import Hero from '/components/landing/home/Hero';
import Schedule from '/components/landing/home/Schedule';
import Sponsors from '/components/landing/home/Sponsors';
import Hackathon from '/components/landing/home/Hackathon';
import Speakers from '/components/landing/home/Speakers';

import Footer from '/components/landing/utils/Footer';

export default function Index() {
  return (
    <>
      <Hero />
      <Schedule />
      <Sponsors/>
      <Hackathon />
      <Speakers />
      <Footer color="dark_blue" />
    </>
  )
}