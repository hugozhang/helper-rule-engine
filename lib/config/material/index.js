"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _material = _interopRequireDefault(require("../../components/widgets/material"));
var _basic = _interopRequireWildcard(require("../basic"));
var _react = _interopRequireDefault(require("react"));
var _export = require("../../utils/export");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MaterialBooleanWidget = _material["default"].MaterialBooleanWidget,
  MaterialTextWidget = _material["default"].MaterialTextWidget,
  MaterialTextAreaWidget = _material["default"].MaterialTextAreaWidget,
  MaterialDateWidget = _material["default"].MaterialDateWidget,
  MaterialTimeWidget = _material["default"].MaterialTimeWidget,
  MaterialDateTimeWidget = _material["default"].MaterialDateTimeWidget,
  MaterialMultiSelectWidget = _material["default"].MaterialMultiSelectWidget,
  MaterialSelectWidget = _material["default"].MaterialSelectWidget,
  MaterialNumberWidget = _material["default"].MaterialNumberWidget,
  MaterialSliderWidget = _material["default"].MaterialSliderWidget,
  MaterialRangeWidget = _material["default"].MaterialRangeWidget,
  MaterialAutocompleteWidget = _material["default"].MaterialAutocompleteWidget,
  MaterialFieldSelect = _material["default"].MaterialFieldSelect,
  MaterialFieldAutocomplete = _material["default"].MaterialFieldAutocomplete,
  MaterialConjs = _material["default"].MaterialConjs,
  MaterialSwitch = _material["default"].MaterialSwitch,
  MaterialButton = _material["default"].MaterialButton,
  MaterialButtonGroup = _material["default"].MaterialButtonGroup,
  MaterialValueSources = _material["default"].MaterialValueSources,
  MaterialProvider = _material["default"].MaterialProvider,
  MaterialConfirm = _material["default"].MaterialConfirm,
  MaterialUseConfirm = _material["default"].MaterialUseConfirm;
