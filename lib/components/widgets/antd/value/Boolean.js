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
var BooleanWidget = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function BooleanWidget() {
    var _this;
    (0, _classCallCheck2["default"])(this, BooleanWidget);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, BooleanWidget, [].concat(args));
    _this.handleChange = function (val) {
      _this.props.setValue(val);
    };
    return _this;
  }
  (0, _inherits2["default"])(BooleanWidget, _PureComponent);
  return (0, _createClass2["default"])(BooleanWidget, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        customProps = _this$props.customProps,
        value = _this$props.value,
        labelYes = _this$props.labelYes,
        labelNo = _this$props.labelNo,
        readonly = _this$props.readonly;
      return /*#__PURE__*/_react["default"].createElement(_antd.Switch, (0, _extends2["default"])({
        checkedChildren: labelYes || null,
        unCheckedChildren: labelNo || null,
        checked: value || null,
        onChange: this.handleChange,
        disabled: readonly
      }, customProps));
    }
  }]);
}(_react.PureComponent);
BooleanWidget.propTypes = {
  setValue: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].bool,
  config: _propTypes["default"].object.isRequired,
  field: _propTypes["default"].string.isRequired,
  customProps: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  // from fieldSettings:
  labelYes: _propTypes["default"].string,
  labelNo: _propTypes["default"].string
};
BooleanWidget.defaultProps = {
  labelYes: null,
  labelNo: null
};