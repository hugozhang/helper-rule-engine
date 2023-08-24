"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _ExpandMoreSharp = _interopRequireDefault(require("@mui/icons-material/ExpandMoreSharp"));
var _Popover = _interopRequireDefault(require("@mui/material/Popover"));
var _Radio = _interopRequireDefault(require("@mui/material/Radio"));
var _RadioGroup = _interopRequireDefault(require("@mui/material/RadioGroup"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _FormLabel = _interopRequireDefault(require("@mui/material/FormLabel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = function _default(_ref) {
  var valueSources = _ref.valueSources,
    valueSrc = _ref.valueSrc,
    title = _ref.title,
    setValueSrc = _ref.setValueSrc,
    readonly = _ref.readonly;
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];
  var handleOpen = function handleOpen(event) {
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  var toggleOpenClose = function toggleOpenClose(event) {
    anchorEl ? handleClose() : handleOpen(event);
  };
  var handleChange = function handleChange(e) {
    if (e.target.value === undefined) return;
    setValueSrc(e.target.value);
    handleClose();
  };
  var renderOptions = function renderOptions(valueSources) {
    return valueSources.map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        srcKey = _ref3[0],
        info = _ref3[1];
      return /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
        key: srcKey,
        value: srcKey,
        checked: valueSrc == srcKey || !valueSrc && srcKey == "value",
        control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
        label: info.label
      });
    });
  };
  var open = Boolean(anchorEl);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    size: "small",
    onClick: toggleOpenClose
  }, /*#__PURE__*/_react["default"].createElement(_ExpandMoreSharp["default"], null)), /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
    open: open,
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    onClose: handleClose,
    sx: {
      padding: function padding(theme) {
        return theme.spacing(1);
      }
    },
    disablePortal: true
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    component: "fieldset",
    sx: {
      p: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
    component: "legend"
  }, title), /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], {
    value: valueSrc || "value",
    onChange: handleChange
  }, renderOptions(valueSources)))));
};
exports["default"] = _default;