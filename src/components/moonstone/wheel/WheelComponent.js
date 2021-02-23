/*
Base work from https://github.com/shekharramola/react-wheel-of-prizes
*/

import React, { useEffect, useState, useRef } from "react";

import Button from "../Button";
import API from "../../../utils/api";
import { NotificationManager } from "react-notifications";

import Confetti from "react-dom-confetti";

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: "200",
  dragFriction: 0.12,
  duration: 5000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const parseError = (error) => {
  let r = "";

  for (const [key, value] of Object.entries(error)) {
    r += `${key}: ${value}`;
  }

  return r;
};

const WheelComponent = ({
  segments,
  segColors,
  onFinished,
  primaryColor,
  contrastColor,
  buttonText,
  isOnlyOnce,
  disabled,
  setRolling,
}) => {
  let reward;
  let currentSegment = "";
  let isStarted = false;
  const [isFinished, setFinished] = useState(true);
  const [win, setWin] = useState(false);
  let winningSegment = "";
  let timerHandle = 0;
  const timerDelay = segments.length;
  let angleCurrent = 0;
  let angleDelta = 0;
  const size = 290;
  let canvasContext = null;
  let maxSpeed = Math.PI / `${segments.length}`;
  let spinStart = 0;
  let frames = 0;
  const centerX = 300;
  const centerY = 300;
  let progress = 0;
  let speed = 0.2;
  let tokens = "";
  let entries = "";

  useEffect(() => {
    wheelInit();
    setTimeout(() => {
      window.scrollTo(0, 1);
    }, 0);
  }, []);

  const wheelInit = () => {
    initCanvas();
    wheelDraw();
  };

  const initCanvas = () => {
    let canvas = document.getElementById("canvas");
    if (navigator.appVersion.indexOf("MSIE") !== -1) {
      canvas = document.createElement("canvas");
      canvas.setAttribute("width", 1000);
      canvas.setAttribute("height", 600);
      canvas.setAttribute("id", "canvas");
      document.getElementById("wheel").appendChild(canvas);
    }
    canvasContext = canvas.getContext("2d");
  };

  const spin = () => {
    setRolling(true);
    isStarted = true;
    setFinished(false);
    if (timerHandle === 0) {
      wheelInit();
      spinStart = new Date().getTime();
      // maxSpeed = Math.PI / ((segments.length*2) + Math.random())
      maxSpeed = Math.PI / segments.length;
      frames = 0;

      timerHandle = setInterval(onTimerTick, timerDelay);

      play();
    }
  };

  const play = async () => {
    API.post(`/api/v1/roulette`)
      .then((response) => {
        winningSegment = response.data.prize.name;

        if (response.data.tokens) {
          tokens = response.data.tokens;
        }

        if (response.data.entries) {
          entries = response.data.entries;
        }
      })
      .catch((error) => {
        winningSegment = "Nada";

        let errorMessage = null;
        if (error.response) {
          errorMessage = parseError(error.response.data.errors);
        } else if (error.request) {
          errorMessage = "The server did not respond. Bad server!";
        } else {
          errorMessage =
            "Something happened and we don't know what. Reload and try again?";
        }

        NotificationManager.error(errorMessage, "Error", 3000);
      });
  };

  const onTimerTick = () => {
    frames++;
    draw();
    let finished = false;
    let top = 0.9;

    if (winningSegment) {
      if (speed < top) {
        speed += 0.003;
      }

      if (
        currentSegment === winningSegment &&
        frames > segments.length &&
        speed >= top
      ) {
        //progress = duration / upTime;
        angleDelta = maxSpeed * Math.sin((speed * Math.PI) / 2 + Math.PI / 2);
        progress += 0.05;
      } else {
        //progress = duration / downTime;
        angleDelta = maxSpeed * Math.sin((speed * Math.PI) / 2 + Math.PI / 2);
      }
    } else {
      //progress = duration / downTime;
      angleDelta = maxSpeed * Math.sin((speed * Math.PI) / 2 + Math.PI / 2);
    }

    if (progress >= 1) finished = true;

    angleCurrent += angleDelta;

    while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2;

    if (finished) {
      if (tokens !== "") {
        NotificationManager.success(`You won ${tokens} tokens`, "Yay!", 3000);
      }

      if (entries !== "") {
        NotificationManager.success(`You won ${entries} entries`, "Yay!", 3000);
      }

      if (winningSegment !== "Nada") {
        setWin(true);
        setWin(false);
      } else {
        setWin(false);
      }

      setFinished(true);
      onFinished(currentSegment);
      clearInterval(timerHandle);
      timerHandle = 0;
      angleDelta = 0;
      progress = 0;
      speed = 0;
      winningSegment = "";
      tokens = "";
      entries = "";
      setRolling(false);
    }
  };

  const wheelDraw = () => {
    clear();
    drawWheel();
    drawNeedle();
  };

  const draw = () => {
    clear();
    drawWheel();
    drawNeedle();
  };

  const drawSegment = (key, lastAngle, angle) => {
    const ctx = canvasContext;
    const value = segments[key];
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = segColors[key];
    ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = contrastColor || "white";
    ctx.font = "bold 1em proxima-nova";
    ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);
    ctx.restore();
  };

  const drawWheel = () => {
    const ctx = canvasContext;
    let lastAngle = angleCurrent;
    const len = segments.length;
    const PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor || "black";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "1em proxima-nova";
    for (let i = 1; i <= len; i++) {
      const angle = PI2 * (i / len) + angleCurrent;
      drawSegment(i - 1, lastAngle, angle);
      lastAngle = angle;
    }

    // Draw a center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, PI2, false);
    ctx.closePath();
    ctx.fillStyle = primaryColor || "black";
    ctx.lineWidth = 10;
    ctx.strokeStyle = contrastColor || "white";
    ctx.fill();
    ctx.font = "bold 1em proxima-nova";
    ctx.fillStyle = contrastColor || "white";
    ctx.textAlign = "center";
    ctx.fillText(buttonText || "Spin", centerX, centerY + 3);
    ctx.stroke();

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, PI2, false);
    ctx.closePath();

    ctx.lineWidth = 10;
    ctx.strokeStyle = primaryColor || "black";
    ctx.stroke();
  };

  const drawNeedle = () => {
    const ctx = canvasContext;
    ctx.lineWidth = 1;
    ctx.strokeStyle = contrastColor || "white";
    ctx.fileStyle = contrastColor || "white";
    ctx.beginPath();
    ctx.moveTo(centerX + 20, centerY - 50);
    ctx.lineTo(centerX - 20, centerY - 50);
    ctx.lineTo(centerX, centerY - 70);
    ctx.closePath();
    ctx.fill();
    const change = angleCurrent + Math.PI / 2;
    let i =
      segments.length -
      Math.floor((change / (Math.PI * 2)) * segments.length) -
      1;
    if (i < 0) i = i + segments.length;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = primaryColor || "black";
    ctx.font = "bold 1.5em proxima-nova";
    currentSegment = segments[i];
    isStarted &&
      ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);
  };
  const clear = () => {
    const ctx = canvasContext;
    ctx.clearRect(0, 0, 1000, 800);
  };
  return (
    <>
      <Confetti active={win} config={config} />
      <div id="wheel" disabled={disabled}>
        <canvas
          id="canvas"
          width="1000"
          height="800"
          style={{
            pointerEvents: isFinished && !isOnlyOnce ? "none" : "auto",
          }}
        />
      </div>
      <Button
        disabled={disabled || !isFinished}
        style={{ marginTop: "20px", height: "60px" }}
        width="208px"
        inner="30 tokens 💰"
        onClick={spin}
      >
        SPIN THE WHEEL
      </Button>
    </>
  );
};
export default WheelComponent;
