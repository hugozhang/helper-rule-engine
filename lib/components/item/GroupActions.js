"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupActions = void 0;
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
var groupActionsPositionList = {
  topLeft: "group--actions--tl",
  topCenter: "group--actions--tc",
  topRight: "group--actions--tr",
  bottomLeft: "group--actions--bl",
  bottomCenter: "group--actions--bc",
  bottomRight: "group--actions--br"
};
var defaultPosition = "topRight";
var GroupActions = exports.GroupActions = /*#__PURE__*/function (_PureComponent) {
  function GroupActions() {
    (0, _classCallCheck2["default"])(this, GroupActions);
    return _callSuper(this, GroupActions, arguments);
  }
  (0, _inherits2["default"])(GroupActions, _PureComponent);
  return (0, _createClass2["default"])(GroupActions, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        addRule = _this$props.addRule,
        addGroup = _this$props.addGroup,
        removeSelf = _this$props.removeSelf,
        setLock = _this$props.setLock,
        isLocked = _this$props.isLocked,
        isTrueLocked = _this$props.isTrueLocked,
        id = _this$props.id,
        canAddGroup = _this$props.canAddGroup,
        canAddRule = _this$props.canAddRule,
        canDeleteGroup = _this$props.canDeleteGroup;
      var _config$settings = config.settings,
        immutableGroupsMode = _config$settings.immutableGroupsMode,
        addRuleLabel = _config$settings.addRuleLabel,
        addGroupLabel = _config$settings.addGroupLabel,
        delGroupLabel = _config$settings.delGroupLabel,
        groupActionsPosition = _config$settings.groupActionsPosition,
        Btn = _config$settings.renderButton,
        Switch = _config$settings.renderSwitch,
        BtnGrp = _config$settings.renderButtonGroup,
        lockLabel = _config$settings.lockLabel,
        lockedLabel = _config$settings.lockedLabel,
        showLock = _config$settings.showLock,
        canDeleteLocked = _config$settings.canDeleteLocked;
      var position = groupActionsPositionList[groupActionsPosition || defaultPosition];
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
        type: "addRule",
        onClick: addRule,
        label: addRuleLabel,
        readonly: isLocked,
        config: config
      });
      var addGroupBtn = !immutableGroupsMode && canAddGroup && !isLocked && /*#__PURE__*/_react["default"].createElement(Btn, {
        type: "addGroup",
        onClick: addGroup,
        label: addGroupLabel,
        readonly: isLocked,
        config: config
      });
      var delGroupBtn = !immutableGroupsMode && canDeleteGroup && (!isLocked || isLocked && canDeleteLocked) && /*#__PURE__*/_react["default"].createElement(Btn, {
        type: "delGroup",
        onClick: removeSelf,
        label: delGroupLabel,
        config: config
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "group--actions ".concat(position)
      }, /*#__PURE__*/_react["default"].createElement(BtnGrp, {
        config: config
      }, setLockSwitch, addRuleBtn, addGroupBtn, delGroupBtn));
    }
  }]);
}(_react.PureComponent);