import React from "react";

import Speaker from "../../utils/speaker";
import Container from "../../container/container";
import "../../../assets/css/juries.css";
import HeaderIcon from "../../../components/images/Header.svg";
import Card from "../../../components/utils/cardCompo";

import hackathon from "../../../data/hackathon.json";

function SpeakerList() {
  const listItems = hackathon.juris.map((s, i) => (
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
          <div className="headerChallengeJury">
            <h3 className="title chall-desc-jury">
              <span className="spanChallJury">
                The jury
                <div className="box-jury">
                  <div id="mascote">
                    <Card
                      img={HeaderIcon}
                      alt="HeaderIcon"
                      style={{ alignItems: "flex-end" }}
                    >
                      These are the ones to fear. Just saying.
                    </Card>
                  </div>
                </div>
              </span>
            </h3>
            <p className="resume">
                Who will be the jurors? Can you guess? I bet you already
                suspect… Yeah, once again we have members of Subvisual! They
                will evaluate everything, including the technical component, so
                you need to do your best throughout the entire project! Good
                luck!
              </p>
          </div>
          <SpeakerList />
        </div>
      </Container>
    </div>
  );
}
export default Jury;
