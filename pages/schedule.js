import { useState } from 'react';

import Hero from '/components/website/schedule/Hero';
import Schedule from '/components/website/schedule/Schedule';

import Footer from '/components/website/utils/Footer';

export default function Index() {

  const [ hasFocusedElem, updateHasFocused ] = useState();
  const bg = hasFocusedElem ? "secondary" : "tertiary";

  return (
    <>
      <Hero />
      <Schedule color={bg} detailed={true} updateHasFocused={updateHasFocused}/>
      <Footer color={bg} />
    </>
  )
}