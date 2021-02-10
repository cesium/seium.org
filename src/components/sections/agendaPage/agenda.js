import React from "react";

import Container from "../../container/container";
import SectionDescription from "../../utils/sectionDescription";
import Carousel from "../../carousels/carousel-agenda";
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
            <SectionDescription middleTitle="Agenda"></SectionDescription>
            <Carousel />
          </Container>
        </div>
      </div>
      <Footer>Yep. That’s the end of it. Bye now. 👋</Footer>
    </>
  );
}

export default Agenda;
