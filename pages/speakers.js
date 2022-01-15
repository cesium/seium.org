import { useRouter } from 'next/router'

import Hero from '/components/website/speakers/Hero';
import Schedule from '../components/website/utils/Schedule';

import Navbar from '/components/website/utils/Navbar';
import Footer from '/components/website/utils/Footer';

export default function Speakers() {
  const router = useRouter();
 
  return (
    <div className="bg-secondary">
      <Hero />
      <Schedule detailed={false} filters={router.query.speaker}/>
      <Footer color="secondary" />
    </div>
  )
}