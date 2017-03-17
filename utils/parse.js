"use strict";
//  将SVG转换为数组
function SVGtoArray(svgObj) {
  const convertShapeToPath = require("./convertShapeToPath");
  let SVGArray = [];
  let node, subNode, groupNode, subsubNode;

  for (node in svgObj) {
    if (node ==='rect' || node === 'circle'|| node ==='ellipse'|| node === 'polygon'|| node ==='line'|| node === 'path') {
      for (subNode of svgObj[node]) {
        SVGArray.push(convertShapeToPath(subNode.$, node))
      }
    }
    else if (node === 'g') {
      for (groupNode of svgObj[node]) {
        for (subNode in groupNode) {
          if (node ==='rect' || node === 'circle'|| node ==='ellipse'|| node === 'polygon'|| node ==='line'|| node === 'path') {
            for (subsubNode of groupNode[subNode]) {
              SVGArray.push(convertShapeToPath(subsubNode.$, subNode))
            }
          }
        }
      }
    }
  }
  return SVGArray
}


module.exports = {
  SVGtoArray
};

