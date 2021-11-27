import React, { useState } from "react";
import useInView from "react-cool-inview";
import Fade from "react-reveal/Fade";

import Image from "next/image";
import Link from "next/link";

import Social from "/components/Social";
import Card from "/components/Card";

import styles from './style.module.css';

function Animation(props) {
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    threshold: 0.25,
    onChange: ({ observe, unobserve }) => {
      unobserve();
      observe();
    }
  });

  return (
    /* We need to have height set in order for inView to work properly */
    <div ref={observe} style={{ height: "25px" }}>
      {inView ?
        <Fade bottom>
          <div className={`-mt-6 ${styles.cardfooter}`}>
            <Card img="/images/mascot-footer.svg" alt="MascotFooter" inverted={false}>
              Psst. Have you checked the <a className="text-medium_light_blue font-bold hover:underline" href="/challenges">challenges</a>? Just
              saying.
            </Card>
          </div>
        </Fade> :
        <></>}
    </div>
  );
};

export default function Footer(props) {
  const [animation, setAnimation] = useState(false);
  const { ref, inView } = useInView({
    onEnter: () => {
      setAnimation(true);
    },
    onLeave: () => {
      setAnimation(false);
    },
  });

  let color = inView
    ? { transition: "background 2s ease", background: "#181818" }
    : "";

  return (
    <div className={`px-60 bg-${props.color}`} ref={ref} style={{ ...color, overflowY: "hidden" }}>
      <div className="flex w-1/5">
        <Image src="/images/sei-logo.svg" width="100" height="100" />
        <p className="text-white pl-6 pt-4">
          Semana da <br />
          Engenharia
          <br />
          Informática
        </p>
      </div>
      <div className="grid grid-cols-2 py-10">
        <div className="grid grid-cols-3 text-white">
          <Link href="https://2021.seium.org/">
            <a> Previous Edition </a>
          </Link>
          <Link href="">
            <a> General Regulation </a>
          </Link>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <Animation>
              {props.children}
            </Animation>
          </div>
          <div className="ml-60 text-white">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}