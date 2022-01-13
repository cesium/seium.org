import { useEffect, useState } from 'react';

import Hero from '/components/website/schedule/Hero';

import Navbar from '../components/website/utils/Navbar';
import Schedule from '/components/website/utils/Schedule';
import Footer from '/components/website/utils/Footer';

export default function Index() {

  const [hasFocusedElem, updateHasFocused] = useState();
  const bg = hasFocusedElem ? "secondary" : "tertiary";

  return (
    <Navbar bg_color="tertiary" button="quinary" fg_color="black" >
      <div className="scroll-smooth">
        <Hero />
        <Schedule color={bg} detailed={true} updateHasFocused={updateHasFocused}>
          <div className="py-24" />
        </Schedule>
        <Footer color={bg} />
      </div >
    </Navbar>
  )
}