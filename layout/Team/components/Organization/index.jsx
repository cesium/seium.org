import useInView from "react-cool-inview";
import { motion as Motion } from "framer-motion";
import Card from "@components/Card";
import SeiAnimation from "./Animation";

import Team from "./Team";

import { getFirstName } from "/lib/naming";

import team from "/data/team.json";

import styles from "./style.module.css";

function sortListMembers(members) {
  return members.sort((a, b) =>
    getFirstName(a.name).localeCompare(getFirstName(b.name))
  );
}

function Animation() {
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
              I am also very important to the team. Actually I should be in
              first place
            </Card>
          </div>
        </Motion.div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function Organization() {
  return (
    <section className="spacing relative grid grid-cols-1 gap-x-32 gap-y-8 py-20 lg:grid-cols-2">
      <div className="text-white">
        <h2 className="font-terminal-uppercase mb-4 select-none text-4xl font-bold">
          Organization
        </h2>
        <p className="font-imedium">
          They walk around, full of work, gathering speakers, attracting
          partners and giving their imagination wings, all for this to be your
          favorite week.
        </p>
      </div>

      <Team
        title={team["organization"].title}
        list={sortListMembers(team["organization"].list)}
        cols={3}
      />

      <Team
        title={team["marketing"].title}
        list={sortListMembers(team["marketing"].list)}
      />

      <Team
        title={team["tech"].title}
        list={sortListMembers(team["tech"].list)}
      />

      <div className="hidden select-none grid-cols-3 items-center justify-center lg:flex">
        <SeiAnimation />
      </div>

      <Team
        title={team["program"].title}
        list={sortListMembers(team["program"].list)}
      />

      <Team
        title={team["activities"].title}
        list={sortListMembers(team["activities"].list)}
      />
      <Team
        title={team["merch"].title}
        list={sortListMembers(team["merch"].list)}
      />
    </section>
  );
}
