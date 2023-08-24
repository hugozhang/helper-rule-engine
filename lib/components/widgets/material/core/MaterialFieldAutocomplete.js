"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _MaterialAutocomplete = _interopRequireDefault(require("../value/MaterialAutocomplete"));
var _excluded = ["items", "selectedKey", "setField"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    rest = _objectWithoutProperties(_ref, _excluded);
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