import React from "react";
export default (function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 48 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "black" : _ref$color;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21 40C21 40.5523 21.4477 41 22 41H26C26.5523 41 27 40.5523 27 40V27H40C40.5523 27 41 26.5523 41 26V22C41 21.4477 40.5523 21 40 21H27V8C27 7.44772 26.5523 7 26 7H22C21.4477 7 21 7.44772 21 8V21H8C7.44772 21 7 21.4477 7 22V26C7 26.5523 7.44772 27 8 27H21V40Z",
    fill: color
  }));
});