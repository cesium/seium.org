import Hero from '/components/Hero';
import Schedule from '/components/Schedule';
import Sponsors from '/components/Sponsors';
import Hackathon from '/components/Hackathon';
import Speakers from '/components/Speakers';
import Footer from '/components/Footer';

export default function Demo() {
  return (
    <>
      <Hero />
      <Schedule />
      <Sponsors/>
      <Hackathon />
      <Speakers />
      <Footer color="dark_blue">
        Psst. Have you checked the <a className="text-medium_light_blue font-bold hover:underline" href="/challenges">challenges</a>? Just
        saying.
      </Footer>
    </>
  )
}