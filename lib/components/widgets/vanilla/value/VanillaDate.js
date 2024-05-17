"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _default = exports["default"] = function _default(props) {
  var value = props.value,
    setValue = props.setValue,
    config = props.config,
    valueFormat = props.valueFormat,
    readonly = props.readonly,
    customProps = props.customProps;
  var onChange = function onChange(e) {
    var value = e.target.value;
    if (value == "") value = undefined;
    setValue(value);
  };
  return /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    type: "date",
    value: value || "",
    disabled: readonly,
    onChange: onChange
  }, customProps));
};