"use strict";

const convertShapeToPath = require("./convertShapeToPath").fn

//  将SVG转换为数组
function SVGtoArray(svgObj) {
  let SVGArray = [];
  let node, subNode, groupNode, subsubNode;

  for (node in svgObj) {
    if (['rect', 'circle', 'ellipse', 'polygon', 'line', 'path'].includes(node)) {
      for (subNode of svgObj[node]) {
        SVGArray.push(convertShapeToPath(subNode.$, node))
      }
    }
    else if (node === 'g') {
      for (groupNode of svgObj[node]) {
        for (subNode in groupNode) {
          if (['rect', 'circle', 'ellipse', 'polygon', 'line', 'path'].includes(subNode)) {
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

