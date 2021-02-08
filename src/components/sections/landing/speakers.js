import React from "react";
import "../../../assets/css/speakers.css";
import useInView from "react-cool-inview";

import speaker2 from "../../images/speaker2.png";
import speaker3 from "../../images/speaker3.png";
import speaker4 from "../../images/speaker4.png";
import speaker5 from "../../images/speaker5.png";
import speaker6 from "../../images/speaker6.png";
import Button from "../../buttons/button";
import Speaker from "../../utils/speaker";
import Container from "../../container/container";

function Speakers(props) {
  const { ref, inView } = useInView({
    unobserveOnEnter: true,
  });

  let color = inView
    ? { transition: "background 2s ease", background: "#0e1d2a" }
    : "";
  return (
    <div className="speakers" style={{ ...props.style, ...color }}>
      <Container>
        <div className="container">
          <div className="desc">
            <h3 className="speaker-title">
              Here’s a selection of this year’s speakers
            </h3>
            <Button background="#102333" width="169px" padd="18px">
              explore
            </Button>
          </div>
          <div ref={ref} className="images">
            <Speaker
              speaker={speaker2}
              alt={"speaker1"}
              name={"Celso Martinho"}
              job={"CEO and Founder"}
              desc={"Bright Pixel"}
            />
            <Speaker
              speaker={speaker2}
              alt={"speaker2"}
              name={"Bruno Ribeiro"}
              job={"Gamification Designer"}
              desc={"Fractal Mind"}
            />
            <Speaker
              speaker={speaker3}
              alt={"speaker3"}
              name={"David Amador"}
              job={"_(ツ)_/¯"}
              desc={"Upfall Studios"}
            />
            <Speaker
              speaker={speaker4}
              alt={"speaker4"}
              name={"André Pimenta"}
              job={"CEO and Founder"}
              desc={"Performatic"}
            />
            <Speaker
              speaker={speaker5}
              alt={"speaker5"}
              name={"David Amador"}
              job={"_(ツ)_/¯"}
              desc={"Upfall Studios"}
            />
            <Speaker
              speaker={speaker6}
              alt={"speaker6"}
              name={"André Pimenta"}
              job={"CEO and Founder"}
              desc={"Performatic"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Speakers;
