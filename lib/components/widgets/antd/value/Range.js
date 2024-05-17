"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _excluded = ["width"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var RangeWidget = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function RangeWidget(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RangeWidget);
    _this = _callSuper(this, RangeWidget, [props]);
    _this.state = {};
    _this.handleChange = function (value) {
      _this.props.setValue(value);
    };
    _this.handleChangeFrom = function (valueFrom) {
      var value = _this.props.value || [undefined, undefined];
      if (valueFrom === "" || valueFrom == null) valueFrom = undefined; //value[0];
      value = (0, _toConsumableArray2["default"])(value);
      value[0] = valueFrom;
      // if (value[1] == undefined)
      //   value[1] = valueFrom;
      _this.props.setValue(value);
    };
    _this.handleChangeTo = function (valueTo) {
      var value = _this.props.value || [undefined, undefined];
      if (valueTo === "" || valueTo == null) valueTo = undefined; //value[1];
      value = (0, _toConsumableArray2["default"])(value);
      value[1] = valueTo;
      // if (value[0] == undefined)
      //   value[0] = valueTo;
      _this.props.setValue(value);
    };
    _this.tipFormatter = function (val) {
      return val != undefined ? val.toString() : "";
    };
    var _ref = props.value || [null, null],
      _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      _valueFrom = _ref2[0],
      _valueTo = _ref2[1];
    if (props.value && (_valueFrom == undefined || _valueTo == undefined)) {
      // happens if we changed op from '==' to 'between'
      // (I know, timeout is dirty hack..)
      setTimeout(function () {
        var oneValue = _valueFrom || _valueTo;
        var value = [oneValue, oneValue];
        _this.props.setValue(value);
      }, 1);
    }
    return _this;
  }
  (0, _inherits2["default"])(RangeWidget, _PureComponent);
  return (0, _createClass2["default"])(RangeWidget, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        placeholders = _this$props.placeholders,
        customProps = _this$props.customProps,
        value = _this$props.value,
        min = _this$props.min,
        max = _this$props.max,
        step = _this$props.step,
        marks = _this$props.marks,
        textSeparators = _this$props.textSeparators,
        readonly = _this$props.readonly;
      var _config$settings = config.settings,
        renderSize = _config$settings.renderSize,
        defaultSliderWidth = _config$settings.defaultSliderWidth;
      var _ref3 = customProps || {},
        width = _ref3.width,
        rest = (0, _objectWithoutProperties2["default"])(_ref3, _excluded);
      var customInputProps = rest.input || {};
      var customSliderProps = rest.slider || rest;
      var aValue = value != undefined ? value : undefined;
      var _ref4 = aValue || [null, null],
        _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
        valueFrom = _ref5[0],
        valueTo = _ref5[1];
      return /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        style: {
          display: "inline-flex"
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        style: {
          "float": "left",
          marginRight: "5px"
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.InputNumber, (0, _extends2["default"])({
        disabled: readonly,
        size: renderSize,
        key: "numFrom",
        value: valueFrom,
        min: min,
        max: max,
        step: step,
        placeholder: placeholders[0],
        onChange: this.handleChangeFrom
      }, customInputProps))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        style: {
          "float": "left",
          marginRight: "5px",
          lineHeight: "20px"
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, textSeparators[1])), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        style: {
          "float": "left",
          marginRight: "5px"
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.InputNumber, (0, _extends2["default"])({
        disabled: readonly,
        size: renderSize,
        key: "numTo",
        value: valueTo,
        min: min,
        max: max,
        step: step,
        placeholder: placeholders[1],
        onChange: this.handleChangeTo
      }, customInputProps))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        style: {
          "float": "left",
          width: width || defaultSliderWidth
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.Slider, (0, _extends2["default"])({
        disabled: readonly,
        value: aValue,
        tipFormatter: this.tipFormatter,
        min: min,
        max: max,
        step: step,
        marks: marks,
        included: false,
        range: true,
        onChange: this.handleChange
      }, customSliderProps))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        style: {
          clear: "both"
        }
      }));
    }
  }]);
}(_react.PureComponent);
RangeWidget.propTypes = {
  setValue: _propTypes["default"].func.isRequired,
  placeholder: _propTypes["default"].string,
  placeholders: _propTypes["default"].array,
  textSeparators: _propTypes["default"].array,
  config: _propTypes["default"].object.isRequired,
  field: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].array,
  customProps: _propTypes["default"].object,
  fieldDefinition: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  // from fieldSettings:
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  step: _propTypes["default"].number,
  marks: _propTypes["default"].object
};
RangeWidget.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  marks: undefined
};