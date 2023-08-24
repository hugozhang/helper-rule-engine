"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _stuff = require("../../../../utils/stuff");
var _omit = _interopRequireDefault(require("lodash/omit"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = function _default(_ref) {
  var listValues = _ref.listValues,
    value = _ref.value,
    setValue = _ref.setValue,
    allowCustomValues = _ref.allowCustomValues,
    readonly = _ref.readonly,
    customProps = _ref.customProps;
  var renderOptions = function renderOptions() {
    return (0, _stuff.mapListValues)(listValues, function (_ref2) {
      var title = _ref2.title,
        value = _ref2.value;
      return /*#__PURE__*/_react["default"].createElement("option", {
        key: value,
        value: value
      }, title);
    });
  };
  var getMultiSelectValues = function getMultiSelectValues(multiselect) {
    var values = [];
    var options = multiselect.options;
    for (var i = 0; i < options.length; i++) {
      var opt = options[i];
      if (opt.selected) {
        values.push(opt.value);
      }
    }
    if (!values.length) values = undefined; //not allow []
    return values;
  };
  var onChange = function onChange(e) {
    return setValue(getMultiSelectValues(e.target));
  };
  return /*#__PURE__*/_react["default"].createElement("select", _extends({
    multiple: true,
    onChange: onChange,
    value: value,
    disabled: readonly
  }, (0, _omit["default"])(customProps, ["showSearch", "input", "showCheckboxes"])), renderOptions());
};
exports["default"] = _default;