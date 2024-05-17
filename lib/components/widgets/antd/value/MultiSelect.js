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
var _domUtils = require("../../../../utils/domUtils");
var _stuff = require("../../../../utils/stuff");
var _reactUtils = require("../../../../utils/reactUtils");
var _omit = _interopRequireDefault(require("lodash/omit"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Option = _antd.Select.Option;
var MultiSelectWidget = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function MultiSelectWidget(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MultiSelectWidget);
    _this = _callSuper(this, MultiSelectWidget, [props]);
    _this.handleChange = function (val) {
      if (val && !val.length) val = undefined; //not allow []
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
  (0, _inherits2["default"])(MultiSelectWidget, _PureComponent);
  return (0, _createClass2["default"])(MultiSelectWidget, [{
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
          key: value,
          value: value
        }, title);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        placeholder = _this$props.placeholder,
        allowCustomValues = _this$props.allowCustomValues,
        customProps = _this$props.customProps,
        value = _this$props.value,
        readonly = _this$props.readonly;
      var renderSize = config.settings.renderSize;
      var placeholderWidth = (0, _domUtils.calcTextWidth)(placeholder);
      var aValue = value && value.length ? value : undefined;
      var width = aValue ? null : placeholderWidth + _domUtils.SELECT_WIDTH_OFFSET_RIGHT;
      var dropdownWidth = this.optionsMaxWidth + _domUtils.SELECT_WIDTH_OFFSET_RIGHT;
      var customSelectProps = (0, _omit["default"])(customProps, ["showCheckboxes"]);
      return /*#__PURE__*/_react["default"].createElement(_antd.Select, (0, _extends2["default"])({
        disabled: readonly,
        mode: allowCustomValues ? "tags" : "multiple",
        style: {
          minWidth: width,
          width: width
        },
        dropdownStyle: {
          width: dropdownWidth
        },
        key: "widget-multiselect",
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
MultiSelectWidget.propTypes = {
  setValue: _propTypes["default"].func.isRequired,
  config: _propTypes["default"].object.isRequired,
  value: _propTypes["default"].array,
  field: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  customProps: _propTypes["default"].object,
  fieldDefinition: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  // from fieldSettings:
  listValues: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]),
  allowCustomValues: _propTypes["default"].bool
};