import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Button from "./Button";
import Achievement from "./Achievement";

function getrotateDegree(min, max) {
  return Math.random() * (max - min) + min;
}

const SpinningWheel = () => {
  const [rotate, setRotate] = useState(getrotateDegree(100, 1300));

  const Wheel = styled.div`
    animation: spin 5s cubic-bezier(0.45, -0.37, 0, 1);
    animation-fill-mode: forwards;
    @keyframes spin {
      100% {
        transform: rotate(${rotate + "deg"});
      }
    }
  `;

  return (
    <div className="spinningWheel">
      <Header style={{ width: "100%" }} title="Achievements">
        <div
          style={{ display: "flex", whiteSpace: "nowrap", paddingTop: "7%" }}
        >
          <Achievement text="💰170 Tokens " />
          <Achievement text="🥇68 Badges " />
        </div>
      </Header>
      <Wheel className="wheel"></Wheel>
      <div className="union"></div>
      <Button
        style={{ marginTop: "20px" }}
        width="208px"
        inner="15 tokens 💰"
        onClick={() => setRotate((curr) => getrotateDegree(100, 1300))}
      >
        SPIN THE WHEEL
      </Button>
    </div>
  );
};

export default SpinningWheel;
