import { useRouter } from 'next/router'

import Hero from '/components/website/speakers/Hero';
import Schedule from '/components/website/speakers/Schedule';

import Navbar from '/components/website/utils/Navbar';
import Footer from '/components/website/utils/Footer';

export default function Speakers() {
  const router = useRouter();

  return (
    <Navbar bgColor="secondary" button="quinary" fgColor="black">
      <Hero />
      <Schedule color="secondary" detailed={false} filters={router.query.speaker} />
      <Footer color="secondary" />
    </Navbar>
  )
}