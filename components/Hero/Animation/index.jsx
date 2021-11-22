import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

let basePos1 = [];
let basePos2 = [];
let basePos3 = [];
let currPos = [];

const Animation = () => {
  const setup = (p) => {
    let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "10");

    p.noFill();
    p.stroke(76, 169, 255);

    for (let i = 0; i < 10; i++) {
      basePos1.push({ x: 0, y: (p.height / 20) * i });
      basePos2.push({ x: p.width, y: (p.height / 10) * i });
    }

    for (let i = 0; i < basePos1.length; i++) {
      basePos3.push({
        x: (basePos1[i].x + basePos2[i].x) * 0.5,
        y: (basePos1[i].y + basePos2[i].y) * 0.5 + p.height * 0.1,
      });
    }

    for (let i = 0; i < basePos3.length; i++) {
      currPos.push({ x: basePos3[i].x, y: basePos3[i].y });
    }
  };

  const draw = (p) => {
    p.clear();

    for (let i = 0; i < currPos.length; i++) {
      if (
        p.mouseY > basePos3[i].y - p.height * 0.3 &&
        p.mouseY < basePos3[i].y + p.height * 0.3
      ) {
        currPos[i].x += (p.mouseX - currPos[i].x) * 0.1;
        currPos[i].y += (p.mouseY - currPos[i].y) * 0.1;
      } else {
        currPos[i].x += (basePos3[i].x - currPos[i].x) * 0.1;
        currPos[i].y += (basePos3[i].y - currPos[i].y) * 0.1;
      }
    }

    for (let i = 0; i < basePos1.length; i++) {
      p.beginShape();
      p.vertex(basePos1[i].x, basePos1[i].y);
      p.vertex(currPos[i].x, currPos[i].y);
      p.vertex(basePos2[i].x, basePos2[i].y);
      p.endShape();
    }
  };

  const windowResized = (p) => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);

    basePos1 = [];
    basePos2 = [];
    basePos3 = [];

    currPos = [];

    for (let i = 0; i < 10; i++) {
      basePos1.push({ x: 0, y: (p.height / 20) * i });
      basePos2.push({ x: p.width, y: (p.height / 10) * i });
    }

    for (let i = 0; i < basePos1.length; i++) {
      basePos3.push({
        x: (basePos1[i].x + basePos2[i].x) * 0.5,
        y: (basePos1[i].y + basePos2[i].y) * 0.5 + p.height * 0.1,
      });
    }

    for (let i = 0; i < basePos3.length; i++) {
      currPos.push({ x: basePos3[i].x, y: basePos3[i].y });
    }
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default Animation;