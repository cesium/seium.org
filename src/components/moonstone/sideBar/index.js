import React, { useState } from "react";
import { useAuth } from "../context/auth";
import { NotificationContainer } from "react-notifications";
import BarItem from "./BarItem";
import Container from "../Container";
import Profile from "../../../pages/Profile";
import Wheel from "../../../pages/Wheel";
import Slide from "react-reveal/Slide";
import Window from "../../utils/windowDimensions";
import styled from "styled-components";
import Exit from "../../../assets/img/exitMenu.svg";
import Badgedex from "../../../pages/Badgedex";
import Leaderboard from "../../../pages/Leaderboard";
import Awards from "../../../pages/Awards";

import "react-notifications/lib/notifications.css";

export default function SideBar(props) {
  const { width } = Window();
  const { dispatch: dispatchAuth } = useAuth();
  const [selected, setselected] = useState([true, false, false, false, false]);
  const [link, setLink] = useState("profile");
  const [toggleButton, setToggleButton] = useState(true);
  const [Menu, setMenu] = useState(styled.a``);
  const [Zindex, setZindex] = useState(0);
  const [Opacity, setOpacity] = useState(0);

  function clickHandle(itemIndex) {
    let array = [];
    for (let index = 0; index < selected.length; index++) {
      if (index !== itemIndex) {
        array.push(false);
      } else {
        array.push(true);
      }
    }
    return array;
  }
  const handleOnClick = (index, linkName) => {
    setselected((curr) => clickHandle(index));
    setLink((curr) => linkName);
    setZindex((curr) => 0);
    setToggleButton(true);
  };

  const goToWheel = () => {
    handleOnClick(1, "wheel");
  };

  function PagesLink(props) {
    return (
      <div className="pagesLink" style={props.style}>
        <BarItem
          style={{ position: "relative", zIndex: Zindex }}
          onClick={() => handleOnClick(0, "profile")}
          selected={selected[0]}
          page="PROFILE"
        ></BarItem>
        <BarItem
          style={{ position: "relative", zIndex: Zindex }}
          onClick={() => handleOnClick(1, "wheel")}
          selected={selected[1]}
          page="WHEEL"
        ></BarItem>
        <BarItem
          style={{ position: "relative", zIndex: Zindex }}
          onClick={() => handleOnClick(3, "badgedex")}
          selected={selected[3]}
          page="BADGEDEX"
        ></BarItem>
        <BarItem
          style={{ position: "relative", zIndex: Zindex }}
          onClick={() => handleOnClick(4, "leaderboard")}
          selected={selected[4]}
          page="LEADERBOARD"
        ></BarItem>
        <BarItem
          style={{ position: "relative", zIndex: Zindex }}
          onClick={() => handleOnClick(5, "awards")}
          selected={selected[5]}
          page="AWARDS"
        ></BarItem>
      </div>
    );
  }

  const handleIconMenu = () => {
    setToggleButton((curr) => !curr);
    setMenu(
      toggleButton
        ? styled.a`
            background: url(${Exit}) no-repeat center !important;
          `
        : styled.a`
            background = url('../../assets/img/menIcon.svg') no-repeat center;
        `
    );
    setZindex((curr) => (curr === 0 ? 6 : 0));
    setOpacity((curr) => (curr === 0 ? 1 : 0));
  };

  const renderActivePage = (page) => {
    console.log(page);
    switch (page) {
      case "profile":
        return <Profile></Profile>;
      case "wheel":
        return <Wheel></Wheel>;
      case "badgedex":
        return <Badgedex></Badgedex>;
      case "leaderboard":
        return <Leaderboard></Leaderboard>;
      case "awards":
        return <Awards goToWheel={goToWheel} />;
      default:
        return <Profile></Profile>;
    }
  };
  const mainSlide = (
    <Slide className="containerprofile" bottom when={toggleButton}>
      {renderActivePage(link)}
    </Slide>
  );
  const mainNormal = renderActivePage(link);
  const main = width <= 768 ? mainSlide : mainNormal;
  return (
    <Container
      className="profile"
      style={{ ...props.style, ...{ maxWidth: "100%" } }}
    >
      <div className="sideBar">
        <div className="sideBarContainer">
          <div className="sideBarHeader">
            <a href="/" className="small">
              {"<" + " Back to SEI website"}
            </a>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "5px",
              }}
            >
              <a
                className="pt"
                href=""
                style={{ opacity: Opacity, transition: "2s" }}
              ></a>
              <Menu onClick={handleIconMenu} className="icon"></Menu>
            </div>
          </div>
          <div className="logo"></div>
          <PagesLink style={{ marginBottom: "137px" }}></PagesLink>
        </div>
        <a
          className="small logout"
          onClick={() => dispatchAuth({ type: "LOGOUT" })}
        >
          Log out 👋
        </a>
      </div>
      {main}
      <NotificationContainer />
    </Container>
  );
}
