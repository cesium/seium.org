import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

let touch = isTouchDevice();

const Animation = () => {
  var path1_backup = [
    [1131.8620152154367, -1221.5767428556303],
    [1222.1626943370204, -1286.7628272354673],
    [2267.1056694702397, 170.89387949308912],
    [2306.2291826284268, -68.77480197125513],
    [1612.8605130372384, -1037.9263744846862],
    [1704.2058218456398, -1099.7196981001778],
    [2331.6449733185846, -224.47601051575876],
    [2362.525493696187, -413.7388417657596],
    [2027.3376357677619, -881.3309124978762],
    [2118.930008103658, -944.6985664189737],
    [2480.0918960913014, -440.9035071543734],
    [2359.593716497068, 297.32440972468453],
    [1594.4711679450165, 849.6333534017821],
    [81.49355093991245, 602.6775157600621],
    [-742.9441779041043, -444.9604916574872],
    [-655.2369693587771, -513.7667468387103],
    [-439.1933354233256, -239.4366086428082],
    [1646.2964483174871, 100.96985169387051],
    [1932.0706852690698, -105.31827253125479],
    [1131.8620152154367, -1221.5767428556303],
  ];
  var path2_backup = [
    [2204.0928542193515, 272.2125361061708],
    [2133.496117350925, 175.67124373591102],
    [1621.59470012397, 545.18644896871],
    [-36.143472935264214, 274.6005994603415],
    [141.17235398474742, 500.53579304518286],
    [1565.6848880584935, 733.0540738257099],
    [2204.0928542193515, 272.2125361061708],
  ];
  var path3_backup = [
    [2068.6121335029047, 85.15211354008466],
    [1996.9543320695052, -14.802501569031136],
    [1675.0698319548706, 217.55042521080526],
    [-337.48277140352627, -110.95122802124123],
    [-137.59520248461058, 144.54101010715203],
    [1594.6358577711624, 427.28844191229496],
    [2068.6121335029047, 85.15211354008466],
  ];

  var path1 = [];
  var path2 = [];
  var path3 = [];

  var path1_index_1 = 12;
  var path1_var_1 = undefined;
  var path1_index_2 = 17;
  var path1_var_2 = undefined;

  var path2_index_1 = 2;
  var path2_var_1 = undefined;
  var path2_index_2 = 5;
  var path2_var_2 = undefined;

  var path3_index_1 = 2;
  var path3_var_1 = undefined;
  var path3_index_2 = 5;
  var path3_var_2 = undefined;

  function update_path_horizontally(p) {
    let difference = p.width - 2144;

    path1 = [];
    path1_backup.forEach((element) => {
      path1.push([element[0] + difference, element[1]]);
    });

    path2 = [];
    path2_backup.forEach((element) => {
      path2.push([element[0] + difference, element[1]]);
    });

    path3 = [];
    path3_backup.forEach((element) => {
      path3.push([element[0] + difference, element[1]]);
    });
  }

  function update_path_vars() {
    path1_var_1 = [path1[path1_index_1][0], path1[path1_index_1][1]];
    path1_var_2 = [path1[path1_index_2][0], path1[path1_index_2][1]];
    path2_var_1 = [path2[path2_index_1][0], path2[path2_index_1][1]];
    path2_var_2 = [path2[path2_index_2][0], path2[path2_index_2][1]];
    path3_var_1 = [path3[path3_index_1][0], path3[path3_index_1][1]];
    path3_var_2 = [path3[path3_index_2][0], path3[path3_index_2][1]];
  }

  const setup = (p) => {
    let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    canvas.style("position", "absolute");
    canvas.position(0, 0);
    canvas.style("z-index", "1");
    p.noFill();
    p.stroke(76, 169, 255);
    update_path_horizontally(p);
    update_path_vars();
  };

  function update_vars(p, mouseX, mouseY, path, path_index, path_var) {
    if (
      mouseY > path_var[1] - p.height * 0.3 &&
      mouseY < path_var[1] + p.height * 0.3 &&
      mouseX > path_var[0] - p.width * 0.3 &&
      mouseX < path_var[0] + p.width * 0.3
    ) {
      path[path_index][0] += (mouseX - path[path_index][0]) * 0.1;
      path[path_index][1] += (mouseY - path[path_index][1]) * 0.1;
    } else {
      path[path_index][0] += (path_var[0] - path[path_index][0]) * 0.1;
      path[path_index][1] += (path_var[1] - path[path_index][1]) * 0.1;
    }
  }

  function update_vars_nomouse(path, path_index, path_var) {
    path[path_index][0] += (path_var[0] - path[path_index][0]) * 0.1;
    path[path_index][1] += (path_var[1] - path[path_index][1]) * 0.1;
  }

  function drawPaths(p, path) {
    p.beginShape();

    for (var i = 0; i < path.length; i++) {
      p.vertex(path[i][0], path[i][1]);
    }

    p.endShape();
  }

  const draw = (p) => {
    p.clear();

    if (!touch) {
      let mouseX = p.mouseX;
      let mouseY = p.mouseY;

      if (mouseX && mouseY) {
        update_vars(p, mouseX, mouseY, path1, path1_index_1, path1_var_1);
        update_vars(p, mouseX, mouseY, path1, path1_index_2, path1_var_2);
        update_vars(p, mouseX, mouseY, path2, path2_index_1, path2_var_1);
        update_vars(p, mouseX, mouseY, path2, path2_index_2, path2_var_2);
        update_vars(p, mouseX, mouseY, path3, path3_index_1, path3_var_1);
        update_vars(p, mouseX, mouseY, path3, path3_index_2, path3_var_2);
      } else {
        update_vars_nomouse(path1, path1_index_1, path1_var_1);
        update_vars_nomouse(path1, path1_index_2, path1_var_2);
        update_vars_nomouse(path2, path2_index_1, path2_var_1);
        update_vars_nomouse(path2, path2_index_2, path2_var_2);
        update_vars_nomouse(path3, path3_index_1, path3_var_1);
        update_vars_nomouse(path3, path3_index_2, path3_var_2);
      }
    }

    drawPaths(p, path1);
    drawPaths(p, path2);
    drawPaths(p, path3);
  };

  const windowResized = (p) => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
    update_path_horizontally(p);
    update_path_vars();
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default Animation;
