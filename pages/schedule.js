import { useEffect, useState } from 'react';

import Hero from '/components/website/schedule/Hero';

import Schedule from '/components/website/utils/Schedule';
import Footer from '/components/website/utils/Footer';

export default function Index() {

  const [ hasFocusedElem, updateHasFocused ] = useState();
  const bg = hasFocusedElem ? "secondary" : "tertiary";

  return (
    <div className="scroll-smooth">
      <Hero />
      <Schedule color={bg} detailed={true} updateHasFocused={updateHasFocused}>
        <div className="py-24"></div>
      </Schedule>
      <Footer color={bg} />
    </div>
  )
}