"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _MaterialAutocomplete = _interopRequireDefault(require("../value/MaterialAutocomplete"));
var _excluded = ["items", "selectedKey", "setField"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var itemsToListValues = function itemsToListValues(items) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return items.map(function (item) {
    var items = item.items,
      path = item.path,
      label = item.label,
      disabled = item.disabled,
      grouplabel = item.grouplabel;
    var prefix = "\xA0\xA0".repeat(level);
    if (items) {
      return itemsToListValues(items, level + 1);
    } else {
      return {
        title: label,
        renderTitle: prefix + label,
        value: path,
        disabled: disabled,
        groupTitle: level > 0 ? prefix + grouplabel : null
      };
    }
  }).flat(Infinity);
};
var filterOptionsConfig = {
  stringify: function stringify(option) {
    var keysForFilter = ["title", "value", "grouplabel", "label"];
    var valueForFilter = keysForFilter.map(function (k) {
      return typeof option[k] == "string" ? option[k] : "";
    }).join("\0");
    return valueForFilter;
  }
};
var fieldAdapter = function fieldAdapter(_ref) {
  var items = _ref.items,
    selectedKey = _ref.selectedKey,
    setField = _ref.setField,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var listValues = itemsToListValues(items);
  var groupBy = function groupBy(option) {
    return option.groupTitle;
  };
  var value = selectedKey;
  var setValue = function setValue(value, _asyncValues) {
    if (!value) return undefined;
    return setField(value);
  };
  return _objectSpread(_objectSpread({}, rest), {}, {
    listValues: listValues,
    setValue: setValue,
    groupBy: groupBy,
    filterOptionsConfig: filterOptionsConfig,
    allowCustomValues: false,
    multiple: false,
    value: value
  });
};
var _default = function _default(props) {
  return /*#__PURE__*/_react["default"].createElement(_MaterialAutocomplete["default"], fieldAdapter(props));
};
exports["default"] = _default;