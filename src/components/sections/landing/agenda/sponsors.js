import React from "react";
import "../../../../assets/css/sponsors.css";
import Container from "../../../container/container";
import Button from "../../../buttons/button";
import Brands from "./brands";

class Sponsors extends React.Component {
  render() {
    return (
      <Container
        style={{
          ...{ backgroundColor: "#142A3E", padding: "55px" },
          ...this.props.style,
        }}
      >
        <Brands />

        <div className="register">
          <p className="x-large">Hackathon 2020</p>
          <h1>
            Create products, train skills and learn new technologies.
            <span className="span">
              <a target="_blank" href="https://forms.gle/wLdyCmaGaqKko1Jd9">
                <Button background="#173149" className="button">
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
      </Container>
    );
  }
}

export default Sponsors;
