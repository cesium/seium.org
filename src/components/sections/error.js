import React from "react";

import Button from "../buttons/button";
import NavBar from "../nav/nav";
import FooterIcon from "../images/Footer.svg";
import "../../assets/css/intro.css";
import "../../assets/css/home.css";
import "../../assets/css/error.css";
import { withRouter } from "react-router-dom";

class Error extends React.Component {
  redirect() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="intro-bg" style={{ height: "100vh", overflow: "hidden" }}>
        <NavBar />
        <div
          className="home"
          style={{
            ...{ flexDirection: "column", paddingBottom: "80px" },
            ...this.props.style,
          }}
        >
          <div className="landing container">
            <div className="description" style={{ display: "inline-block" }}>
              <h1 className="error">404</h1>
              <h1 className="title">You're in the wrong line of code, pal.</h1>
              <Button background="#1d1d1d" onClick={this.redirect.bind(this)}>
                BACK TO HOMEPAGE
              </Button>
            </div>
            <img className="mascote" src={FooterIcon} alt="mascote" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Error);
