import React, { useState } from "react";
import Logo from "../images/logo.svg";
import FooterIcon from "../images/Footer.svg";
import Media from "../utils/media";
import "../../assets/css/footer.css";
import Container from "../container/container";
import Card from "../utils/cardCompo";
import useInView from "react-cool-inview";
import Fade from "react-reveal/Fade";

function Footer(props) {
  const [animation, setAnimation] = useState(false);
  const { ref, inView } = useInView({
    onEnter: () => {
      setAnimation(true);
    },
    onLeave: () => {
      setAnimation(false);
    },
  });

  let color = inView
    ? { transition: "background 2s ease", background: "#181818" }
    : "";

  return (
    <div
      ref={ref}
      className="footer"
      style={{ ...props.style, ...color, overflowY: "hidden" }}
    >
      <Container style={{ paddingBottom: "0%" }}>
        <div className="logo-footer responsive">
          <img src={Logo} alt="logo" className="logo" />
          <p className="x_small2 lang">
            Semana da <br />
            Engenharia
            <br />
            Informática
          </p>
        </div>
        <div className="footer-info">
          <div className="parag1">
            <a href="https://2019.seium.org/">
              <p className="nav-bar-link responsive">Previous Edition </p>
            </a>
            <a target="_blank" href="/docs/RegulamentoGeral.pdf">
              <p className="nav-bar-link responsive"> General Regulation </p>
            </a>
          </div>
          <div className="parag2">
            {animation && (
              <Fade bottom>
                <div className="card-footer">
                  {props.children ? (
                    <Card img={FooterIcon} alt="FooterIcon">
                      {props.children}
                    </Card>
                  ) : (
                    ""
                  )}
                </div>
              </Fade>
            )}
            <div className="responsive">
              <Media />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Footer;
