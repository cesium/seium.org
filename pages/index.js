import Hero from '/components/Hero';
import Schedule from '/components/Schedule';
import Sponsors from '/components/Sponsors';
import Hackathon from '/components/Hackathon';
import Speakers from '/components/Speakers';
import Footer from '/components/Footer';

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