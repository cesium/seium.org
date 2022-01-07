import { useEffect, useState } from 'react';

import Hero from '/components/website/schedule/Hero';

import Schedule from '/components/website/utils/Schedule';
import Footer from '/components/website/utils/Footer';

export default function Index() {

  const [ hasFocusedElem, updateHasFocused ] = useState();
  const bg = hasFocusedElem ? "secondary" : "tertiary";

  //smooth scroll
  useEffect(() => {
    document.documentElement.classList.add("smoothScroll");

    return () => {
        document.documentElement.classList.remove("smoothScroll");
    };
  }, []);

  return (
    <>
      <Hero />
      <Schedule color={bg} detailed={true} updateHasFocused={updateHasFocused}/>
      <div className={`py-24 bg-${bg} bgTransition`} />
      <Footer color={bg} />
    </>
  )
}