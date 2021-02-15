import React from "react";

import SpeakersCarousel from "../../carousels/speakers-carousel";
import Container from "../../container/container";
import Footer from "../footer";
import NavBar from "../../../components/nav/nav";
import "../../../assets/css/speakers.css";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

function Speakers(props) {
  let styling = {
    paddingLeft: "0",
    paddingRight: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  };

  const queryParams = queryString.parse(props.location.search);

  return (
    <>
      <div className="speakers-bg">
        <NavBar />
        <div>
          <div style={styling}>
            <Container>
              <p className="x-large-1 chall-title">Speakers</p>
              <div
                className="headerChallenge"
                style={{ marginBottom: "100px" }}
              >
                <h1 className="chall-desc">
                  A crazy cool selection of the best speakers
                </h1>
              </div>
              <SpeakersCarousel
                style={{ paddingLef: "0px" }}
                initialDay={queryParams.day ? parseInt(queryParams.day) : 0}
              ></SpeakersCarousel>
            </Container>
          </div>
        </div>
      </div>
      <Footer>Yep. That’s the end of it. Bye now. 👋</Footer>
    </>
  );
}

export default withRouter(Speakers);
