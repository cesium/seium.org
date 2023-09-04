import React, { ReactNode, useState } from "react";
import useInView from "react-cool-inview";
import { motion as Motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import Social from "@components/Social";
import Card from "@components/Card";

import styles from "./style.module.css";

function DefaultAnimation() {
  return (
    <span>
      Psst. Have you checked the{" "}
      <Link href="/challenges" className="text-primary underline">
        challenges?
      </Link>{" "}
      Just saying.
    </span>
  );
}

interface IAnimationProps {
  children: ReactNode;
  text: string | JSX.Element;
}

function Animation({ text }: IAnimationProps) {
  const { observe, inView } = useInView({
    threshold: 0.25,
    onChange: ({ observe, unobserve }) => {
      unobserve();
      observe();
    },
  });

  return (
    /* We need to have height set in order for inView to work properly */
    <div ref={observe} style={{ height: "25px" }}>
      {inView ? (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ y: -15, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={`-mt-6 ${styles.cardfooter} border-b-2 border-white`}>
            <Card img="/images/void.svg" alt="MascotFooter" inverted={false}>
              {text}
            </Card>
          </div>
        </Motion.div>
      ) : (
        <></>
      )}
    </div>
  );
}

interface IFooterProps {
  children?: ReactNode;
  color: string;
  footerAnimationText?: string;
}

export default function Footer(props: IFooterProps) {
  const [_, setAnimation] = useState(false);
  const { observe, inView } = useInView({
    onEnter: () => {
      setAnimation(true);
    },
    onLeave: () => {
      setAnimation(false);
    },
  });

  let color = inView && {
    transition: "background 2s ease",
    background: "#181818",
  };

  return (
    <div
      className={`spacing ${styles.bgTransition} bg-secondary`}
      ref={observe}
    >
      <div className="justify-center lg:flex">
        <div className="py- flex-1">
          <div className="flex justify-center font-ibold lg:justify-start">
            <Image
              src="/images/sei-logo.svg"
              width={100}
              height={100}
              alt="SEI Logo"
            />
            <p className="pl-6 text-white lg:flex-1">
              Semana da <br />
              Engenharia
              <br />
              Informática
            </p>
          </div>
        </div>
        <div className="flex-2 py-10">
          <div className="grid grid-rows-2 justify-items-center gap-8 font-iregular text-sm text-white lg:grid-cols-2 lg:justify-items-end">
            <Link
              passHref
              href="https://2022.seium.org/"
              className="text-white hover:underline"
            >
              Previous Edition
            </Link>
            <Link
              passHref
              href="/docs/regulamento.pdf"
              className="hover:underline"
            >
              General Regulation
            </Link>
            <Link
              passHref
              href="https://docs.google.com/forms/d/e/1FAIpQLSdV1bSyW2tcLuTC_jJCGdZ5NZHUlgETK7nQkOmyDzwb7eFS4Q/viewform"
              className="hover:underline"
            >
              Report a Problem
            </Link>
            <Link
              passHref
              href="/docs/survival.pdf"
              className="hover:underline"
            >
              Survival Guide
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="mt-10 text-white sm:w-1/2 lg:mt-0">
              <Social />
            </div>
          </div>
        </div>
      </div>
      <div className="invisible -mt-20 flex justify-center pb-10 lg:visible">
        <Animation
          text={
            props.footerAnimationText != undefined ? (
              props.footerAnimationText
            ) : (
              <DefaultAnimation />
            )
          }
        >
          {props.children}
        </Animation>
      </div>
    </div>
  );
}
