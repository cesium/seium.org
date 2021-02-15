import React from "react";
import Intro from "./intro";
import Footer from "../footer";
import Mentors from "./mentors";
import Awards from "./awards";
import Jury from "./jury";
import Ready from "./ready";

function Hackathon() {
  return (
    <div>
      <Intro />
      {/*<Mentors
        style={{
          background: "#0E1D2A",
          paddingTop: "5%",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      />*/}
      <Awards
        style={{
          background: "#4CA9FF",
          paddingTop: "5%",
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingBottom: "5%",
        }}
      />
      {/*<Jury
        style={{
          background: "#0E1D2A",
          paddingTop: "5%",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      />*/}
      <Ready
        style={{
          background: "#0E1D2A",
          paddingTop: "5%",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      />
      <Footer style={{ background: "#0e1d2a" }}>
        Yep. That's the end of it. Bye now. 👋
      </Footer>
    </div>
  );
}

export default Hackathon;
