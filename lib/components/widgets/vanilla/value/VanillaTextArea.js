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
    placeholder = props.placeholder,
    maxLength = props.maxLength,
    maxRows = props.maxRows,
    fullWidth = props.fullWidth,
    customProps = props.customProps;
  var onChange = function onChange(e) {
    var val = e.target.value;
    if (val === "") val = undefined; // don't allow empty value
    setValue(val);
  };
  var textValue = value || "";
  return /*#__PURE__*/_react["default"].createElement("textarea", _extends({
    value: textValue,
    placeholder: placeholder,
    disabled: readonly,
    onChange: onChange,
    maxLength: maxLength,
    style: {
      width: fullWidth ? "100%" : undefined
    }
  }, customProps));
};
exports["default"] = _default;