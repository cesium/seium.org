import React, { useState, useEffect } from "react";
import Challenge from "../../../components/utils/challenge";
import Footer from "../footer";
import Container from "../../../components/container/container";
import HeaderIcon from "../../../components/images/Header.svg";
import Card from "../../../components/utils/cardCompo";
import "../../../assets/css/navChallenge.css";
import "../../../assets/css/challenges.css";
import NavBar from "../../../components/nav/nav";

function Challenges() {
  const [data, setdata] = useState(1);

  // let handleCallback = (childData) =>{
  //     setdata({data: childData})
  // }
  let challenge1 = (
    <Challenge
      title="Challenge Name 1"
      parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit."
      buttonText=""
    />
  );
  let challenge2 = (
    <Challenge
      title="Challenge Name 2"
      parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit."
      buttonText=""
    />
  );
  let challenge3 = (
    <Challenge
      title="Challenge Name 3"
      parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit."
      buttonText=""
    />
  );
  let challenge4 = (
    <Challenge
      title="CV Challenge"
      parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit."
      buttonText="UPLOAD YOUR CV..."
    />
  );
  let challenge5 = (
    <Challenge
      title="Photography Challenge"
      parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit."
      buttonText=" + "
    />
  );
  let challenge6 = (
    <Challenge
      title="Final Challenge"
      parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit."
      buttonText=""
    />
  );
  const [challenge, setchallenge] = useState(challenge1);

  const NavChallenge = () => {
    const [myStyle1, setMyStyle1] = useState({ paddL: "15px", clr: "#fff" });
    const [myStyle2, setMyStyle2] = useState({});
    const [myStyle3, setMyStyle3] = useState({});
    const [myStyle4, setMyStyle4] = useState({});
    const [myStyle5, setMyStyle5] = useState({});
    const [myStyle6, setMyStyle6] = useState({});

    let changeStyle1 = (nb) => {
      setdata(1);
      setMyStyle1({ paddL: "15px", clr: "#fff" });
      setMyStyle3({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle4({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle5({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle6({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle2({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
    };
    let changeStyle2 = (nb) => {
      setdata(2);
      setMyStyle2({ paddL: "15px", clr: "#fff" });
      setMyStyle3({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle4({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle5({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle6({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle1({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
    };
    let changeStyle3 = (nb) => {
      setdata(3);
      setMyStyle3({ paddL: "15px", clr: "#fff" });
      setMyStyle2({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle4({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle5({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle6({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle1({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
    };
    let changeStyle4 = (nb) => {
      setdata(4);
      setMyStyle4({ paddL: "15px", clr: "#fff" });
      setMyStyle3({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle2({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle5({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle6({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle1({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
    };
    let changeStyle5 = (nb) => {
      setdata(5);
      setMyStyle5({ paddL: "15px", clr: "#fff" });
      setMyStyle3({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle4({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle2({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle6({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle1({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
    };
    let changeStyle6 = (nb) => {
      setdata(6);
      setMyStyle6({ paddL: "15px", clr: "#fff" });
      setMyStyle3({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle4({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle5({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle2({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
      setMyStyle1({ paddL: "0px", clr: "rgba(255, 255, 255, 0.4)" });
    };

    return (
      <div className="navChallenge">
        <button
          className="title-nav"
          onClick={() => changeStyle1(1)}
          style={{ paddingLeft: myStyle1.paddL }}
        >
          <p className="meduim-5" style={{ color: myStyle1.clr }}>
            Challenge Name 1{" "}
          </p>
        </button>
        <button
          className="title-nav"
          onClick={() => changeStyle2(2)}
          style={{ paddingLeft: myStyle2.paddL, textColor: myStyle2.clr }}
        >
          <p className="meduim-5" style={{ color: myStyle2.clr }}>
            Challenge Name 2{" "}
          </p>
        </button>
        <div className="chall-three">
          <button
            className="title-nav"
            onClick={() => changeStyle3(3)}
            style={{ paddingLeft: myStyle3.paddL, textColor: myStyle3.clr }}
          >
            <p className="meduim-5" style={{ color: myStyle3.clr }}>
              Challenge Name 3
            </p>
          </button>
          <p className="x-small3 closed">
            Closed. See winners{" "}
            <a href="" className=" winner">
              {" "}
              here
            </a>
          </p>
        </div>

        <button
          className="title-nav"
          onClick={() => changeStyle4(4)}
          style={{ paddingLeft: myStyle4.paddL, textColor: myStyle4.clr }}
        >
          <p className="meduim-5" style={{ color: myStyle4.clr }}>
            CV Challenge
          </p>
        </button>
        <button
          className="title-nav"
          onClick={() => changeStyle5(5)}
          style={{ paddingLeft: myStyle5.paddL, textColor: myStyle5.clr }}
        >
          <p className="meduim-5" style={{ color: myStyle5.clr }}>
            Photo Challenge
          </p>
        </button>
        <button
          className="title-nav"
          onClick={() => changeStyle6(6)}
          style={{ paddingLeft: myStyle6.paddL, textColor: myStyle6.clr }}
        >
          <p className="meduim-5" style={{ color: myStyle6.clr }}>
            Final Challenge
          </p>
        </button>
      </div>
    );
  };

  useEffect(() => {
    if (data === 2) setchallenge(challenge2);
    else if (data === 3) setchallenge(challenge3);
    else if (data === 4) setchallenge(challenge4);
    else if (data === 5) setchallenge(challenge5);
    else if (data === 6) setchallenge(challenge6);
  }, [data]);

  return (
    <div className="challenges-bg">
      <NavBar />
      <div className="challenges">
        <Container>
          <p className="x-large-1 chall-title">Challenges</p>
          <div className="headerChallenge">
            <h1 className="chall-desc">
              Participate in new challenges every{" "}
              <span className="spanChall">
                {" "}
                day
                <div className="cardContainer">
                  <Card
                    img={HeaderIcon}
                    alt="HeaderIcon"
                    style={{ alignItems: "flex-end" }}
                  >
                    You can also win awards every day. But that’s highly
                    unlikely I would say...
                  </Card>
                </div>
              </span>
              .
            </h1>
          </div>

          <div className="element">
            {NavChallenge()}
            {challenge}
          </div>
          {/* <div className="element">
                    <NavChallenge />
                    <Challenge title='CV Challenge'
                                parag='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit.'
                                buttonText='UPLOAD YOUR CV...'
                    />
                </div>
                <div className="element">
                    <NavChallenge />
                    <Challenge title='Photography Challenge'
                                parag='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit.'
                                buttonText='+'
                    />
                </div>
                <div className="element">
                    <NavChallenge />
                    <Challenge title='Final Challenge'
                                parag='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit.'
                    />
                </div> */}
        </Container>
      </div>
      <Footer>You wanted even more? 😲</Footer>
    </div>
  );
}

export default Challenges;
