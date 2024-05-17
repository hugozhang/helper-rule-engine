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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var _default = exports["default"] = function _default(_ref) {
  var items = _ref.items,
    setField = _ref.setField,
    selectedKey = _ref.selectedKey,
    readonly = _ref.readonly,
    placeholder = _ref.placeholder;
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