import Pt from "../assets/img/icons/Pt.svg";
import SideBar from "../components/sideBar";
import $ from "jquery";

function NavBar(params) {
  const handleClick = () => {
    document.querySelector(".menu-icon-wrapper").classList.toggle("open");
    document.querySelector(".nav-content").classList.toggle("is-active");
    document.querySelector(".pt-icon").classList.toggle("is-show");

    $(window).on("scroll", () => {
      var navmenu = $(".navbar");
      if ($(window).scrollTop() < 30) navmenu.removeClass("on-scroll");
      else navmenu.addClass("on-scroll");
    });
  };

  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-nav">
          <div className="nav-content">
            <div className="nav-item">
              <a className="nav-link nav-bar-link nav_link-s" href="/Agenda">
                Agenda{" "}
              </a>
              <a
                className="nav-link nav-bar-link nav_link-s"
                href="/Challenges"
              >
                Challenges{" "}
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link nav-bar-link nav_link-s" href="/Hackathon">
                Hackathon{" "}
              </a>
              <a className="nav-link nav-bar-link nav_link-s" href="/Speakers">
                Speakers{" "}
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
    </>
  );
}
export default NavBar;
