"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = function _default(props) {
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
  return /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: "date",
    value: value || "",
    disabled: readonly,
    onChange: onChange
  }, customProps));
};
exports["default"] = _default;