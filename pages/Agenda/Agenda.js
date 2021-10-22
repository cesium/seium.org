import React from "react";

import Carousel from "../../components/carousels/CarouselAgenda";
import Card from "../../components/utils/CardCompo";
import HeaderIcon from "../public/images/Header.svg";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import "./style.module.css";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

function Agenda(props) {
  let styling = {
    paddingLeft: "0",
    paddingRight: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const queryParams = queryString.parse(props.location.search);

  return (
    <>
      <div className={styles.agendainto-bg}>
        <NavBar />
        <div className={styles.agendainto}>
          <div className={`${styles.landing} ${styles.container}`}>
            <div className={styles.description}>
              <p className={`${styles.x-large-1} ${styles.chall-title}`}>Agenda</p>
              <div className={styles.headerChallenge}>
                <h1 className={`${styles.title} ${styles.chall-desc}`}>
                  Five awesome days of learning, sharing and{" "}
                  <span className={styles.spanChall}>
                    winning
                    <div className={styles.box-agenda}>
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
            </div>
          </div>
        </div>
      </div>
      <div className={styles.agenda-bg}>
        <div style={styling}>
          <Carousel
            initialDay={queryParams.day ? parseInt(queryParams.day) : 0}
          />
        </div>
      </div>
      <Footer>Yep. That’s the end of it. Bye now. 👋</Footer>
    </>
  );
}

export default withRouter(Agenda);
