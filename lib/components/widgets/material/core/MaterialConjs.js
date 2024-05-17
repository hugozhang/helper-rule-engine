"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));
var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));
var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));
var _ButtonGroup = _interopRequireDefault(require("@material-ui/core/ButtonGroup"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _default = exports["default"] = function _default(_ref) {
  var id = _ref.id,
    not = _ref.not,
    setNot = _ref.setNot,
    conjunctionOptions = _ref.conjunctionOptions,
    setConjunction = _ref.setConjunction,
    disabled = _ref.disabled,
    readonly = _ref.readonly,
    config = _ref.config,
    showNot = _ref.showNot,
    notLabel = _ref.notLabel;
  //TIP: disabled=true if only 1 rule; readonly=true if immutable mode
  var conjsCount = Object.keys(conjunctionOptions).length;
  var lessThenTwo = disabled;
  var forceShowConj = config.settings.forceShowConj;
  var showConj = forceShowConj || conjsCount > 1 && !lessThenTwo;
  var renderOptions = function renderOptions() {
    return Object.keys(conjunctionOptions).map(function (key) {
      var _conjunctionOptions$k = conjunctionOptions[key],
        id = _conjunctionOptions$k.id,
        name = _conjunctionOptions$k.name,
        label = _conjunctionOptions$k.label,
        checked = _conjunctionOptions$k.checked;
      var postfix = setConjunction.isDummyFn ? "__dummy" : "";
      if ((readonly || disabled) && !checked) return null;
      return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        key: id + postfix,
        id: id + postfix,
        color: checked ? "primary" : "default",
        value: key,
        onClick: onClick.bind(null, key),
        disabled: readonly || disabled
      }, label);
    });
  };
  var renderNot = function renderNot() {
    if (readonly && !not) return null;
    return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      key: id,
      id: id + "__not",
      color: not ? "secondary" : "default",
      onClick: onNotClick.bind(null, !not),
      disabled: readonly
    }, notLabel || "NOT");
  };
  var onClick = function onClick(value) {
    return setConjunction(value);
  };
  var onNotClick = function onNotClick(checked) {
    return setNot(checked);
  };
  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], null, /*#__PURE__*/_react["default"].createElement(_ButtonGroup["default"], {
    disableElevation: true,
    variant: "contained",
    size: "small",
    disabled: readonly
  }, showNot && renderNot(), showConj && renderOptions()));
};