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
var _domUtils = require("../../../../utils/domUtils");
var _stuff = require("../../../../utils/stuff");
var _reactUtils = require("../../../../utils/reactUtils");
var _antd = require("antd");
var _omit = _interopRequireDefault(require("lodash/omit"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Option = _antd.Select.Option;
var SelectWidget = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function SelectWidget(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, SelectWidget);
    _this = _callSuper(this, SelectWidget, [props]);
    _this.handleChange = function (val) {
      _this.props.setValue(val);
    };
    _this.filterOption = function (input, option) {
      var dataForFilter = option.children || option.value;
      return dataForFilter.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this.onPropsChanged(props);
    return _this;
  }
  (0, _inherits2["default"])(SelectWidget, _PureComponent);
  return (0, _createClass2["default"])(SelectWidget, [{
    key: "onPropsChanged",
    value: function onPropsChanged(props) {
      var listValues = props.listValues;
      var optionsMaxWidth = 0;
      (0, _stuff.mapListValues)(listValues, function (_ref) {
        var title = _ref.title,
          value = _ref.value;
        optionsMaxWidth = Math.max(optionsMaxWidth, (0, _domUtils.calcTextWidth)(title, null));
      });
      this.optionsMaxWidth = optionsMaxWidth;
      this.options = (0, _stuff.mapListValues)(listValues, function (_ref2) {
        var title = _ref2.title,
          value = _ref2.value;
        return /*#__PURE__*/_react["default"].createElement(Option, {
          key: value + "",
          value: value + ""
        }, title);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        placeholder = _this$props.placeholder,
        customProps = _this$props.customProps,
        value = _this$props.value,
        readonly = _this$props.readonly;
      var renderSize = config.settings.renderSize;
      var placeholderWidth = (0, _domUtils.calcTextWidth)(placeholder);
      var dropdownWidth = this.optionsMaxWidth + _domUtils.SELECT_WIDTH_OFFSET_RIGHT;
      var width = value ? dropdownWidth : placeholderWidth + _domUtils.SELECT_WIDTH_OFFSET_RIGHT;
      var aValue = value != undefined ? value + "" : undefined;
      var customSelectProps = (0, _omit["default"])(customProps, [""]);
      return /*#__PURE__*/_react["default"].createElement(_antd.Select, (0, _extends2["default"])({
        disabled: readonly,
        style: {
          width: width
        },
        key: "widget-select",
        dropdownMatchSelectWidth: false,
        placeholder: placeholder,
        size: renderSize,
        value: aValue,
        onChange: this.handleChange,
        filterOption: this.filterOption
      }, customSelectProps), this.options);
    }
  }]);
}(_react.PureComponent);
SelectWidget.propTypes = {
  setValue: _propTypes["default"].func.isRequired,
  config: _propTypes["default"].object.isRequired,
  field: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  //key in listValues
  customProps: _propTypes["default"].object,
  fieldDefinition: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  // from fieldSettings:
  listValues: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array])
};