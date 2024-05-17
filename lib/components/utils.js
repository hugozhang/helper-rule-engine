"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dummyFn = exports.DragIcon = exports.ConfirmFn = exports.Col = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _excluded = ["children"];
var Col = exports.Col = function Col(_ref) {
  var children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", props, children);
};
var dummyFn = exports.dummyFn = function dummyFn() {};
var DragIcon = exports.DragIcon = function DragIcon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "gray",
    width: "18px",
    height: "18px"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }));
};
var ConfirmFn = exports.ConfirmFn = function ConfirmFn(Cmp) {
  return function (props) {
    var useConfirm = props.config.settings.useConfirm;
    var confirmFn = useConfirm ? useConfirm() : null;
    return /*#__PURE__*/_react["default"].createElement(Cmp, (0, _extends2["default"])({}, props, {
      confirmFn: confirmFn
    }));
  };
};