"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _reactUtils = require("../../../../utils/reactUtils");
var _excluded = ["width"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var __isInternal = true; //true to optimize render
var SliderWidget = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function SliderWidget(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, SliderWidget);
    _this = _callSuper(this, SliderWidget, [props]);
    _this.state = {};
    _this.handleChange = function (val) {
      if (val === "") val = undefined;
      if (__isInternal) _this.setState({
        internalValue: val
      });
      _this.props.setValue(val, undefined, __isInternal);
    };
    _this.tipFormatter = function (val) {
      return val != undefined ? val.toString() : undefined;
    };
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this.state.internalValue = props.value;
    return _this;
  }
  (0, _inherits2["default"])(SliderWidget, _PureComponent);
  return (0, _createClass2["default"])(SliderWidget, [{
    key: "onPropsChanged",
    value: function onPropsChanged(nextProps) {
      this.setState({
        internalValue: nextProps.value
      });
    }
  }, {
    key: "UNSAFE_componentWillUpdate",
    value: function UNSAFE_componentWillUpdate(nextProps, nextState) {
      // RHL fix
      if (this.props.cacheBusterProp && __isInternal) {
        nextState.internalValue = this.state.internalValue;
      }
    }
  }, {
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
        marks = _this$props.marks,
        readonly = _this$props.readonly,
        valueError = _this$props.valueError;
      var _config$settings = config.settings,
        renderSize = _config$settings.renderSize,
        showErrorMessage = _config$settings.showErrorMessage,
        defaultSliderWidth = _config$settings.defaultSliderWidth;
      var _ref = customProps || {},
        width = _ref.width,
        rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
      var customInputProps = rest.input || {};
      var customSliderProps = rest.slider || rest;
      var canUseInternal = showErrorMessage ? true : !valueError;
      var aValue = __isInternal && canUseInternal ? this.state.internalValue : value;
      if (aValue == undefined) aValue = null;
      var sliderValue = aValue == null && min ? min : aValue;
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
        value: aValue,
        min: min,
        max: max,
        step: step,
        placeholder: placeholder,
        onChange: this.handleChange
      }, customInputProps))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        style: {
          "float": "left",
          width: width || defaultSliderWidth
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.Slider, (0, _extends2["default"])({
        disabled: readonly,
        value: sliderValue,
        tipFormatter: this.tipFormatter,
        min: min,
        max: max,
        included: false,
        step: step,
        marks: marks,
        onChange: this.handleChange
      }, customSliderProps))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        style: {
          clear: "both"
        }
      }));
    }
  }]);
}(_react.PureComponent);
SliderWidget.propTypes = {
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
  step: _propTypes["default"].number,
  marks: _propTypes["default"].object
};
SliderWidget.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  marks: undefined
};