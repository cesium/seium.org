import React from "react";
import { Clickable } from "react-clickable";
import PropTypes from "prop-types";
import windowDimensions from "../../utils/windowDimensions";
import PrevNotClicked from "../../images/prev-not-clicked-green.svg";
import NextNotClicked from "../../images/next-not-clicked-green.svg";
import PrevClicked from "../../images/prev-clicked-green.svg";
import NextClicked from "../../images/next-clicked-green.svg";
import "./clickable.css";
import Rank from "./index";

let next = NextClicked;
let prev = PrevNotClicked;

const winners = [
  { rank: "1", username: "usernameX", badges: "43" },
  { rank: "2", username: "john-robert", badges: "23" },
  { rank: "3", username: "usernameX", badges: "45" },
  { rank: "4", username: "john-robert", badges: "23" },
  { rank: "5", username: "usernameX", badges: "45" },
  { rank: "6", username: "john-robert", badges: "45" },
];

let headerStyle = () => {
  let { width, height } = windowDimensions();
  if (width >= 1200) {
    return {
      button: {
        backgroundColor: "transparent",
        marginTop: "5%",
      },
      date: {
        fontSize: "24px",
        marginLeft: "59px",
        marginBottom: "7px",
      },
      day: {
        color: "#00FFB7",
      },
      navigation: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        position: "sticky",
        top: 0,
        paddingBottom: "4rem",
        paddingTop: "1rem",
        marginTop: "-1rem",
      },
      headerContainer: {
        display: "flex",
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
        color: "#00FFB7",
      },
      navigation: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        position: "sticky",
        top: 0,
        paddingBottom: "4rem",
        paddingTop: "1rem",
        marginTop: "-1rem",
      },
      headerContainer: {
        display: "flex",
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
        color: "#00FFB7",
      },
      navigation: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        position: "sticky",
        top: 0,
        paddingBottom: "4rem",
        paddingTop: "1rem",
        marginTop: "-1rem",
      },
      headerContainer: {
        display: "flex",
      },
    };
  } else {
    return {
      button: {
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
        color: "#00FFB7",
      },
      navigation: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "50px",
      },
      headerContainer: {
        display: "flex",
      },
    };
  }
};

function RankCarousel(props) {
  let [increment, setIncrement] = React.useState(props.initialDay);
  let carouselPages = [23, 24, 25, 26];

  let manageNavigation = () => {
    prev = PrevClicked;
    next = NextClicked;
    if (increment === 0) prev = PrevNotClicked;

    if (increment === carouselPages.length - 1) next = NextNotClicked;
  };

  function navigate(param) {
    if (param === "next" && increment < carouselPages.length - 1)
      setIncrement((next) => next + 1);
    else if (param === "prev" && increment > 0)
      setIncrement((prev) => prev - 1);

    return 1;
  }

  function Header(props) {
    return (
      <div style={headerStyle().headerContainer}>
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
          <h1 style={headerStyle().day}>{23 + increment} Feb</h1>
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

  return (
    <div className="main">
      <div className="rankcarousel">
        <Header></Header>
      </div>
      <Rank winners={winners} day={23 + increment}></Rank>
      {manageNavigation()}
    </div>
  );
}

RankCarousel.propTypes = {
  initialDay: PropTypes.number,
};

RankCarousel.defaultProps = {
  initialDay: 0,
};

export default RankCarousel;
