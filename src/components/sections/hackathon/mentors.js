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
          </div>
          <SpeakerList />
        </div>
      </Container>
    </div>
  );
}
export default Mentors;
