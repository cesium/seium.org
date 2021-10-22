import React, { useState } from "react";
import Logo from "../../public/images/logo.svg";
import FooterIcon from "../../public/images/Footer.svg";
import Media from "../utils/Media";
import styles from "./style.module.css";
import Container from "../Container";
import Card from "../utils/CardCompo";
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
      className={styles.footer}
      style={{ ...props.style, ...color, overflowY: "hidden" }}
    >
      <Container style={{ paddingBottom: "0%" }}>
        <div className={`${styles.logo-footer} ${styles.responsive}`}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <p className={`${styles.x_small2} ${styles.lang}`}>
            Semana da <br />
            Engenharia
            <br />
            Informática
          </p>
        </div>
        <div className={styles.footer-info}>
          <div className={styles.parag1}>
            <a href="https://2019.seium.org/">
              <p className={`${styles.nav-bar-link} ${styles.responsive}`}>Previous Edition </p>
            </a>
            <a target="_blank" href="/docs/RegulamentoGeral.pdf">
              <p className={`${styles.nav-bar-link} ${styles.responsive}`}> General Regulation </p>
            </a>
          </div>
          <div className={styles.parag2}>
            {animation && (
              <Fade bottom>
                <div className={styles.card-footer}>
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
            <div className={styles.responsive}>
              <Media />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Footer;
