import React, { useState, useEffect } from "react";
import Logo from "../../public/images/logo.svg";
import styles from "./style.module.css";
import NavIcon from "../../public/images/nav-icon.svg";
import $ from "jquery";


function NavBar() {
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    document.querySelector(".menu-icon-wrapper").classList.toggle("open");
    document.querySelector(".nav-content").classList.toggle("is-active");
    //document.querySelector(".pt-icon").classList.toggle("is-show");
    //document.querySelector(".lang").classList.toggle("is-hidden");
    document.querySelector(".logo").classList.toggle("is-logo");
    document.querySelector(".join-us").classList.toggle("is-hidden");

    $(window).on("scroll", () => {
      var navmenu = $(".navbar");
      if ($(window).scrollTop() < 30) navmenu.removeClass("on-scroll");
      else navmenu.addClass("on-scroll");
    });
  };

  return (
    <nav className={`${styles.navbar} ${styles.fixed-top}`}>
      <div className={styles.container-nav}>
        <a style={{ zIndex: width > 768 && 100 }} className={`${styles.brand} ${styles.logo}`} href="/">
          <img src={Logo} alt="Sei Logo" />
        </a>
        <div style={{ zIndex: width > 768 && 100 }} className={styles.nav-content}>
          <div className={styles.nav-item}>
            <a className={`${styles.nav-link} ${styles.nav-bar-link} ${styles.nav_link-s}`} href="/agenda">
              Agenda{" "}
            </a>
            <a className={`${styles.nav-link} ${styles.nav-bar-link} ${styles.nav_link-s}`} href="/challenges">
              Challenges{" "}
            </a>
          </div>
          <div className={styles.nav-item}>
            {/* <a className={`${styles.nav-link} ${styles.nav-bar-link} ${styles.nav_link-s}`} href="#">
              Hackathon{" "}
            </a> */}
            <a className={`${styles.nav-link} ${styles.nav-bar-link} ${styles.nav_link-s}`} href="/hackathon">
              Hackathon{" "}
            </a>
            <a className={`${styles.nav-link} ${styles.nav-bar-link} ${styles.nav_link-s}`} href="/speakers">
              Speakers{" "}
            </a>
          </div>
          <div className={styles.nav-item}>
            <a className={`${styles.nav-link} ${styles.nav-bar-link} ${styles.nav_link-s}`} href="/login">
              Login{" "}
            </a>
            {/* <a className={`${styles.nav-link} ${styles.nav-bar-link} ${styles.nav_link-s}`} href="/team">
              Team{" "}
            </a> */}
            {/* <a className={`${styles.nav-link} ${styles.nav-bar-link} ${styles.lang}`} href="#">
              {" "}
              EN <span className={styles.pt}>PT</span>{" "}
            </a> */}
          </div>
          <div className={styles.join-us}>
            <a target="_blank" href="http://seium21.eventbrite.pt/">
              <img src={NavIcon} alt="join us" />
            </a>
          </div>
        </div>
        <div
          className={styles.menu-icon-wrapper}
          style={{ visibility: "visible", display: "none" }}
        >
          {/* <a style={{ marginLeft: "-39px" }} className={styles.pt-icon} href="#">
            <img src={Pt} alt="Pt" />
          </a> */}
          <button className={styles.menu-icon-trigger} onClick={() => handleClick()}>
            <svg width="1000px" height="1000px">
              <path
                className={styles.path1}
                d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
              ></path>
              <path className={styles.path2} d="M 300 500 L 700 500"></path>
              <path
                className={styles.path3}
                d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
