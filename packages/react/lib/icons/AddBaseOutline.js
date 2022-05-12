"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 48 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#131212" : _ref$color;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M22 40C22 40.5523 22.4477 41 23 41H25C25.5523 41 26 40.5523 26 40V26H40C40.5523 26 41 25.5523 41 25V23C41 22.4477 40.5523 22 40 22H26V8C26 7.44772 25.5523 7 25 7H23C22.4477 7 22 7.44772 22 8V22H8C7.44772 22 7 22.4477 7 23V25C7 25.5523 7.44772 26 8 26H22V40Z",
    fill: color
  }));
};

exports.default = _default;