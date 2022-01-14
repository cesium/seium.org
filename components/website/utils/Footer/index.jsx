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
      Psst. Have you checked the <a className="text-quaternary font-bold hover:underline" href="/challenges">challenges</a>? Just saying.
    </>
  );
}

function Animation({text}) {
  const { observe, inView } = useInView({
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
  const [setAnimation] = useState(false);
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
    <div className={`spacing ${styles.bgTransition} bg-${props.color}`} ref={ref} style={{ ...color, overflowY: "hidden" }}>
      <div className="justify-center lg:flex">
        <div className="flex-1">
          <div className="flex font-ibold justify-center lg:justify-start">
            <Image className="lg:flex-1" src="/images/sei-logo.svg" width="100" height="100" />
            <p className="lg:flex-1 text-white pl-6 pt-4">
              Semana da <br />
              Engenharia
              <br />
              Informática
            </p>
          </div>
        </div>
        <div className="flex-2 py-10">
          <div className="font-iregular text-sm grid lg:grid-cols-3 grid-rows-2 gap-10 justify-items-center lg:justify-items-end text-white">
            <Link passHref href="https://2021.seium.org/">
              <a className="text-white hover:underline">Previous Edition</a>
            </Link>
            <Link passHref href="">
              <a className="hover:underline">General Regulation</a>
            </Link>
            <Link passHref href="/docs/contingency-plan-2616d0424547c145781b4aabc2422c53.pdf">
              <a className="hover:underline">Contingency Plan</a>
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="sm:w-1/2 text-white mt-10 lg:mt-0">
              <Social />
            </div>
          </div>
        </div>
      </div>
      <div className="invisible lg:visible flex -mt-20 pb-10 justify-center">
        <Animation text={props.animationText != undefined ? props.animationText : <DefaultAnimation/>}>
          {props.children}
        </Animation>
      </div>
    </div>
  );
}