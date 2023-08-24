"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactstrap = require("reactstrap");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = function _default(_ref) {
  var config = _ref.config,
    valueSources = _ref.valueSources,
    valueSrc = _ref.valueSrc,
    title = _ref.title,
    setValueSrc = _ref.setValueSrc,
    readonly = _ref.readonly;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
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
      var _ref3 = _slicedToArray(_ref2, 2),
        srcKey = _ref3[0],
        _info = _ref3[1];
      return srcKey == valueSrc;
    }).map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        _srcKey = _ref5[0],
        info = _ref5[1];
      return info;
    }).shift();
    return (valueSrcInfo === null || valueSrcInfo === void 0 ? void 0 : valueSrcInfo.label) || valueSrc;
  };
  var renderOptions = function renderOptions(valueSources) {
    return valueSources.map(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
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
exports["default"] = _default;