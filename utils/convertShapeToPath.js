"use strict";

const regNumber = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;

function rectHandler(node) {
  let path;
  let x = Number(node.x),
    y = Number(node.y),
    width = Number(node.width),
    height = Number(node.height);
  /*
   * rx 和 ry 的规则是：
   * 1. 如果其中一个设置为 0 则圆角不生效
   * 2. 如果有一个没有设置则取值为另一个
   * 3.rx 的最大值为 width 的一半, ry 的最大值为 height 的一半
   */
  let rx = Number(node.rx) || Number(node.ry) || 0;
  let ry = Number(node.ry) || Number(node.rx) || 0;

  //非数值单位计算，如当宽度像100%则移除
  if (isNaN(x - y + width - height + rx - ry)) return;

  rx = rx > width / 2 ? width / 2 : rx;
  ry = ry > height / 2 ? height / 2 : ry;

  //如果其中一个设置为 0 则圆角不生效
  if (0 == rx || 0 == ry) {
    path =
      'M' + x + ' ' + y +
      'h' + width +
      'v' + height +
      'h' + -width +
      'z';
  } else {
    path =
      'M' + x + ' ' + (y + ry) +
      'a' + rx + ' ' + ry + ' 0 0 1 ' + rx + ' ' + (-ry) +
      'h' + (width - rx - rx) +
      'a' + rx + ' ' + ry + ' 0 0 1 ' + rx + ' ' + ry +
      'v' + (height - ry - ry) +
      'a' + rx + ' ' + ry + ' 0 0 1 ' + (-rx) + ' ' + ry +
      'h' + (rx + rx - width) +
      'a' + rx + ' ' + ry + ' 0 0 1 ' + (-rx) + ' ' + (-ry) +
      'z';
  }

  return {
    d: path,
    fill: formateColor(node.fill),
    stroke: formateColor(node.stroke),
  };
}

function circleHandler(node) {
  let cx = node.cx,
    cy = node.cy,
    r = node.r;
  let path =
    'M' + (cx - r) + ' ' + cy +
    'a' + r + ' ' + r + ' 0 1 0 ' + 2 * r + ' 0' +
    'a' + r + ' ' + r + ' 0 1 0 ' + (-2 * r) + ' 0' +
    'z';

  return {
    d: path,
    fill: formateColor(node.fill),
    stroke: formateColor(node.stroke),
  };
}

function ellipseHandler(node) {
  let cx = node.cx,
    cy = node.cy,
    rx = node.rx,
    ry = node.ry;
  let path =
    'M' + (cx - rx) + ' ' + cy +
    'a' + rx + ' ' + ry + ' 0 1 0 ' + 2 * rx + ' 0' +
    'a' + rx + ' ' + ry + ' 0 1 0 ' + (-2 * rx) + ' 0' +
    'z';

  return {
    d: path,
    fill: formateColor(node.fill),
    stroke: formateColor(node.stroke),
  };
}

function lineHandler(node) {
  let x1 = node.getAttribute("x1"),
    y1 = node.getAttribute("y1"),
    x2 = node.getAttribute("x2"),
    y2 = node.getAttribute("y2");
  if (isNaN(x1 - y1 + x2 - y2)) return;
  let path = 'M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2;
  return {
    d: path,
    fill: formateColor(node.fill),
    stroke: formateColor(node.stroke),
  };
}

module.exports = function (node, type) {
  if (!type)return;
  // console.log(node, type)
  switch (type.toLowerCase()) {
    case "rect" :
      return rectHandler(node)
    case "circle" :
      return circleHandler(node)
    case "ellipse" :
      return ellipseHandler(node)
    case "line" :
      return lineHandler(node)
    case "path":
      return {
        d: node.d,
        fill: (node.fill == undefined && node.fill == '#000000') ? '' : node.fill,
        stroke: formateColor(node.stroke),
      }
    case "polygon" :
    case "polyline" : //ploygon与polyline是一样的,polygon多边形，polyline多边线
      let points = (node.getAttribute("points").match(regNumber) || []).map(Number);
      if (points.length < 4) {
        return;
      }
      let path = 'M' + points.slice(0, 2).join(' ') + 'L' + points.slice(2).join(' ') + ('polygon' === type ? 'z' : '');
      return {
        d: path,
        fill: formateColor(node.fill),
        stroke: formateColor(node.stroke),
      }
  }

};

function formateColor(prop) {
  if (!prop) {
    return 'transparent'
  }
  else if (prop === '#000000') {
    return ''
  }
  else {
    return prop
  }
}
