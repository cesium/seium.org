import React from "react";
import Challenge from "../../../components/utils/challenge";
import Button from "../../buttons/button";

function Hackathon() {
  const challenge = (
    <Challenge
      title="Hackathon"
      parag=""
      buttonText={
        <a target="_blank" href="https://forms.gle/wLdyCmaGaqKko1Jd9">
          <Button className="button">Register your team</Button>
        </a>
      }
      prizes={[
        "1.º Place — 450€/team",
        "2.º Place — 250€/team",
        "3.º Place — 100€/team",
      ]}
    />
  );

  const NavChallenge = () => {
    const style = { paddL: "15px", clr: "#fff" };

    return (
      <div className="navChallenge">
        <button
          className="title-nav"
          style={{ paddingLeft: style.paddL }}
        >
          <p className="medium-5" style={{ color: style.clr }}>
            Hackathon
          </p>
        </button>
      </div>
    );
  };

  return (
    <div className="element">
      {NavChallenge()}
      {challenge}
    </div>
  );
}

export default Hackathon;
