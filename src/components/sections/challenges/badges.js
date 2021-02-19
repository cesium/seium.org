import React, { useState, useEffect } from "react";
import Challenge from "../../../components/utils/challenge";

function Badges() {
  const [data, setdata] = useState(1);

  let challenge1 = (
    <Challenge
      title="Final Badge Draw Prizes"
      parags={[
        "You go to talks and workshops, you talk with every company you can and participate in every tournament. Now you are left with a bunch of badges, what do you do?!",
        "Every badge comes with a set of entries to the Final Badge Draw! On the last day of SEI, we will select three winning entries and their owners will be the lucky recipients of an amazing selection of prizes! The more badges you have, the more likely you are to win!",
      ]}
      buttonText=""
      prizes={[
        "1.º Place — PS5 - Digital Edition",
        "2.º Place — Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
        "3.º Place — Ender 3 V2",
      ]}
    />
  );
  let challenge2 = (
    <Challenge
      title="1st Day Badges"
      parags={[
        "This one is easy. The winners are the three people with the most badges won on the first day! If there is a tie, the participant with the most tokens wins! If there’s still a tie after that, we’ll toss a coin! Badges you win before SEI starts will be counted on this day.",
      ]}
      buttonText=""
      prizes={[
        "1.º Place — Trotinete Elétrica XIAOMI MI ESSENTIAL	",
        "2.º Place — Corsair K63 Cherry MX Red",
        "3.º Place — JBL Go 3",
      ]}
    />
  );
  let challenge3 = (
    <Challenge
      title="2nd Day Badges"
      parags={[
        "The same rules as in day one. The difference is that only the badges you win on the second day count towards this price.",
      ]}
      buttonText=""
      prizes={[
        "1.º Place — Apple Watch SE",
        "2.º Place — Nintendo Switch Lite",
        "3.º Place — Google Nest Mini",
      ]}
    />
  );
  let challenge4 = (
    <Challenge
      title="3rd Day Badges"
      parags={[
        "The same rules as in day one (again). The difference is that only the badges you win on the third day count towards this price.",
      ]}
      buttonText=""
      prizes={[
        "1.º Place — Xbox Series S",
        "2.º Place — Hyperx Cloud II",
        "3.º Place — Xiaomi Mi Band 5",
      ]}
    />
  );
  let challenge5 = (
    <Challenge
      title="4th Day Badges"
      parags={[
        "This is getting a little repetitive… The same rules as in day one (again). The difference is that only the badges you win on the forth day count towards this price.",
      ]}
      buttonText=""
      prizes={[
        "1.º Place — Nintendo Switch",
        "2.º Place — Monitor Ultrawide LG 29WL500",
        "3.º Place — Glorious PC Gaming Race Model O",
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
            Final Badge Draw Prizes{" "}
          </p>
        </button>
        <button
          className="title-nav"
          onClick={() => changeStyle2(2)}
          style={{ paddingLeft: myStyle2.paddL, textColor: myStyle2.clr }}
        >
          <p className="medium-5" style={{ color: myStyle2.clr }}>
            1st Day Badges{" "}
          </p>
        </button>
        <button
          className="title-nav"
          onClick={() => changeStyle3(1)}
          style={{ paddingLeft: myStyle3.paddL }}
        >
          <p className="medium-5" style={{ color: myStyle3.clr }}>
            2nd Day Badges{" "}
          </p>
        </button>

        <button
          className="title-nav"
          onClick={() => changeStyle4(4)}
          style={{ paddingLeft: myStyle4.paddL, textColor: myStyle4.clr }}
        >
          <p className="medium-5" style={{ color: myStyle4.clr }}>
            3rd Day Badges
          </p>
        </button>
        <button
          className="title-nav"
          onClick={() => changeStyle5(5)}
          style={{ paddingLeft: myStyle5.paddL, textColor: myStyle5.clr }}
        >
          <p className="medium-5" style={{ color: myStyle5.clr }}>
            4th Day Badges
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

export default Badges;
