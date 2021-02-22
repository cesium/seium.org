import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { useUser } from "../context/user";
import { NotificationContainer } from "react-notifications";
import BarItem from "./BarItem";
import Container from "../Container";
import StandDashboard from "../../../pages/company/StandDasboard";
import Spotlight from "../../../pages/company/Spotlight";
import Slide from "react-reveal/Slide";
import Window from "../../utils/windowDimensions";
import styled from "styled-components";
import Exit from "../../../assets/img/exitMenu.svg";

import API from "../../../utils/api";

import "react-notifications/lib/notifications.css";

export default function SideBar(props) {
  const { width } = Window();
  const { dispatch: dispatchAuth } = useAuth();
  const { user, dispatch } = useUser();
  const [selected, setselected] = useState([true, false]);
  const [link, setLink] = useState("profile");
  const [toggleButton, setToggleButton] = useState(true);
  const [Menu, setMenu] = useState(styled.a``);
  const [Zindex, setZindex] = useState(0);
  const [Opacity, setOpacity] = useState(0);

  useEffect(async () => {
    const { data: user } = await API.get("/api/v1/company");
    dispatch({ type: "INIT_COMPANY", user: user });
  }, []);

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
          onClick={() => handleOnClick(0, "discordStand")}
          selected={selected[0]}
          page="DASHBOARD"
        ></BarItem>
        <BarItem
          style={{ position: "relative", zIndex: Zindex }}
          onClick={() => handleOnClick(1, "spotlight")}
          selected={selected[1]}
          page="SPOTLIGHT"
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
      case "discordStand":
        return <StandDashboard />;
      case "spotlight":
        return <Spotlight goToWheel={goToWheel} />;
      default:
        return <StandDashboard />;
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
          <div className="company_name">{user.name}</div>
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
