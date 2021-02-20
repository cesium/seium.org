import React from "react";
import Challenge from "../../../components/utils/challenge";
import Button from "../../buttons/button";

function Hackathon() {
  const challenge = (
    <Challenge
      title="Hackathon"
      parags={[
        "Whether you are a veteran programmer or a newbie who has never built a web app, this Hackathon is for you! Our motto is ‘Learn by Doing’, so why don’t you take advantage of our mentors to work on your idea and try to win one of our awesome prices? You’ll learn a ton by doing it! Get yourself a team of 3 to 5 people and sign up!",
        "(If you don’t have a team or if it’s only you and a friend, sign up anyway. We’ll try to join you with other people with incomplete teams!)",
      ]}
      buttonText={
        <a target="_blank" href="https://forms.gle/wLdyCmaGaqKko1Jd9">
          <Button className="button">Register your team</Button>
        </a>
      }
      prizes={[
        "1.º Place — Gift Card (450€) per team",
        "2.º Place — Gift Card (250€) per team",
        "3.º Place — Gift Card (100€) per team",
      ]}
    />
  );

  const NavChallenge = () => {
    const style = { paddL: "15px", clr: "#fff" };

    return (
      <div className="navChallenge">
        <button className="title-nav" style={{ paddingLeft: style.paddL }}>
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
