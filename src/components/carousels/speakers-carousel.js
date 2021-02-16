import React from "react";
import { Clickable } from "react-clickable";

import windowDimensions from "../utils/windowDimensions";
import Container from "../container/container";
import Speaker from "./Speaker";
import PrevNotClicked from "../images/prev-not-clicked.svg";
import NextNotClicked from "../images/next-not-clicked.svg";
import PrevClicked from "../images/prev-clicked.svg";
import NextClicked from "../images/next-clicked.svg";

import speakers from "../../data/speakers.json";

import "../../assets/css/profile.css";
import "./clickable.css";
import "../../assets/css/agenda.css";

let next = NextClicked;
let prev = PrevNotClicked;

let headerStyle = () => {
  let { width } = windowDimensions();
  if (width >= 1200) {
    return {
      button: {
        marginTop: "5%",
      },
      date: {
        fontSize: "24px",
        marginLeft: "59px",
        marginBottom: "7px",
      },
      day: {},
      container: {},
      navigation: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      },
      headerContainer: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      },
    };
  } else if (width >= 823) {
    return {
      button: {
        marginTop: "10px",
        width: "24px",
      },
      date: {
        fontSize: "22px",
        marginLeft: "40px",
        marginBottom: "7px",
      },
      day: {
        fontSize: "46px",
      },
      container: {},
      navigation: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      },
      headerContainer: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      },
    };
  } else if (width >= 768) {
    return {
      button: {
        marginTop: "10px",
        width: "20px",
      },
      date: {
        fontSize: "18px",
        marginLeft: "36px",
        marginBottom: "7px",
      },
      day: {
        fontSize: "36px",
      },
      container: {
        paddingLeft: "0px",
      },
      navigation: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      },
      headerContainer: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      },
    };
  } else {
    return {
      button: {
        // paddingLeft: '15px',
        // paddingRight: '15px',
        backgroundColor: "transparent",
        marginTop: "5%",
        width: "22px",
      },
      date: {
        fontSize: "20px",
        marginLeft: "0",
      },
      day: {
        fontSize: "40px",
      },
      container: {
        flexDirection: "column",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      navigation: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "50px",
      },
      headerContainer: {
        width: "100%",
        maxWidth: "450px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "30px",
      },
    };
  }
};

function FilteredCarousel(props) {
  let containerStyle = {
    ...{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: "5vw",
      paddingRight: "5vw",
    },
    ...headerStyle().container,
  };
  let contentStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "450px",
  };
  let [increment, setIncrement] = React.useState(props.initialDay);
  function navigate(param) {
    if (param === "next" && increment < carouselPages.length - 1)
      setIncrement((next) => next + 1);
    else if (param === "prev" && increment > 0)
      setIncrement((prev) => prev - 1);

    return 1;
  }

  let carouselPages = Object.keys(speakers).map((day) => (
    <div style={contentStyle}>
      {speakers[day].map((speaker) => (
        <Speaker key={speaker.speakerID} {...speaker} />
      ))}
    </div>
  ));

  const Header = () => (
    <div style={headerStyle().headerContainer}>
      <p className="x-large-1" style={headerStyle().date}>
        Happening on
      </p>
      <div style={headerStyle().navigation}>
        <Clickable
          onClick={() => {
            navigate("prev");
          }}
          className="clickable prev"
          style={{
            ...headerStyle().button,
            ...{ backgroundImage: `url(${prev})` },
          }}
        ></Clickable>
        <h1 style={headerStyle().day}>{23 + increment} Fev</h1>
        <Clickable
          onClick={() => {
            navigate("next");
          }}
          className="clickable next"
          style={{
            ...headerStyle().button,
            ...{ backgroundImage: `url(${next})` },
          }}
        >
          {" "}
        </Clickable>
      </div>
      <div className="headerButtons">
        <p className="small" style={{ width: "68%", lineHeight: "1.2" }}>
          During this week, you have the opportunity to interact with many
          recognized speakers, national, international and notorious companies!
          You can get to know them better here.
        </p>
        <div className="agenda-buttons"></div>
      </div>
    </div>
  );

  let manageNavigation = () => {
    prev = PrevClicked;
    next = NextClicked;
    if (increment === 0) prev = PrevNotClicked;

    if (increment === carouselPages.length - 1) next = NextNotClicked;
  };

  return (
    <Container
      style={{
        ...containerStyle,
        ...props.style,
        ...{ paddingRight: "0px", paddingLeft: "10px" },
      }}
    >
      <Header />
      {manageNavigation()}
      {carouselPages[increment]}
    </Container>
  );
}

FilteredCarousel.defaultProps = {
  initialDay: 0,
};

export default FilteredCarousel;
