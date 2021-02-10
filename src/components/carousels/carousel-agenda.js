import React from "react";
import { Clickable } from "react-clickable";

import windowDimensions from "../utils/windowDimensions";
import Container from "../container/container";
import PrevNotClicked from "../images/prev-not-clicked.svg";
import NextNotClicked from "../images/next-not-clicked.svg";
import PrevClicked from "../images/prev-clicked.svg";
import NextClicked from "../images/next-clicked.svg";
import "./clickable.css";
import Day23 from "./agenda/day23";
import Day24 from "./agenda/day24";
import Day25 from "./agenda/day25";
import Day26 from "./agenda/day26";
import Day27 from "./agenda/day27";
import Day28 from "./agenda/day28";

let next = NextClicked;
let prev = PrevNotClicked;

let headerStyle = () => {
  let { width, height } = windowDimensions();
  if (width >= 1200) {
    return {
      button: {
        // paddingLeft: '15px',
        // paddingRight: '15px',
        backgroundColor: "transparent",
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
        fontSize: "24px",
        marginLeft: "40px",
        marginBottom: "7px",
      },
      day: {
        fontSize: "50px",
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
        fontSize: "20px",
        marginLeft: "36px",
        marginBottom: "7px",
      },
      day: {
        fontSize: "40px",
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

function AgendaCarousel(props) {
  let containerStyle = {
    ...{
      width: "100%",
      maxWidth: "1440px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      // alignItems: 'center',
      paddingLeft: "55px",
      paddingRight: "55px",
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

  let [increment, setIcrement] = React.useState(0);
  function navigate(param) {
    if (param == "next" && increment < carouselPages.length - 1)
      setIcrement((next) => next + 1);
    else if (param == "prev" && increment > 0) setIcrement((prev) => prev - 1);

    console.log(increment);
    return 1;
  }

  function Header(props) {
    return (
      <div style={headerStyle().headerContainer}>
        <p className="x-large-1" style={headerStyle().date}>
          {23 + increment} Feb
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
          <h1 style={headerStyle().day}>Today</h1>
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
      </div>
    );
  }

  let carouselPages = [
    <Day23 />,
    <Day24 />,
    <Day25 />,
    <Day26 />,
    <Day27 />,
    <Day28 />
  ];

  let manageNavigation = () => {
    prev = PrevClicked;
    next = NextClicked;
    if (increment === 0) prev = PrevNotClicked;

    if (increment === carouselPages.length - 1) next = NextNotClicked;
  };

  return (
    <Container style={{ ...containerStyle, ...props.style }}>
      <Header></Header>
      {manageNavigation()}
      {carouselPages[increment]}
    </Container>
  );
}

export default AgendaCarousel;
