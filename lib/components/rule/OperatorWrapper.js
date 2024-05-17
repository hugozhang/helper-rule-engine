"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _Operator = _interopRequireDefault(require("./Operator"));
var _utils = require("../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var OperatorWrapper = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function OperatorWrapper() {
    (0, _classCallCheck2["default"])(this, OperatorWrapper);
    return _callSuper(this, OperatorWrapper, arguments);
  }
  (0, _inherits2["default"])(OperatorWrapper, _PureComponent);
  return (0, _createClass2["default"])(OperatorWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        selectedField = _this$props.selectedField,
        selectedOperator = _this$props.selectedOperator,
        setOperator = _this$props.setOperator,
        selectedFieldPartsLabels = _this$props.selectedFieldPartsLabels,
        showOperator = _this$props.showOperator,
        showOperatorLabel = _this$props.showOperatorLabel,
        selectedFieldWidgetConfig = _this$props.selectedFieldWidgetConfig,
        readonly = _this$props.readonly,
        id = _this$props.id,
        groupId = _this$props.groupId;
      var operator = showOperator && /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        key: "operators-for-" + (selectedFieldPartsLabels || []).join("_"),
        className: "rule--operator"
      }, config.settings.showLabels && /*#__PURE__*/_react["default"].createElement("label", {
        className: "rule--label"
      }, config.settings.operatorLabel), /*#__PURE__*/_react["default"].createElement(_Operator["default"], {
        key: "operator",
        config: config,
        selectedField: selectedField,
        selectedOperator: selectedOperator,
        setOperator: setOperator,
        readonly: readonly,
        id: id,
        groupId: groupId
      }));
      var hiddenOperator = showOperatorLabel && /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        key: "operators-for-" + (selectedFieldPartsLabels || []).join("_"),
        className: "rule--operator"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "rule--operator"
      }, config.settings.showLabels ? /*#__PURE__*/_react["default"].createElement("label", {
        className: "rule--label"
      }, "\xA0") : null, /*#__PURE__*/_react["default"].createElement("span", null, selectedFieldWidgetConfig.operatorInlineLabel)));
      return [operator, hiddenOperator];
    }
  }]);
}(_react.PureComponent);