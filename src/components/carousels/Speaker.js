import React from "react";

import { Clickable } from "react-clickable";
import Button from "../buttons/button";

import Facebook from "../images/Facebook.svg";
import Twitter from "../images/Twitter.svg";
import GitHub from "../images/GitHub.svg";
import LinkedIn from "../images/Linkedin.svg";
import { withRouter } from "react-router-dom";

function SpeakerBio(props) {
  const listItems = props.bio.map((s, i) => (
    <p key={i} className="medium" style={props.style}>
      {s}
    </p>
  ));

  return <div>{listItems}</div>;
}

class Speaker extends React.Component {
  constructor(props) {
    super(props);

    this.changeStatus = this.changeStatus.bind(this);
    this.state = { status: props.initStatus };
  }

  changeStatus() {
    if (this.state.status === "show") {
      this.setState({ status: "hide" });
    } else {
      this.setState({ status: "show" });
    }
  }

  componentDidMount() {
    if (this.props.location.hash === `#${this.props.speakerID}`)
      this.setState({ status: "show" });
  }

  render() {
    const width = window.innerWidth;

    let ActivityStyle = () => {
      if (width >= 1200) {
        return {
          event: {
            width: "47%",
            borderTop: "1px solid white",
            padding: "10px 13px 10px 10px",
          },
          timing: {},
          name: {
            paddingTop: "6px",
            width: "90%",
          },
        };
      } else if (width >= 768) {
        return {
          event: {
            width: "47%",
            borderTop: "1px solid white",
            padding: "10px 13px 10px 10px",
          },
          timing: {
            fontSize: "14px",
          },
          name: {
            paddingTop: "6px",
            width: "90%",
            fontSize: "14px",
          },
        };
      } else {
        return {
          event: {
            width: "47%",
            borderTop: "1px solid white",
            padding: "10px 13px 10px 10px",
          },
          timing: {
            fontSize: "12px",
          },
          name: {
            paddingTop: "6px",
            width: "90%",
            fontSize: "10px",
            lineHeight: "11px",
          },
        };
      }
    };
    let eventStyle = {
      ...ActivityStyle().event,
      ...{
        width: "100%",
        marginRight: "0",
        position: "relative",
        paddingBottom: "10px",
        backgroundColor: "transparent",
      },
    };
    let footerStyle = () => {
      if (width >= 1200) {
        return {
          labelStyle: {
            width: "55%",
            whiteSpace: "nowrap",
            opacity: "0.5",
          },
          headerStyle: {
            display: "flex",
            flexDirection: "row",
          },
          containerStyle: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "10px",
            minHeight: "23px",
          },
          buttonStyle: {},
          gotoStyle: {
            marginRight: "5px",
            fontSize: "12px",
          },
        };
      } else if (width >= 768) {
        return {
          labelStyle: {
            width: "55%",
            whiteSpace: "nowrap",
            opacity: "0.5",
            fontSize: "10px",
          },
          headerStyle: {
            display: "flex",
            flexDirection: "row",
          },
          containerStyle: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "10px",
            minHeight: "23px",
          },
          buttonStyle: {
            padding: "0px 12px 3px",
          },
          gotoStyle: {
            marginRight: "5px",
            fontSize: "10px",
          },
        };
      } else {
        return {
          labelStyle: {
            width: "55%",
            whiteSpace: "nowrap",
            opacity: "0.5",
            fontSize: "10px",
          },
          headerStyle: {
            display: "flex",
            flexDirection: "row",
          },
          containerStyle: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "10px",
            minHeight: "23px",
          },
          buttonStyle: {
            padding: "0px 12px 3px",
          },
          gotoStyle: {
            marginRight: "5px",
            fontSize: "10px",
          },
        };
      }
    };

    return (
      <>
        <div
          id={this.props.speakerID}
          className="profile"
          style={{ ...eventStyle, ...this.props.style }}
        >
          <img src={this.props.picture} alt="" />
          <div className="left-side">
            <div className="infos">
              <div className="about" onClick={this.changeStatus}>
                <p className="medium-3" style={ActivityStyle().name}>
                  {this.props.name}
                </p>
                <p className="medium">
                  {this.props.job}
                  <br />
                  {this.props.description}
                </p>
              </div>
              <div className="contacts">
                {this.props.twitter ? (
                  <a target="_blank" href={this.props.twitter}>
                    <img src={Twitter} alt="" />
                  </a>
                ) : null}
                {this.props.github ? (
                  <a target="_blank" href={this.props.github}>
                    <img src={GitHub} alt="" />
                  </a>
                ) : null}
                {this.props.facebook ? (
                  <a target="_blank" href={this.props.facebook}>
                    <img src={Facebook} alt="" />
                  </a>
                ) : null}
                {this.props.linkedin ? (
                  <a target="_blank" href={this.props.linkedin}>
                    <img src={LinkedIn} alt="" />
                  </a>
                ) : null}
              </div>
            </div>
            <div style={{ ...footerStyle().headerStyle, ...this.props.style }}>
              <div style={footerStyle().containerStyle}>
                <p style={footerStyle().labelStyle} className="nav-bar-link">
                  {this.props.label}
                </p>
                <Clickable>
                  <p style={footerStyle().gotoStyle} className="x-large">
                    {this.props.goto}
                  </p>
                </Clickable>
                <Button
                  onClick={this.changeStatus}
                  background={"#173149"}
                  style={footerStyle().buttonStyle}
                >
                  {this.state.status === "show" ? "-" : "+"}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {this.state.status === "show" ? (
          <SpeakerBio
            bio={this.props.bio}
            style={{
              ...ActivityStyle().name,
              ...{
                width: "100%",
                fontSize: "14px",
                lineHeight: "1.3",
                padding: "10px",
              },
            }}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default withRouter(Speaker);
