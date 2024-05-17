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
var _moment = _interopRequireDefault(require("moment"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var DateTimeWidget = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function DateTimeWidget(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, DateTimeWidget);
    _this = _callSuper(this, DateTimeWidget, [props]);
    _this.handleChange = function (aValue) {
      var _this$props = _this.props,
        setValue = _this$props.setValue,
        valueFormat = _this$props.valueFormat;
      var value = aValue && aValue.isValid() ? aValue.format(valueFormat) : undefined;
      if (value || aValue === null) setValue(value);
    };
    var _valueFormat = props.valueFormat,
      _value = props.value,
      _setValue = props.setValue;
    var mValue = _value ? (0, _moment["default"])(_value, _valueFormat) : null;
    if (mValue && !mValue.isValid()) {
      _setValue(null);
    }
    return _this;
  }
  (0, _inherits2["default"])(DateTimeWidget, _PureComponent);
  return (0, _createClass2["default"])(DateTimeWidget, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        placeholder = _this$props2.placeholder,
        customProps = _this$props2.customProps,
        value = _this$props2.value,
        valueFormat = _this$props2.valueFormat,
        dateFormat = _this$props2.dateFormat,
        timeFormat = _this$props2.timeFormat,
        use12Hours = _this$props2.use12Hours,
        config = _this$props2.config,
        readonly = _this$props2.readonly;
      var renderSize = config.settings.renderSize;
      var dateValue = value ? (0, _moment["default"])(value, valueFormat) : null;
      var dateTimeFrmat = dateFormat + " " + timeFormat;
      return /*#__PURE__*/_react["default"].createElement(_antd.DatePicker, (0, _extends2["default"])({
        disabled: readonly,
        key: "widget-datetime",
        use12Hours: use12Hours,
        showTime: {
          format: timeFormat
        },
        placeholder: placeholder,
        size: renderSize,
        format: dateTimeFrmat,
        value: dateValue,
        onChange: this.handleChange
      }, customProps));
    }
  }]);
}(_react.PureComponent);
DateTimeWidget.propTypes = {
  setValue: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].string,
  //in valueFormat
  config: _propTypes["default"].object.isRequired,
  field: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  customProps: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  // from fieldSettings:
  timeFormat: _propTypes["default"].string,
  dateFormat: _propTypes["default"].string,
  valueFormat: _propTypes["default"].string,
  use12Hours: _propTypes["default"].bool
};
DateTimeWidget.defaultProps = {
  timeFormat: "HH:mm",
  dateFormat: "YYYY-MM-DD",
  valueFormat: "YYYY-MM-DD HH:mm:ss",
  use12Hours: false
};