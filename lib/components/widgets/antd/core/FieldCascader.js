"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _stuff = require("../../../../utils/stuff");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FieldCascader = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function FieldCascader() {
    var _this;
    (0, _classCallCheck2["default"])(this, FieldCascader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, FieldCascader, [].concat(args));
    _this.onChange = function (keys) {
      var parentField = _this.props.parentField;
      var dotNotationToPath = function dotNotationToPath(str) {
        return str.split(".");
      };
      var parentPath = parentField ? dotNotationToPath(parentField) : [];
      _this.props.setField([].concat((0, _toConsumableArray2["default"])(parentPath), (0, _toConsumableArray2["default"])(keys)));
    };
    _this.filterOption = function (inputValue, path) {
      var keysForFilter = ["label", "key", "altLabel"];
      return path.some(function (option) {
        return keysForFilter.map(function (k) {
          return option[k];
        }).join("\0").toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
      });
    };
    return _this;
  }
  (0, _inherits2["default"])(FieldCascader, _PureComponent);
  return (0, _createClass2["default"])(FieldCascader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        customProps = _this$props.customProps,
        items = _this$props.items,
        placeholder = _this$props.placeholder,
        selectedPath = _this$props.selectedPath,
        selectedLabel = _this$props.selectedLabel,
        selectedOpts = _this$props.selectedOpts,
        selectedAltLabel = _this$props.selectedAltLabel,
        selectedFullLabel = _this$props.selectedFullLabel,
        readonly = _this$props.readonly,
        selectedField = _this$props.selectedField,
        parentField = _this$props.parentField;
      var customProps2 = _objectSpread({}, customProps);
      if (customProps2.showSearch) {
        customProps2.showSearch = {
          filter: this.filterOption
        };
      }
      var fieldSeparator = config.settings.fieldSeparator;
      var parentFieldPath = parentField ? parentField.split(fieldSeparator) : [];
      var value = (0, _stuff.removePrefixPath)(selectedPath, parentFieldPath);
      var res = /*#__PURE__*/_react["default"].createElement(_antd.Cascader, (0, _extends2["default"])({
        fieldNames: {
          label: "label",
          value: "key",
          children: "items"
        },
        options: items,
        value: value,
        onChange: this.onChange,
        allowClear: false,
        placeholder: placeholder,
        size: config.settings.renderSize,
        disabled: readonly
      }, customProps2));
      var tooltipText = selectedOpts.tooltip || selectedAltLabel;
      if (tooltipText == selectedLabel) tooltipText = null;
      if (tooltipText) {
        res = /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
          title: tooltipText
        }, res);
      }
      return res;
    }
  }]);
}(_react.PureComponent);
FieldCascader.propTypes = {
  config: _propTypes["default"].object.isRequired,
  customProps: _propTypes["default"].object,
  items: _propTypes["default"].array.isRequired,
  placeholder: _propTypes["default"].string,
  selectedKey: _propTypes["default"].string,
  selectedKeys: _propTypes["default"].array,
  selectedPath: _propTypes["default"].array,
  selectedLabel: _propTypes["default"].string,
  selectedAltLabel: _propTypes["default"].string,
  selectedFullLabel: _propTypes["default"].string,
  selectedOpts: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  //actions
  setField: _propTypes["default"].func.isRequired
};