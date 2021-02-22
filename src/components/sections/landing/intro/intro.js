import React from "react";

import NavIcon from "../../../images/nav-icon.svg";
import NavBar from "../../../../components/nav/nav";
import Card from "../../../utils/cardCompo";
import HeaderIcon from "../../../images/Header.svg";
import Media from "../../../utils/media";
import "../../../../assets/css/intro.css";
import "../../../../assets/css/home.css";
import BackgroundAnimation from "../../../../assets/animations/backgroundAnimation";
//#181818

class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    let title;
    const { width } = this.state;

    if (width < 865) {
      title = (
        <h1 className="title">
          The software engineering week is back, let’s just SEI that.
        </h1>
      );
    } else {
      title = (
        <div className="headerChallengeHome">
          <h1 className="title chall-desc-home">
            The software engineering week is back, let’s just{" "}
            <span className="spanChallHome">
              SEI
              <div className="box-home">
                <div id="mascote">
                  <Card
                    img={HeaderIcon}
                    alt="HeaderIcon"
                    style={{ alignItems: "flex-end" }}
                  >
                    Did you see what I did there?
                  </Card>
                </div>
              </div>
            </span>{" "}
            that.
          </h1>
        </div>
      );
    }

    return (
      <div className="intro-bg">
        {this.state.width > 768 && <BackgroundAnimation />}
        <NavBar />
        <div
          className="home"
          style={{
            ...{ flexDirection: "column", paddingBottom: "80px" },
            ...this.props.style,
          }}
        >
          <div
            style={{ zIndex: this.state.width > 768 && 100 }}
            className="landing container"
          >
            <div className="description">
              <p className="x-large-1">23 - 28 February 2021</p>
              {title}
            </div>
            <div className="bottom">
              <div className="infos">
                <div className="contact">
                  <p className="find">Find us on</p>
                  <Media />
                </div>
                <div className="organization">
                  <p className="find">Organization</p>
                  <a target="_blank" href="https://cesium.di.uminho.pt/">
                    <div className="image"></div>
                  </a>
                </div>
              </div>
              {this.state.width <= 768 ? (
                <div className="join-us">
                  <a target="_blank" href="http://seium21.eventbrite.pt/">
                    <img src={NavIcon} alt="join us" />
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div style={{ zIndex: this.state.width > 768 && 100 }} className="container">
            <div className="details">
              <div className="expect">
                <h5>What you can expect:</h5>
                <ul class="grid-list">
                  <li>
                    <a href="/hackathon">Hackathon</a> 💻
                  </li>
                  <li>Talks</li>
                  <li>Workshops</li>
                  <li>
                    <a href="/challenges">Challenges</a> 🕹
                  </li>
                  <li>Contests</li>
                </ul>
              </div>
              <div className="quote">
                <h4>
                  We gather speakers, attract partners and give our imagination
                  wings, all for this to be your favorite week.
                </h4>
                {/* <a href="/team">
                  <Button background="#1d1d1d">MEET THE TEAM</Button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
