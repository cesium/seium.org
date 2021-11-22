import React, { useState } from "react";
import useInView from "react-cool-inview";
import Fade from "react-reveal/Fade";

import Image from "next/image";
import Link from "next/link";

import Social from "/components/Social";
import Card from "/components/Footer/Card";

import styles from './style.module.css';

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
            {/* {animation && ( */}
              <Fade bottom>
                <div className={styles.cardfooter}>
                  {props.children ? (
                    <Card img="/images/mascot-footer.svg" alt="MascotFooter">
                      {props.children}
                    </Card>
                  ) : (
                    ""
                  )}
                </div>
              </Fade>
            {/* )} */}
          </div>
          <div className="ml-60 text-white">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}