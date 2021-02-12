import React from "react";

import andrelago from "../../images/speakers/andrelago.jpg";
import goncalosilva from "../../images/speakers/goncalosilva.jpg";
import joaooliveira from "../../images/speakers/joaooliveira.jpg";
import tiagocarcao from "../../images/speakers/tiagocarcao.png";

import Button from "../../buttons/button";
import Speaker from "../../utils/speaker";
import Container from "../../container/container";
import "../../../assets/css/juries.css";
import HeaderIcon from "../../../components/images/Header.svg";
import Card from "../../../components/utils/cardCompo";

const speakers = [
  {
    name: "André Lago",
    job: "Software Engineer and Tech Lead",
    desc: "Google",
    img: andrelago,
  },
  {
    name: "Gonçalo Silva",
    job: "Chief Technical Officer",
    desc: "Doist",
    img: goncalosilva,
  },
  {
    name: "João Oliveira",
    job: "Chief Technical Officer",
    desc: "TonicApp SA",
    img: joaooliveira,
  },
  {
    name: "Tiago Carção",
    job: "Software Engineer and Tech Lead",
    desc: "Glovo",
    img: tiagocarcao,
  },
];

function SpeakerList() {
  const listItems = speakers.map((s, i) => (
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

function Jury(props) {
  return (
    <div className="juries" style={{ ...props.style }}>
      <Container>
        <div className="container">
          <div className="desc">
            <h3 className="jury-title">
              {" "}
              <span className="spanChall">
                {" "}
                The jury
                <div className="cardContainer">
                  <Card
                    img={HeaderIcon}
                    alt="HeaderIcon"
                    style={{ alignItems: "flex-end" }}
                  >
                    These are the ones to fear. Just saying.
                  </Card>
                </div>
              </span>
            </h3>
          </div>
          <SpeakerList />
        </div>
      </Container>
    </div>
  );
}
export default Jury;
