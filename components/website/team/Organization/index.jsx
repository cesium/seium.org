import Member from "./Member";

import React, { useState } from "react";
import useInView from "react-cool-inview";
import Fade from "react-reveal/Fade";
import Card from "/components/utils/Card";

import Team from "./Team";

import team from "/data/team.json"

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
            <div className={`-mt-6 ${styles.cardfooter} border-b-2 border-white`}>
              <Card img="/images/mascot-footer.svg" alt="MascotFooter" inverted={false}>
                I am also very important to the team. Actually I should be in first place
              </Card>
            </div>
          </Fade> :
          <></>}
      </div>
    );
};

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
        <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-8 bg-quaternary spacing">
            <div className="text-white">
                <h2 className="font-iextrabold text-6xl font-bold mb-4">
                    Organization
                </h2>
                <p className="font-imedium">
                  They walk around, full of work, gathering speakers, attracting partners and giving their imaginations wings, all for this to be your favorite week.
                </p>
            </div>
            
            <Team title={team["tech"].title} list={team["tech"].list} />
            
            <Team title={team["support"].title} list={team["support"].list.slice(0,2)} />

            <div className="hidden lg:flex justify-center items-center">
                <Animation></Animation>
            </div>
            
            <Team title="" list={team["support"].list.slice(2,6)} />
            
            <Team title={team["partners"].title} list={team["partners"].list} />

        </section>
    )
}