import Hero from '/components/landing/sections/Hero';
import Schedule from '/components/landing/sections/Schedule';
import Sponsors from '/components/landing/sections/Sponsors';
import Hackathon from '/components/landing/sections/Hackathon';
import Speakers from '/components/landing/sections/Speakers';
import Footer from '/components/landing/sections/Footer';

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