import React, { useState, useEffect } from "react";
import Sketch from "react-p5";


function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

let touch = isTouchDevice();

const Animation = () => {

  var path1_backup = [[2599.298864957342, -844.3636519746029], [2690.3746029830672, -820.1607875000084], [2295.7699583085746, 645.2217897637374], [2473.6820111172765, 542.4129187451488], [2736.783243232903, -430.9702762031668], [2826.1970036109656, -404.265288728904], [2589.2624421742867, 475.6223711077539], [2729.749072653589, 394.4260643912444], [2856.338389377531, -75.63615183163802], [2946.915493325826, -49.6129957441799], [2810.5370612051456, 456.8580909151324], [2262.537459012803, 773.5368049663193], [1490.8584569063153, 568.4558973688372], [841.8330237966927, -554.6530872407102], [1086.0964735288117, -1655.924777005776], [1178.1531464725228, -1635.3601558008038], [1114.276961033294, -1346.8810830947004], [2008.8927285572258, 201.21463968544094], [2297.115833490085, 277.812597454762], [2599.298864957342, -844.3636519746029]]
  var path2_backup = [[2195.6552485554785, 658.2504280081873], [2221.0454315605134, 560.2874206241852], [1704.7602894770473, 423.07674232553313], [993.6375515179134, -807.4912463339411], [940.7001543158904, -570.306055731196], [1551.7751059659217, 487.1349526935969], [2195.6552485554785, 658.2504280081873]]
  var path3_backup = [[2245.553232676324, 469.2924542063363], [2272.6100515618296, 368.8055430764441], [1947.9683215700952, 282.5278326086884], [1084.6408219734526, -1211.4255791076862], [1024.4432621169926, -943.6208083455064], [1767.5197601043553, 342.24584342931576], [2245.553232676324, 469.2924542063363]]



  var path1 = []
  var path2 = []
  var path3 = []


  var path1_index_1 = 12
  var path1_var_1 = undefined
  var path1_index_2 = 17
  var path1_var_2 = undefined


  
  var path2_index_1 = 2
  var path2_var_1 = undefined
  var path2_index_2 = 5
  var path2_var_2 = undefined


  

  var path3_index_1 = 2
  var path3_var_1 = undefined
  var path3_index_2 = 5
  var path3_var_2 = undefined




  function update_path_horizontally(p) {
    let difference = p.width - 2144

    path1 = []
    path1_backup.forEach((element) => {
      path1.push([element[0]+difference,element[1]])
    });

    path2 = []
    path2_backup.forEach((element) => {
      path2.push([element[0]+difference,element[1]])
    });

    path3 = []
    path3_backup.forEach((element) => {
      path3.push([element[0]+difference,element[1]])
    });

  }

  function update_path_vars() {
    path1_var_1 = [path1[path1_index_1][0],path1[path1_index_1][1]]
    path1_var_2 = [path1[path1_index_2][0],path1[path1_index_2][1]]
    path2_var_1 = [path2[path2_index_1][0],path2[path2_index_1][1]]
    path2_var_2 = [path2[path2_index_2][0],path2[path2_index_2][1]]
    path3_var_1 = [path3[path3_index_1][0],path3[path3_index_1][1]]
    path3_var_2 = [path3[path3_index_2][0],path3[path3_index_2][1]]
  }




  const setup = (p) => {
    let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    canvas.style("position", "absolute");
    canvas.position(0, 0);
    canvas.style("z-index", "1");
    p.noFill();
    p.stroke(76, 169, 255);
    update_path_horizontally(p)
    update_path_vars()

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

  function drawPaths(p,path) {
    p.beginShape();

    for(var i = 0; i < path.length ; i++){
      p.vertex(path[i][0],path[i][1]);
    }

    p.endShape();
  }


  const draw = (p) => {
    p.clear();

    if (!touch) {
      let mouseX = p.mouseX
      let mouseY = p.mouseY
  
      if (mouseX && mouseY) {
        update_vars(p,mouseX, mouseY, path1, path1_index_1, path1_var_1);
        update_vars(p,mouseX, mouseY, path1, path1_index_2, path1_var_2);
        update_vars(p,mouseX, mouseY, path2, path2_index_1, path2_var_1);
        update_vars(p,mouseX, mouseY, path2, path2_index_2, path2_var_2);
        update_vars(p,mouseX, mouseY, path3, path3_index_1, path3_var_1);
        update_vars(p,mouseX, mouseY, path3, path3_index_2, path3_var_2);
      } else { 
        update_vars_nomouse(path1, path1_index_1, path1_var_1);
        update_vars_nomouse(path1, path1_index_2, path1_var_2);
        update_vars_nomouse(path2, path2_index_1, path2_var_1);
        update_vars_nomouse(path2, path2_index_2, path2_var_2);
        update_vars_nomouse(path3, path3_index_1, path3_var_1);
        update_vars_nomouse(path3, path3_index_2, path3_var_2);
  
      }
    }
    
    drawPaths(p,path1)
    drawPaths(p,path2)
    drawPaths(p,path3)

  };

  const windowResized = (p) => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);

    update_path_horizontally(p)
    update_path_vars()


  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default Animation;