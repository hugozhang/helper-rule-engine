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
var _Field = _interopRequireDefault(require("./Field"));
var _utils = require("../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FieldWrapper = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function FieldWrapper() {
    (0, _classCallCheck2["default"])(this, FieldWrapper);
    return _callSuper(this, FieldWrapper, arguments);
  }
  (0, _inherits2["default"])(FieldWrapper, _PureComponent);
  return (0, _createClass2["default"])(FieldWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        selectedField = _this$props.selectedField,
        setField = _this$props.setField,
        parentField = _this$props.parentField,
        classname = _this$props.classname,
        readonly = _this$props.readonly,
        id = _this$props.id,
        groupId = _this$props.groupId;
      return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        className: classname
      }, config.settings.showLabels && /*#__PURE__*/_react["default"].createElement("label", {
        className: "rule--label"
      }, config.settings.fieldLabel), /*#__PURE__*/_react["default"].createElement(_Field["default"], {
        config: config,
        selectedField: selectedField,
        parentField: parentField,
        setField: setField,
        customProps: config.settings.customFieldSelectProps,
        readonly: readonly,
        id: id,
        groupId: groupId
      }));
    }
  }]);
}(_react.PureComponent);