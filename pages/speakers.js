import Hero from '/components/website/speakers/Hero';
import Schedule from '../components/website/speakers/Schedule';

import Footer from '/components/website/utils/Footer';

export default function Speakers() {
  return (
    <>
      <Hero />
      <Schedule detailed={false} />
      <Footer color="secondary" />
    </>
  )
}