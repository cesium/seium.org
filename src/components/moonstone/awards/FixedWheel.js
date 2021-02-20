import { Component } from "react";
import styled from "styled-components";
import Button from "../Button";

const Wheel = styled.div`
  animation: spin 5s cubic-bezier(0.45, -0.37, 0, 1);
  animation-fill-mode: forwards;
`;

class FixedWheel extends Component {
  render() {
    return (
      <div className="awardItem fixedWheel">
        <Wheel className="wheel"></Wheel>
        <div className="union"></div>
        <Button
          onClick={() => this.props.goToWheel()}
          style={{ marginTop: "20px" }}
          width="208px"
          inner="15 tokens 💰"
        >
          SPIN THE WHEEL
        </Button>
      </div>
    );
  }
}

export default FixedWheel;
