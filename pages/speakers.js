import Hero from '/components/website/speakers/Hero';
import Schedule from '../components/website/speakers/Schedule';

import Navbar from '/components/website/utils/Navbar';
import Footer from '/components/website/utils/Footer';

export default function Speakers() {
  return (
    <Navbar bgColor="secondary" button="quinary" fgColor="black" >
      <Hero />
      <Schedule detailed={false} />
      <Footer color="secondary" />
    </Navbar>
  )
}