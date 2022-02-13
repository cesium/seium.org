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
    [1511.5917743472655, -1004.2590745605789],
    [1615.0221769967784, -1023.6427358595708],
    [1921.6712064284177, 643.0163675547201],
    [2051.5735135407845, 453.87534926114535],
    [1848.8734353134316, -653.6793148101153],
    [1951.8314207142116, -669.7421723654782],
    [2135.9640447283336, 330.999180529709],
    [2238.533382451991, 181.63136825986527],
    [2140.1761507165493, -353.0001707144358],
    [2243.978946485936, -370.3094500494616],
    [2349.970520118017, 205.7245542354019],
    [1949.8538598186624, 788.3211495436742],
    [1073.4890051604527, 952.5460429308325],
    [-120.52727847616795, 132.51962696908328],
    [-403.68741921325926, -1094.8808881252785],
    [-301.0171405558742, -1118.4031038485966],
    [-226.73339832096667, -796.9367915434569],
    [1419.0988553164239, 333.3903643554854],
    [1746.4222488509852, 272.052127800603],
    [1511.5917743472655, -1004.2590745605789],
  ];
  var path2_backup = [
    [1827.0266480503458, 704.2710602436306],
    [1805.5291448420733, 593.3281563648001],
    [1219.203362622194, 703.1982961577642],
    [-89.05490840656651, -195.28887948772993],
    [-28.40163176229641, 69.21951574033571],
    [1095.7986389254515, 841.3001391746628],
    [1827.0266480503458, 704.2710602436306],
  ];
  var path3_backup = [
    [1786.4916589452218, 489.8325883362648],
    [1765.4607985655582, 375.544688459108],
    [1396.7776761223924, 444.63218406749354],
    [-191.49364352393897, -646.1636933681084],
    [-123.43983908681597, -347.3035581999942],
    [1243.605958429558, 591.5605133534826],
    [1786.4916589452218, 489.8325883362648],
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
    let canvas = p.createCanvas(window.innerWidth, window.innerHeight + 1000);
    canvas.style("position", "absolute");
    canvas.position(0, 0);
    canvas.style("z-index", "1");
    p.noFill();
    p.stroke(76, 169, 255);
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
    p.resizeCanvas(window.innerWidth, window.innerHeight + 1000);
    update_path_horizontally(p);
    update_path_vars();
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default Animation;
