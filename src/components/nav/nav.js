import React, { useState } from "react";
import Logo from "../images/logo.svg";
import "../../assets/css/navbar.css";
import NavIcon from "../images/nav-icon.svg";
import Pt from "../images/pt.svg";
import $ from "jquery";

function NavBar() {
  const handleClick = () => {
    document.querySelector(".menu-icon-wrapper").classList.toggle("open");
    document.querySelector(".nav-content").classList.toggle("is-active");
    document.querySelector(".pt-icon").classList.toggle("is-show");
    document.querySelector(".lang").classList.toggle("is-hidden");
    document.querySelector(".logo").classList.toggle("is-logo");
    document.querySelector(".join-us").classList.toggle("is-hidden");

    $(window).on("scroll", () => {
      var navmenu = $(".navbar");
      if ($(window).scrollTop() < 30) navmenu.removeClass("on-scroll");
      else navmenu.addClass("on-scroll");
    });
  };

  return (
    <nav className="navbar fixed-top">
      <div className="container-nav">
        <a className="brand logo" href="/">
          <img src={Logo} alt="Sei Logo" />
        </a>
        <div className="nav-content">
          <div className="nav-item">
            <a className="nav-link nav-bar-link nav_link-s" href="/agenda">
              Agenda{" "}
            </a>
            <a className="nav-link nav-bar-link nav_link-s" href="/challenges">
              Challenges{" "}
            </a>
          </div>
          <div className="nav-item">
            {/* <a className="nav-link nav-bar-link nav_link-s" href="#">
              Hackathon{" "}
            </a> */}
            <a
              className="nav-link nav-bar-link nav_link-s"
              target="_blank"
              href="https://forms.gle/wLdyCmaGaqKko1Jd9"
            >
              Hackathon{" "}
            </a>
            <a className="nav-link nav-bar-link nav_link-s" href="/speakers">
              Speakers{" "}
            </a>
          </div>
          <div className="nav-item">
            {/* <a className="nav-link nav-bar-link nav_link-s" href="/team">
              Team{" "}
            </a> */}
            {/* <a className="nav-link nav-bar-link lang" href="#">
              {" "}
              EN <span className="pt">PT</span>{" "}
            </a> */}
          </div>
          <div className="join-us">
            <a target="_blank" href="http://seium21.eventbrite.pt/">
              <img src={NavIcon} alt="join us" />
            </a>
          </div>
        </div>
        <div
          className="menu-icon-wrapper"
          style={{ visibility: "visible", display: "none" }}
        >
          <a style={{ marginLeft: "-39px" }} className="pt-icon" href="#">
            <img src={Pt} alt="Pt" />
          </a>
          <svg width="1000px" height="1000px">
            <path
              className="path1"
              d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
            ></path>
            <path className="path2" d="M 300 500 L 700 500"></path>
            <path
              className="path3"
              d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
            ></path>
          </svg>
          <button
            className="menu-icon-trigger"
            onClick={() => handleClick()}
          ></button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
