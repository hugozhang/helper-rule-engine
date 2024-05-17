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
var RangePicker = _antd.DatePicker.RangePicker;
var DateWidget = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function DateWidget(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, DateWidget);
    _this = _callSuper(this, DateWidget, [props]);
    _this.isValidSingleValue = function (value) {
      var valueFormat = _this.props.valueFormat;
      var v = value ? (0, _moment["default"])(value, valueFormat) : null;
      return !v || v && v.isValid();
    };
    _this.isValidValue = function (value) {
      var isSpecialRange = _this.props.isSpecialRange;
      if (isSpecialRange) return value ? value.map(function (el) {
        return _this.isValidSingleValue(el);
      }).reduce(function (res, item) {
        return res && item;
      }, true) : true;else return _this.isValidSingleValue(value);
    };
    _this.getMomentSingleValue = function (value) {
      var valueFormat = _this.props.valueFormat;
      var v = value ? (0, _moment["default"])(value, valueFormat) : null;
      if (v && !v.isValid()) v = null;
      return v;
    };
    _this.getMomentValue = function (value) {
      var isSpecialRange = _this.props.isSpecialRange;
      if (isSpecialRange) return value ? value.map(function (el) {
        return _this.getMomentSingleValue(el);
      }) : [null, null];else return _this.getMomentSingleValue(value);
    };
    _this.formatSingleValue = function (value) {
      var valueFormat = _this.props.valueFormat;
      return value && value.isValid() ? value.format(valueFormat) : undefined;
    };
    _this.formatValue = function (value) {
      var isSpecialRange = _this.props.isSpecialRange;
      if (isSpecialRange) return value ? value.map(function (el) {
        return _this.formatSingleValue(el);
      }) : [undefined, undefined];else return _this.formatSingleValue(value);
    };
    _this.handleChange = function (value) {
      var setValue = _this.props.setValue;
      if (_this.isValidValue(value)) setValue(_this.formatValue(value));
    };
    var _value = props.value,
      _setValue = props.setValue;
    if (!_this.isValidValue(_value)) {
      _setValue(_this.formatValue(_this.getMomentValue(_value)));
    }
    return _this;
  }
  (0, _inherits2["default"])(DateWidget, _PureComponent);
  return (0, _createClass2["default"])(DateWidget, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        placeholder = _this$props.placeholder,
        placeholders = _this$props.placeholders,
        customProps = _this$props.customProps,
        value = _this$props.value,
        dateFormat = _this$props.dateFormat,
        config = _this$props.config,
        readonly = _this$props.readonly,
        isSpecialRange = _this$props.isSpecialRange;
      var renderSize = config.settings.renderSize;
      var dateValue = this.getMomentValue(value);
      if (isSpecialRange) {
        return /*#__PURE__*/_react["default"].createElement(RangePicker, (0, _extends2["default"])({
          disabled: readonly,
          key: "widget-date",
          placeholder: placeholders,
          size: renderSize,
          format: dateFormat,
          value: dateValue,
          onChange: this.handleChange
        }, customProps));
      } else {
        return /*#__PURE__*/_react["default"].createElement(_antd.DatePicker, (0, _extends2["default"])({
          disabled: readonly,
          key: "widget-date",
          placeholder: placeholder,
          size: renderSize,
          format: dateFormat,
          value: dateValue,
          onChange: this.handleChange
        }, customProps));
      }
    }
  }]);
}(_react.PureComponent);
DateWidget.propTypes = {
  setValue: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  //in valueFormat
  field: _propTypes["default"].string.isRequired,
  config: _propTypes["default"].object.isRequired,
  placeholder: _propTypes["default"].string,
  placeholders: _propTypes["default"].arrayOf(_propTypes["default"].string),
  customProps: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  // from fieldSettings:
  dateFormat: _propTypes["default"].string,
  valueFormat: _propTypes["default"].string
};
DateWidget.defaultProps = {
  dateFormat: "YYYY-MM-DD",
  valueFormat: "YYYY-MM-DD"
};