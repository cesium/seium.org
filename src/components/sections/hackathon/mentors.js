import React from "react";

import Speaker from "../../utils/speaker";
import Container from "../../container/container";
import "../../../assets/css/mentors.css";

import hackathon from "../../../data/hackathon.json";

function SpeakerList() {
  const listItems = hackathon.mentores.map((s, i) => (
    <Speaker
      key={i}
      speaker={s.img}
      alt={s.name}
      name={s.name}
      job={s.job}
      desc={s.desc}
    />
  ));

  return <div className="images">{listItems}</div>;
}

function Mentors(props) {
  return (
    <div className="mentors" style={{ ...props.style }}>
      <Container>
        <div className="container">
          <div className="desc">
            <h3 className="mentor-title">The mentors</h3>
            <p className="resume">
              This year, we provide the most amazing mentors you could ever have
              to accompany and help you in order to make the best decisions for
              the development of your, certainly, spectacular project! Who are
              the mentors? You should have guessed by now, don’t you think?!
              However, we will tell you, our mentors are *drum roll* some
              members of Subvisual!
            </p>
          </div>
          <SpeakerList />
        </div>
      </Container>
    </div>
  );
}
export default Mentors;
