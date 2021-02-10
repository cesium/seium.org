import React, { useState, useEffect } from "react";
import Challenge from "../../../components/utils/challenge";
import Button from "../../buttons/button";

function Contests() {
  const [data, setdata] = useState(1);

  let challenge1 = (
    <Challenge
      title="CV Contest"
      parag=""
      buttonText={
        <a target="_blank" href="https://forms.gle/wLdyCmaGaqKko1Jd9">
          <Button className="button">Send yours</Button>
        </a>
      }
      prizes={["Winner — PS5 - Digital Edition"]}
    />
  );
  let challenge2 = (
    <Challenge
      title="CTF"
      parag=""
      buttonText=""
      prizes={[
        "1.º Place — Raspberry Pi 4 8gb + caixa + charger	",
        "2.º Place — Raspberry Pi 4 4gb + charger",
        "3.º Place — Raspberry Pi 4 2gb + charger",
      ]}
    />
  );
  let challenge3 = (
    <Challenge
      title="Google HashCode"
      parag=""
      buttonText={
        <a
          target="_blank"
          href="https://codingcompetitions.withgoogle.com/hashcode/"
        >
          <Button className="button">Sign up now</Button>
        </a>
      }
      prizes={["Winners — Gift Cards (total = 200€)"]}
    />
  );
  let challenge4 = (
    <Challenge
      title="Photography Contest"
      buttonText=""
      prizes={["Winner — Polaroid One Step 2"]}
    />
  );
  let challenge5 = (
    <Challenge
      title="Instagram Giveaway"
      parag=""
      buttonText=""
      prizes={[
        "Winner — Apple Airpods"
      ]}
    />
  );

  const [challenge, setchallenge] = useState(challenge1);

  const NavChallenge = () => {
    const [myStyle1, setMyStyle1] = useState({ paddL: "15px", clr: "#fff" });
    const [myStyle2, setMyStyle2] = useState({});
    const [myStyle3, setMyStyle3] = useState({});
    const [myStyle4, setMyStyle4] = useState({});
    const [myStyle5, setMyStyle5] = useState({});

    let changeStyle1 = () => {
      setdata(1);
      setMyStyle1({ paddL: "15px", clr: "#fff" });

      setMyStyle2({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle3({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle4({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle5({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
    };
    let changeStyle2 = () => {
      setdata(2);
      setMyStyle2({ paddL: "15px", clr: "#fff" });

      setMyStyle1({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle3({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle4({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle5({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
    };
    let changeStyle3 = () => {
      setdata(3);
      setMyStyle3({ paddL: "15px", clr: "#fff" });

      setMyStyle2({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle4({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle5({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle1({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
    };
    let changeStyle4 = () => {
      setdata(4);
      setMyStyle4({ paddL: "15px", clr: "#fff" });

      setMyStyle1({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle2({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle3({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle5({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
    };
    let changeStyle5 = () => {
      setdata(5);
      setMyStyle5({ paddL: "15px", clr: "#fff" });

      setMyStyle1({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle2({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle3({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle4({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
    };

    return (
      <div className="navChallenge">
        <button
          className="title-nav"
          onClick={() => changeStyle1(1)}
          style={{ paddingLeft: myStyle1.paddL }}
        >
          <p className="medium-5" style={{ color: myStyle1.clr }}>
            CV Contest
          </p>
        </button>
        <button
          className="title-nav"
          onClick={() => changeStyle2(2)}
          style={{ paddingLeft: myStyle2.paddL, textColor: myStyle2.clr }}
        >
          <p className="medium-5" style={{ color: myStyle2.clr }}>
            CTF
          </p>
        </button>
        <button
          className="title-nav"
          onClick={() => changeStyle3(1)}
          style={{ paddingLeft: myStyle3.paddL }}
        >
          <p className="medium-5" style={{ color: myStyle3.clr }}>
            Google HashCode
          </p>
        </button>

        <button
          className="title-nav"
          onClick={() => changeStyle4(4)}
          style={{ paddingLeft: myStyle4.paddL, textColor: myStyle4.clr }}
        >
          <p className="medium-5" style={{ color: myStyle4.clr }}>
            Photography Contest
          </p>
        </button>
        <button
          className="title-nav"
          onClick={() => changeStyle5(5)}
          style={{ paddingLeft: myStyle5.paddL, textColor: myStyle5.clr }}
        >
          <p className="medium-5" style={{ color: myStyle5.clr }}>
            <strike>Instagram Giveaway</strike> (Closed)
          </p>
        </button>
      </div>
    );
  };

  useEffect(() => {
    if (data === 1) setchallenge(challenge1);
    else if (data === 2) setchallenge(challenge2);
    else if (data === 3) setchallenge(challenge3);
    else if (data === 4) setchallenge(challenge4);
    else if (data === 5) setchallenge(challenge5);
  }, [data]);

  return (
    <div className="element">
      {NavChallenge()}
      {challenge}
    </div>
  );
}

export default Contests;
