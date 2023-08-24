"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _uuid = _interopRequireDefault(require("../../../../utils/uuid"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = function _default(props) {
  var value = props.value,
    setValue = props.setValue,
    config = props.config,
    labelYes = props.labelYes,
    labelNo = props.labelNo,
    readonly = props.readonly,
    _props$customProps = props.customProps,
    customProps = _props$customProps === void 0 ? {} : _props$customProps;
  var customRadioYesProps = customProps.radioYes || {};
  var customRadioNoProps = customProps.radioNo || {};
  var onCheckboxChange = function onCheckboxChange(e) {
    return setValue(e.target.checked);
  };
  var onRadioChange = function onRadioChange(e) {
    return setValue(e.target.value == "true");
  };
  var id = (0, _uuid["default"])(),
    id2 = (0, _uuid["default"])();

  // return <>
  //     <input key={id}  type="checkbox" id={id} checked={!!value} disabled={readonly} onChange={onCheckboxChange} />
  //     <label style={{display: "inline"}} key={id+"label"}  htmlFor={id}>{value ? labelYes : labelNo}</label>
  // </>;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", _extends({
    key: id,
    type: "radio",
    id: id,
    value: true,
    checked: !!value,
    disabled: readonly,
    onChange: onRadioChange
  }, customRadioYesProps)), /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      display: "inline"
    },
    key: id + "label",
    htmlFor: id
  }, labelYes), /*#__PURE__*/_react["default"].createElement("input", _extends({
    key: id2,
    type: "radio",
    id: id2,
    value: false,
    checked: !value,
    disabled: readonly,
    onChange: onRadioChange
  }, customRadioNoProps)), /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      display: "inline"
    },
    key: id2 + "label",
    htmlFor: id2
  }, labelNo));
};
exports["default"] = _default;