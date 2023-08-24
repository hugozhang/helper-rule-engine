"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = function _default(props) {
  var value = props.value,
    setValue = props.setValue,
    config = props.config,
    readonly = props.readonly,
    min = props.min,
    max = props.max,
    step = props.step,
    placeholder = props.placeholder,
    _props$customProps = props.customProps,
    customProps = _props$customProps === void 0 ? {} : _props$customProps;
  var customInputProps = customProps.input || {};
  var customSliderProps = customProps.slider || customProps;
  var onChange = function onChange(e) {
    var val = e.target.value;
    if (val === "" || val === null) val = undefined;else val = Number(val);
    setValue(val);
  };
  var numberValue = value == undefined ? "" : value;
  return [/*#__PURE__*/_react["default"].createElement("input", _extends({
    key: "number",
    type: "number",
    value: numberValue,
    placeholder: placeholder,
    disabled: readonly,
    min: min,
    max: max,
    step: step,
    onChange: onChange
  }, customInputProps)), /*#__PURE__*/_react["default"].createElement("input", _extends({
    key: "range",
    type: "range",
    value: numberValue,
    disabled: readonly,
    min: min,
    max: max,
    step: step,
    onChange: onChange
  }, customSliderProps))];
};
exports["default"] = _default;