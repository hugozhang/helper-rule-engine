"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuleGroupExtActions = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var RuleGroupExtActions = exports.RuleGroupExtActions = /*#__PURE__*/function (_PureComponent) {
  function RuleGroupExtActions() {
    (0, _classCallCheck2["default"])(this, RuleGroupExtActions);
    return _callSuper(this, RuleGroupExtActions, arguments);
  }
  (0, _inherits2["default"])(RuleGroupExtActions, _PureComponent);
  return (0, _createClass2["default"])(RuleGroupExtActions, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        addRule = _this$props.addRule,
        canAddRule = _this$props.canAddRule,
        canDeleteGroup = _this$props.canDeleteGroup,
        removeSelf = _this$props.removeSelf,
        setLock = _this$props.setLock,
        isLocked = _this$props.isLocked,
        isTrueLocked = _this$props.isTrueLocked,
        id = _this$props.id;
      var _config$settings = config.settings,
        immutableGroupsMode = _config$settings.immutableGroupsMode,
        addSubRuleLabel = _config$settings.addSubRuleLabel,
        delGroupLabel = _config$settings.delGroupLabel,
        Btn = _config$settings.renderButton,
        Switch = _config$settings.renderSwitch,
        BtnGrp = _config$settings.renderButtonGroup,
        lockLabel = _config$settings.lockLabel,
        lockedLabel = _config$settings.lockedLabel,
        showLock = _config$settings.showLock,
        canDeleteLocked = _config$settings.canDeleteLocked;
      var setLockSwitch = showLock && !(isLocked && !isTrueLocked) && /*#__PURE__*/_react["default"].createElement(Switch, {
        type: "lock",
        id: id,
        value: isLocked,
        setValue: setLock,
        label: lockLabel,
        checkedLabel: lockedLabel,
        config: config
      });
      var addRuleBtn = !immutableGroupsMode && canAddRule && !isLocked && /*#__PURE__*/_react["default"].createElement(Btn, {
        type: "addRuleGroupExt",
        onClick: addRule,
        label: addSubRuleLabel,
        readonly: isLocked,
        config: config
      });
      var delGroupBtn = !immutableGroupsMode && canDeleteGroup && (!isLocked || isLocked && canDeleteLocked) && /*#__PURE__*/_react["default"].createElement(Btn, {
        type: "delRuleGroup",
        onClick: removeSelf,
        label: delGroupLabel,
        config: config
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "group--actions group--actions--tr"
      }, /*#__PURE__*/_react["default"].createElement(BtnGrp, {
        config: config
      }, setLockSwitch, addRuleBtn, delGroupBtn));
    }
  }]);
}(_react.PureComponent);