var settings = _objectSpread(_objectSpread({}, _basic["default"].settings), {}, {
  renderField: function renderField(props) {
    var _props$customProps;
    return props !== null && props !== void 0 && (_props$customProps = props.customProps) !== null && _props$customProps !== void 0 && _props$customProps.showSearch ? /*#__PURE__*/_react["default"].createElement(MaterialFieldAutocomplete, props) : /*#__PURE__*/_react["default"].createElement(MaterialFieldSelect, props);
  },
  renderOperator: function renderOperator(props) {
    return /*#__PURE__*/_react["default"].createElement(MaterialFieldSelect, props);
  },
  renderFunc: function renderFunc(props) {
    return /*#__PURE__*/_react["default"].createElement(MaterialFieldSelect, props);
  },
  renderConjs: function renderConjs(props) {
    return /*#__PURE__*/_react["default"].createElement(MaterialConjs, props);
  },
  renderSwitch: function renderSwitch(props) {
    return /*#__PURE__*/_react["default"].createElement(MaterialSwitch, props);
  },
  renderButton: function renderButton(props) {
    return /*#__PURE__*/_react["default"].createElement(MaterialButton, props);
  },
  renderButtonGroup: function renderButtonGroup(props) {
    return /*#__PURE__*/_react["default"].createElement(MaterialButtonGroup, props);
  },
  renderValueSources: function renderValueSources(props) {
    return /*#__PURE__*/_react["default"].createElement(MaterialValueSources, props);
  },
  renderProvider: function renderProvider(props) {
    return /*#__PURE__*/_react["default"].createElement(MaterialProvider, props);
  },
  renderConfirm: MaterialConfirm,
  useConfirm: MaterialUseConfirm
});
var widgets = _objectSpread(_objectSpread({}, _basic["default"].widgets), {}, {
  text: _objectSpread(_objectSpread({}, _basic["default"].widgets.text), {}, {
    factory: function factory(props) {
      return /*#__PURE__*/_react["default"].createElement(MaterialTextWidget, props);
    }
  }),
  textarea: _objectSpread(_objectSpread({}, _basic["default"].widgets.textarea), {}, {
    factory: function factory(props) {
      return /*#__PURE__*/_react["default"].createElement(MaterialTextAreaWidget, props);
    }
  }),
  number: _objectSpread(_objectSpread({}, _basic["default"].widgets.number), {}, {
    factory: function factory(props) {
      return /*#__PURE__*/_react["default"].createElement(MaterialNumberWidget, props);
    }
  }),
  multiselect: _objectSpread(_objectSpread({}, _basic["default"].widgets.multiselect), {}, {
    factory: function factory(props) {
      return props.asyncFetch || props.showSearch ? /*#__PURE__*/_react["default"].createElement(MaterialAutocompleteWidget, (0, _extends2["default"])({
        multiple: true
      }, props)) : /*#__PURE__*/_react["default"].createElement(MaterialMultiSelectWidget, props);
    }
  }),
  select: _objectSpread(_objectSpread({}, _basic["default"].widgets.select), {}, {
    factory: function factory(props) {
      return props.asyncFetch || props.showSearch ? /*#__PURE__*/_react["default"].createElement(MaterialAutocompleteWidget, props) : /*#__PURE__*/_react["default"].createElement(MaterialSelectWidget, props);
    }
  }),
  slider: _objectSpread(_objectSpread({}, _basic["default"].widgets.slider), {}, {
    factory: function factory(props) {
      return /*#__PURE__*/_react["default"].createElement(MaterialSliderWidget, props);
    }
  }),
  "boolean": _objectSpread(_objectSpread({}, _basic["default"].widgets["boolean"]), {}, {
    factory: function factory(props) {
      return /*#__PURE__*/_react["default"].createElement(MaterialBooleanWidget, props);
    }
  }),
  date: _objectSpread(_objectSpread({}, _basic["default"].widgets.date), {}, {
    factory: function factory(props) {
      return /*#__PURE__*/_react["default"].createElement(MaterialDateWidget, props);
    }
  }),
  time: _objectSpread(_objectSpread({}, _basic["default"].widgets.time), {}, {
    factory: function factory(props) {
      return /*#__PURE__*/_react["default"].createElement(MaterialTimeWidget, props);
    }
  }),
  datetime: _objectSpread(_objectSpread({}, _basic["default"].widgets.datetime), {}, {
    factory: function factory(props) {
      return /*#__PURE__*/_react["default"].createElement(MaterialDateTimeWidget, props);
    }
  }),
  rangeslider: {
    type: "number",
    jsType: "number",
    valueSrc: "value",
    factory: function factory(props) {
      return /*#__PURE__*/_react["default"].createElement(MaterialRangeWidget, props);
    },
    valueLabel: "Range",
    valuePlaceholder: "Select range",
    valueLabels: [{
      label: "Number from",
      placeholder: "Enter number from"
    }, {
      label: "Number to",
      placeholder: "Enter number to"
    }],
    formatValue: function formatValue(val, fieldDef, wgtDef, isForDisplay) {
      return isForDisplay ? (0, _basic.stringifyForDisplay)(val) : JSON.stringify(val);
    },
    sqlFormatValue: function sqlFormatValue(val, fieldDef, wgtDef, op, opDef) {
      return _export.SqlString.escape(val);
    },
    spelFormatValue: function spelFormatValue(val) {
      return (0, _export.spelEscape)(val);
    },
    singleWidget: "slider",
    toJS: function toJS(val, fieldSettings) {
      return val;
    }
  }
});
var types = _objectSpread(_objectSpread({}, _basic["default"].types), {}, {
  number: _objectSpread(_objectSpread({}, _basic["default"].types.number), {}, {
    widgets: _objectSpread(_objectSpread({}, _basic["default"].types.number.widgets), {}, {
      rangeslider: {
        opProps: {
          between: {
            isSpecialRange: true
          },
          not_between: {
            isSpecialRange: true
          }
        },
        operators: ["between", "not_between", "is_null", "is_not_null"]
      }
    })
  })
});
var _default = exports["default"] = _objectSpread(_objectSpread({}, _basic["default"]), {}, {
  types: types,
  widgets: widgets,
  settings: settings
});