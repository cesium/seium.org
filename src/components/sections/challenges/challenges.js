import React from "react";
import Footer from "../footer";
import Container from "../../../components/container/container";
import HeaderIcon from "../../../components/images/Header.svg";
import Card from "../../../components/utils/cardCompo";
import "../../../assets/css/navChallenge.css";
import "../../../assets/css/challenges.css";
import NavBar from "../../../components/nav/nav";
import Badges from "./badges";
import Contests from "./contests";
import Hackathon from "./hackathon";
import windowDimensions from "../../../components/utils/windowDimensions";
import TeamImg from "../../../components/images/Team.svg";

function Challenges() {
  const { width, height } = windowDimensions();

  const cardTeamStyle = () => {
    if (width >= 992) {
      return { w: "210px", h: "110px" };
    } else if (width >= 768) {
      return { w: "139px", h: "139px" };
    } else if (width >= 540) {
      return { w: "139px", h: "139px" };
    } else if (width >= 411) {
      return { w: "129px", h: "129px" };
    } else if (width >= 375) {
      return { w: "126px", h: "126px" };
    } else if (width >= 360) {
      return { w: "115px", h: "115px" };
    } else if (width >= 320) {
      return { w: "100px", h: "100px" };
    } else {
      return { w: "100px", h: "100px" };
    }
  };

  return (
    <>
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

            <Badges />
            <Contests />
            <Hackathon />

            <div
              className="cardTeam"
              style={{
                height: cardTeamStyle().h,
              }}
            >
              <Card img={TeamImg} big={true} style={{ borderBottom: "2px solid white" }}>
                Psssst... There are even more prizes, check my app the after Opening Ceremony!
              </Card>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Challenges;
