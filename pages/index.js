import Hero from '/components/landing/sections/Hero';
import Schedule from '/components/landing/sections/Schedule';
import Sponsors from '/components/landing/sections/Sponsors';
import Hackathon from '/components/landing/sections/Hackathon';
import Speakers from '/components/landing/sections/Speakers';
import Footer from '/components/landing/sections/Footer';

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