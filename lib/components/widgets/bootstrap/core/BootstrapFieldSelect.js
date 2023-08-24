"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactstrap = require("reactstrap");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = function _default(_ref) {
  var items = _ref.items,
    setField = _ref.setField,
    selectedKey = _ref.selectedKey,
    readonly = _ref.readonly,
    placeholder = _ref.placeholder;
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
    overflowY: "auto",
    maxHeight: "400px"
  };
  var onChange = function onChange(e) {
    if (e.target.value === undefined) return;
    setField(e.target.value);
  };
  var renderOptions = function renderOptions(fields) {
    var isGroupItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return Object.keys(fields).map(function (fieldKey) {
      var field = fields[fieldKey];
      var items = field.items,
        path = field.path,
        label = field.label,
        disabled = field.disabled;
      if (items) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: "dropdown-itemGroup-".concat(path)
        }, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
          header: true,
          key: "".concat(path, "-header"),
          onClick: onChange,
          value: path
        }, label), renderOptions(items, true));
      } else {
        return /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
          disabled: disabled,
          key: path,
          onClick: onChange,
          value: path,
          className: isGroupItem ? "px-4" : undefined,
          active: selectedKey == path
        }, label);
      }
    });
  };
  var hasValue = selectedKey != null;
  var renderValue = function renderValue(selectedValue) {
    if (!readonly && !selectedValue) return placeholder;
    var findLabel = function findLabel(fields) {
      return fields.map(function (field) {
        if (!field.items) return field.path === selectedValue ? field.label : null;
        return findLabel(field.items);
      });
    };
    return findLabel(items).filter(function (v) {
      if (Array.isArray(v)) {
        return v.some(function (value) {
          return value !== null;
        });
      } else {
        return v !== null;
      }
    }).pop();
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
    tag: "button",
    className: "form-select",
    style: stylesDropdownWrapper,
    color: "transparent"
  }, hasValue ? renderValue(selectedKey) : /*#__PURE__*/_react["default"].createElement("span", null, "\xA0")), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownMenu, {
    container: "body",
    style: stylesDropdownMenuWrapper
  }, !hasValue && /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
    key: "body",
    disabled: true,
    value: ""
  }), renderOptions(items)));
};
exports["default"] = _default;