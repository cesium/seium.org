import React from "react";
import Intro from "./intro/intro";
import Carousel from "./agenda/carousel-home";
import Footer from "../footer";
import Speakers from "./speakers";
import ipdj from "../../images/partners/ipdj.png";
import onda from "../../images/partners/onda.svg";
import uminhoon from "../../images/partners/uminhoon.png";
import wumrm from "../../images/partners/wUMrm.png";

function Home() {
  return (
    <div>
      <Intro />
      <Carousel
        style={{
          background: "#142A3E",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      />
      <Speakers
        style={{
          background: "#0E1D2A",
          paddingTop: "5%",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      />
      <div
        style={{
          background: "#142A3E",
          paddingTop: "5%",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <div className="title">
          <h2>Partners who helped us make it possible</h2>
        </div>
        <div className="sponsors">
          <a
            className="sponsor grayscale"
            target="_blank"
            rel="noreferrer"
            href="https://ipdj.gov.pt/"
          >
            <img src={ipdj} alt="IPDJ" />
          </a>
          <a
            className="sponsor"
            target="_blank"
            rel="noreferrer"
            href="https://ondastudio.co/"
          >
            <img src={onda} alt="Onda Design" />
          </a>
          <a
            className="sponsor big"
            target="_blank"
            rel="noreferrer"
            href="https://aaum.pt/"
          >
            <img src={uminhoon} alt="UMinho ON" />
          </a>
          <a
            className="sponsor"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/wumrm_"
          >
            <img src={wumrm} alt="wUMrm" />
          </a>
        </div>
      </div>
      <Footer style={{ background: "#0e1d2a" }}>
        Psst. Have you checked the <a href="/challenges">challenges</a>? Just
        saying.
      </Footer>
    </div>
  );
}

export default Home;

//#181818
//rgb(20, 42, 62)
//#0e1d2a
//#181818
