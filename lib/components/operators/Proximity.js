"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _range = _interopRequireDefault(require("lodash/range"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Proximity = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function Proximity() {
    var _this;
    (0, _classCallCheck2["default"])(this, Proximity);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Proximity, [].concat(args));
    _this.handleChange = function (value) {
      _this.props.setOption("proximity", parseInt(value));
    };
    return _this;
  }
  (0, _inherits2["default"])(Proximity, _PureComponent);
  return (0, _createClass2["default"])(Proximity, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        defaults = _this$props.defaults,
        options = _this$props.options,
        config = _this$props.config,
        optionLabel = _this$props.optionLabel,
        optionPlaceholder = _this$props.optionPlaceholder,
        customProps = _this$props.customProps,
        minProximity = _this$props.minProximity,
        maxProximity = _this$props.maxProximity,
        optionTextBefore = _this$props.optionTextBefore,
        readonly = _this$props.readonly;
      var settings = config.settings,
        widgets = config.widgets;
      var defaultProximity = defaults ? defaults.proximity : undefined;
      var showLabels = settings.showLabels;
      var selectedProximity = options.get("proximity", defaultProximity);
      var proxValues = (0, _range["default"])(minProximity, maxProximity + 1).map(function (item) {
        return {
          title: item,
          value: item
        };
      });
      var Select = widgets.select.factory;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "operator--PROXIMITY"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "operator--options"
      }, showLabels && /*#__PURE__*/_react["default"].createElement("label", {
        className: "rule--label"
      }, optionLabel), !showLabels && optionTextBefore && /*#__PURE__*/_react["default"].createElement("div", {
        className: "operator--options--sep"
      }, /*#__PURE__*/_react["default"].createElement("span", null, optionTextBefore)), /*#__PURE__*/_react["default"].createElement(Select, (0, _extends2["default"])({
        config: config,
        value: selectedProximity,
        listValues: proxValues,
        setValue: this.handleChange,
        readonly: readonly,
        placeholder: optionPlaceholder
      }, customProps))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "operator--widgets"
      }, this.props.children));
    }
  }]);
}(_react.PureComponent);
Proximity.propTypes = {
  config: _propTypes["default"].object.isRequired,
  setOption: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].any.isRequired,
  //instanceOf(Immutable.Map)
  minProximity: _propTypes["default"].number,
  maxProximity: _propTypes["default"].number,
  optionPlaceholder: _propTypes["default"].string,
  optionTextBefore: _propTypes["default"].string,
  optionLabel: _propTypes["default"].string,
  customProps: _propTypes["default"].object,
  readonly: _propTypes["default"].bool
  //children
};
Proximity.defaultProps = {
  customProps: {},
  minProximity: 2,
  maxProximity: 10,
  optionPlaceholder: "Select words between",
  optionLabel: "Words between",
  optionTextBefore: null
};