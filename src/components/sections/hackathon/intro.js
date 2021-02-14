import React from "react";

import Button from "../../buttons/button";
import NavBar from "../../../components/nav/nav";
import Card from "../../utils/cardCompo";
import HeaderIcon from "../../images/Header.svg";
import Media from "../../utils/media";
import "../../../assets/css/intro.css";
import "../../../assets/css/hackathon.css";
import TeamImg from "../../../components/images/Team.svg";
import windowDimensions from "../../../components/utils/windowDimensions";
import Mentors from "./mentors";

class Intro extends React.Component {
  render() {
    return (
      <div className="hackathon-bg">
        <NavBar />
        <div
          className="hackathon"
          style={{
            ...{ flexDirection: "column", paddingBottom: "80px" },
            ...this.props.style,
          }}
        >
          <div className="landing container">
            <div className="description">
              <p className="x-large-1">Hackathon</p>
              <h1 className="title">
                Create products, train skills and learn new technologies.
              </h1>
              <div className="registration">
                <h1>
                  <div class="box-hackathon">
                    <div id="mascote">
                      <Card img={TeamImg} big={false}>
                        Click just in case of true faith at winning.
                      </Card>
                    </div>
                  </div>
                  <span className="span">
                    <a
                      target="_blank"
                      href="https://forms.gle/wLdyCmaGaqKko1Jd9"
                    >
                      <Button
                        style={{ color: "black", background: "#ffffff" }}
                        className="button"
                      >
                        Register your team
                      </Button>
                    </a>
                    <p
                      style={{ fontSize: "14px", opacity: "0.6" }}
                      className="people"
                    >
                      2-5 people
                    </p>
                  </span>
                </h1>
              </div>
            </div>
            <div className="infos">
              <div className="contact">
                <p className="nav-bar-link"></p>
              </div>
              <div className="organization">
                <p className="nav-bar-link">Powered by</p>
                <a target="_blank" href="https://subvisual.com/">
                  <div className="image"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="details">
              <div className="expect">
                <h4>How does this thing really work?</h4>
                {/*<Button
                  background="#173149"
                  style={{ "margin-top": "25px" }}
                  className="button"
                >
                  Read the rules
                </Button>*/}
                <p className="medium-5">Timeline:</p>
                <ul>
                  <li>Opening & introduction</li>
                  <li>Development</li>
                  <li>Review</li>
                  <li>Awards delivery</li>
                </ul>
              </div>
              <div className="quote">
                <h5>Hackathon 2021</h5>
                <p className="resume">
                  It will start at the end of the 26th of February and will run
                  until the end of the afternoon of the 28th. There are more
                  than 40 hours to have fun programming! And, if you need to,
                  you can always count on the help of our mentors. Each team may
                  have between 3 and 5 elements. If you are unable to complete a
                  team, you can always register individually or in pairs, and we
                  will try to group you with other participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
