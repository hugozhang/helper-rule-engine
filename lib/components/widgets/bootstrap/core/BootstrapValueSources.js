"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactstrap = require("reactstrap");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var _default = exports["default"] = function _default(_ref) {
  var config = _ref.config,
    valueSources = _ref.valueSources,
    valueSrc = _ref.valueSrc,
    title = _ref.title,
    setValueSrc = _ref.setValueSrc,
    readonly = _ref.readonly;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var stylesDropdownWrapper = {
    lineHeight: "105%",
    minHeight: "1.7rem",
    paddingBottom: "0.45rem"
  };
  var stylesDropdownMenuWrapper = {
    //minWidth: "100%"
  };
  var onChange = function onChange(e) {
    if (e.target.value === undefined) return;
    setValueSrc(e.target.value);
  };
  var getValueSrcLabel = function getValueSrcLabel(valueSrc) {
    var valueSrcInfo = valueSources.filter(function (_ref2) {
      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
        srcKey = _ref3[0],
        _info = _ref3[1];
      return srcKey == valueSrc;
    }).map(function (_ref4) {
      var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
        _srcKey = _ref5[0],
        info = _ref5[1];
      return info;
    }).shift();
    return (valueSrcInfo === null || valueSrcInfo === void 0 ? void 0 : valueSrcInfo.label) || valueSrc;
  };
  var renderOptions = function renderOptions(valueSources) {
    return valueSources.map(function (_ref6) {
      var _ref7 = (0, _slicedToArray2["default"])(_ref6, 2),
        srcKey = _ref7[0],
        info = _ref7[1];
      return /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
        key: srcKey,
        onClick: onChange,
        value: srcKey,
        active: valueSrc == srcKey
      }, info.label || srcKey);
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Dropdown, {
    isOpen: isOpen,
    onClick: function onClick() {
      return !isOpen ? setIsOpen(true) : setIsOpen(false);
    },
    disabled: readonly,
    toggle: function toggle() {
      return setIsOpen(!isOpen);
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownToggle, {
    tag: "span",
    className: "btn",
    style: stylesDropdownWrapper,
    color: "transparent"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faEllipsisV
  })), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownMenu, {
    container: "body",
    style: stylesDropdownMenuWrapper
  }, renderOptions(valueSources)));
};