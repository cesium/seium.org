import React, { useState } from "react";
import useInView from "react-cool-inview";
import Fade from "react-reveal/Fade";

import Image from "next/image";
import Link from "next/link";

import Social from "/components/website/utils/Social";
import Card from "/components/utils/Card";

import styles from './style.module.css';

function DefaultAnimation() {
  return (
    <>
      Psst. Have you checked the <a className="text-quaternary font-bold hover:underline" href="/challenges">challenges</a>? Just
              saying.
    </>
  );
}

function Animation({text}) {
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
              {text}
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
    <div className={`spacing bgTransition bg-${props.color}`} ref={ref} style={{ ...color, overflowY: "hidden" }}>
      <div className="font-ibold flex lg:w-1/5 justify-center lg:justify-start">
        <Image src="/images/sei-logo.svg" width="100" height="100" />
        <p className="text-white pl-6 pt-4">
          Semana da <br />
          Engenharia
          <br />
          Informática
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 py-10">
        <div className="font-iregular grid lg:grid-cols-3 grid-rows-2 gap-y-10 lg:gap-y-0 justify-items-center lg:justify-items-start text-white">
          <Link href="https://2021.seium.org/">
            Previous Edition
          </Link>
          <Link href="">
            General Regulation
          </Link>
        </div>
        <div className="lg:justify-self-end lg:w-1/2 text-white mt-10 lg:mt-0">
          <Social />
        </div>
      </div>
      <div className="-mt-20 pb-10 flex justify-center invisible xl:visible">
        <Animation text={props.animationText != undefined ? props.animationText : <DefaultAnimation/>}>
          {props.children}
        </Animation>
      </div>
    </div>
  );
}