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
var _antd = require("antd");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var NumberWidget = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function NumberWidget() {
    var _this;
    (0, _classCallCheck2["default"])(this, NumberWidget);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, NumberWidget, [].concat(args));
    _this.handleChange = function (val) {
      if (val === "" || val === null) val = undefined;
      _this.props.setValue(val);
    };
    return _this;
  }
  (0, _inherits2["default"])(NumberWidget, _PureComponent);
  return (0, _createClass2["default"])(NumberWidget, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        placeholder = _this$props.placeholder,
        customProps = _this$props.customProps,
        value = _this$props.value,
        min = _this$props.min,
        max = _this$props.max,
        step = _this$props.step,
        readonly = _this$props.readonly;
      var renderSize = config.settings.renderSize;
      var aValue = value != undefined ? value : undefined;
      return /*#__PURE__*/_react["default"].createElement(_antd.Col, null, /*#__PURE__*/_react["default"].createElement(_antd.InputNumber, (0, _extends2["default"])({
        disabled: readonly,
        key: "widget-number",
        size: renderSize,
        value: aValue,
        min: min,
        max: max,
        step: step,
        placeholder: placeholder,
        onChange: this.handleChange
      }, customProps)));
    }
  }]);
}(_react.PureComponent);
NumberWidget.propTypes = {
  setValue: _propTypes["default"].func.isRequired,
  placeholder: _propTypes["default"].string,
  config: _propTypes["default"].object.isRequired,
  field: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].number,
  customProps: _propTypes["default"].object,
  fieldDefinition: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  // from fieldSettings:
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  step: _propTypes["default"].number
};
NumberWidget.defaultProps = {
  min: undefined,
  max: undefined,
  step: undefined
};