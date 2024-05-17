"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));
var _default = exports["default"] = function _default(props) {
  var value = props.value,
    setValue = props.setValue,
    config = props.config,
    readonly = props.readonly,
    placeholder = props.placeholder,
    customProps = props.customProps,
    maxLength = props.maxLength,
    maxRows = props.maxRows,
    fullWidth = props.fullWidth;
  var defaultMaxRows = config.settings.defaultMaxRows;
  var onChange = function onChange(e) {
    var val = e.target.value;
    if (val === "") val = undefined; // don't allow empty value
    setValue(val);
  };
  var textValue = value || "";
  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: fullWidth
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({
    fullWidth: fullWidth,
    maxRows: maxRows || defaultMaxRows,
    multiline: true,
    value: textValue,
    placeholder: !readonly ? placeholder : "",
    InputProps: {
      readOnly: readonly
    },
    inputProps: {
      maxLength: maxLength
    },
    disabled: readonly,
    onChange: onChange
  }, customProps)));
};