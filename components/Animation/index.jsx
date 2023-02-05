import React, { useState, useEffect } from "react";
import Sketch from "react-p5";
import PointSetChooser from "./utils";

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

let touch = isTouchDevice();

const Animation = (props) => {
  var [path1_backup, path2_backup, path3_backup] = PointSetChooser(props.type);

  function getHighestPoint(list) {
    let highest = list[0];
    list.forEach((element) => {
      if (element[1] > highest[1]) {
        highest = element;
      }
    });
    return highest;
  }

  //concatenate the three paths into one
  let highestPoint = getHighestPoint(
    path1_backup.concat(path2_backup).concat(path3_backup)
  );

  let height_cost = 100;
  path1_backup.forEach((x) => {
    x[1] -= height_cost;
  });
  path2_backup.forEach((x) => {
    x[1] -= height_cost;
  });
  path3_backup.forEach((x) => {
    x[1] -= height_cost;
  });

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
    let canvas = p.createCanvas(window.innerWidth, highestPoint[1] + 100);
    canvas.style("position", "absolute");
    canvas.position(0, 0);
    canvas.style("z-index", "1");
    p.noFill();
    p.stroke(51, 11, 255);
    update_path_horizontally(p);
    update_path_vars();
  };

  function update_vars(p, mouseX, mouseY, path, path_index, path_var) {
    if (path_var == undefined) {
      update_path_horizontally(p);
      update_path_vars();
    } else {
      if (
        mouseY > path_var[1] - p.height * 0.1 &&
        mouseY < path_var[1] + p.height * 0.1 &&
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
  }

  function update_vars_nomouse(p, path, path_index, path_var) {
    if (path_var == undefined) {
      update_path_horizontally(p);
      update_path_vars();
    } else {
      path[path_index][0] += (path_var[0] - path[path_index][0]) * 0.1;
      path[path_index][1] += (path_var[1] - path[path_index][1]) * 0.1;
    }
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
        update_vars_nomouse(p, path1, path1_index_1, path1_var_1);
        update_vars_nomouse(p, path1, path1_index_2, path1_var_2);
        update_vars_nomouse(p, path2, path2_index_1, path2_var_1);
        update_vars_nomouse(p, path2, path2_index_2, path2_var_2);
        update_vars_nomouse(p, path3, path3_index_1, path3_var_1);
        update_vars_nomouse(p, path3, path3_index_2, path3_var_2);
      }
    }

    drawPaths(p, path1);
    drawPaths(p, path2);
    drawPaths(p, path3);
  };

  const windowResized = (p) => {
    p.resizeCanvas(window.innerWidth, highestPoint[1] + 100);

    update_path_horizontally(p);
    update_path_vars();
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default Animation;
