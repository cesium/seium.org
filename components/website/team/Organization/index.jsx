import Member from "./Member";

import React, { useState } from "react";
import useInView from "react-cool-inview";
import Fade from "react-reveal/Fade";
import Card from "/components/utils/Card";
import SeiAnimation from "./Animation"

import Team from "./Team";

import team from "/data/team.json";

import styles from "./style.module.css";

function Animation(props) {
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
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
        <Fade bottom>
          <div className={`-mt-6 ${styles.cardfooter} border-b-2 border-white`}>
            <Card
              img="/images/mascot-footer.svg"
              alt="MascotFooter"
              inverted={false}
            >
              I am also very important to the team. Actually I should be in
              first place
            </Card>
          </div>
        </Fade>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function Organization() {
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
    <section className="grid grid-cols-1 py-20 spacing gap-x-32 gap-y-8 bg-quaternary lg:grid-cols-2">
      <div className="text-white">
        <h2 className="mb-4 text-4xl font-bold font-iextrabold">
          Organization
        </h2>
        <p className="font-imedium">
          They walk around, full of work, gathering speakers, attracting
          partners and giving their imaginations wings, all for this to be your
          favorite week.
        </p>
      </div>

      <Team title={team["organization"].title} list={team["organization"].list} />

      <Team
        title={team["marketing"].title}
        list={team["marketing"].list.slice(0, 2)}
      />

      <div className="items-center justify-center hidden lg:flex">
        <Animation/>
      </div>

      <div className="flex flex-col h-full">
        <Team title="" list={team["marketing"].list.slice(2, 6)} />
        <div className="justify-center hidden h-full lg:flex">
          <SeiAnimation />
        </div>
      </div>
      <Team title={team["tech"].title} list={team["tech"].list} />
      
      <Team title={team["program"].title} list={team["program"].list} />

      <Team title={team["activities"].title} list={team["activities"].list} />
      
    </section>
  );
}
