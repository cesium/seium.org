import React from "react";

import SpeakersCarousel from "../../carousels/speakers-carousel";
import SectionDescription from "../../utils/sectionDescription";
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
              <SectionDescription
                middleTitle="Speakers"
                title="A crazy cool selection of speakers."
                style={{
                  marginBottom: "150px",
                  marginTop: "10px",
                }}
              ></SectionDescription>
              <SpeakersCarousel
                style={{ paddingLef: "0px" }}
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
