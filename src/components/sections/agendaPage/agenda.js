import React from "react";

import Container from "../../container/container";
import Carousel from "../../carousels/carousel-agenda";
import Card from "../../utils/cardCompo";
import HeaderIcon from "../../images/Header.svg";
import Footer from "../footer";
import NavBar from "../../../components/nav/nav";
import "../../../assets/css/navChallenge.css";

function Agenda() {
  let styling = {
    paddingLeft: "0",
    paddingRight: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <div className="agenda-bg">
        <NavBar />
        <div style={styling}>
          <Container>
            <div className="headerChallenge">
              <h1 className="chall-desc">
                Five awesome days of learning, sharing and{" "}
                <span className="spanChall">
              winning
              <div className="box-agenda">
                <div id="mascote">
                  <Card
                    img={HeaderIcon}
                    alt="HeaderIcon"
                    style={{ alignItems: "flex-end" }}
                  >
                    Or maybe losing. This one is kind of optional.
                  </Card>
                </div>
              </div>
            </span>
                .
              </h1>
            </div>
            <Carousel />
          </Container>
        </div>
      </div>
      <Footer>Yep. That’s the end of it. Bye now. 👋</Footer>
    </>
  );
}

export default Agenda;
