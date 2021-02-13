import React from "react";

import SpeakersCarousel from "../../carousels/speakers-carousel";
import Container from "../../container/container";
import Footer from "../footer";
import NavBar from "../../../components/nav/nav";
import "../../../assets/css/speakers.css";

function Speakers() {
  let styling = {
    paddingLeft: "0",
    paddingRight: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  };

  return (
    <>
      <div className="speakers-bg">
        <NavBar />
        <div>
          <div style={styling}>
            <Container>
              <p className="x-large-1 chall-title">Speakers</p>
              <div className="headerChallenge" style={{marginBottom: "100px"}}>
                <h1 className="chall-desc">
                  A crazy cool selection of the best speakers
                </h1>
              </div>
              <SpeakersCarousel
                style={{ paddingLeft: "0px" }}
              ></SpeakersCarousel>
            </Container>
          </div>
        </div>
      </div>
      <Footer>Yep. That’s the end of it. Bye now. 👋</Footer>
    </>
  );
}

export default Speakers;
