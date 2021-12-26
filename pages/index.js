import Hero from '/components/website/home/Hero';
import Schedule from '/components/website/home/Schedule';
import Sponsors from '/components/website/home/Sponsors';
import Hackathon from '/components/website/home/Hackathon';
import Speakers from '/components/website/home/Speakers';

import Footer from '/components/website/utils/Footer';

export default function Index() {
  return (
    <>
      <Hero />
      <Schedule detailed={false} />
      <Sponsors/>
      <Hackathon />
      <Speakers />
      <Footer color="dark_blue" />
    </>
  )
}