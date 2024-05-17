"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Rule = _interopRequireDefault(require("./Rule"));
var _Group = _interopRequireDefault(require("./Group"));
var _RuleGroup = _interopRequireDefault(require("./RuleGroup"));
var _RuleGroupExt = _interopRequireDefault(require("./RuleGroupExt"));
var _SwitchGroup = _interopRequireDefault(require("./SwitchGroup"));
var _CaseGroup = _interopRequireDefault(require("./CaseGroup"));
var _excluded = ["type"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var types = ["rule", "group", "rule_group", "switch_group", "case_group"];
var getProperties = function getProperties(props) {
  var properties = props.properties.toObject();
  var result = _objectSpread({}, properties);
  if (props.isParentLocked) {
    result.isLocked = true;
  }
  if (properties.isLocked) {
    result.isTrueLocked = true;
  }
  return result;
};
var typeMap = {
  rule: function rule(props) {
    return /*#__PURE__*/_react["default"].createElement(_Rule["default"], (0, _extends2["default"])({}, getProperties(props), {
      id: props.id,
      groupId: props.groupId,
      path: props.path,
      actions: props.actions,
      reordableNodesCnt: props.reordableNodesCnt,
      totalRulesCnt: props.totalRulesCnt,
      config: props.config,
      onDragStart: props.onDragStart,
      isDraggingTempo: props.isDraggingTempo,
      parentField: props.parentField,
      parentReordableNodesCnt: props.parentReordableNodesCnt
    }));
  },
  group: function group(props) {
    return /*#__PURE__*/_react["default"].createElement(_Group["default"], (0, _extends2["default"])({}, getProperties(props), {
      id: props.id,
      groupId: props.groupId,
      path: props.path,
      actions: props.actions,
      config: props.config
      //tree={props.tree}
      ,
      reordableNodesCnt: props.reordableNodesCnt,
      totalRulesCnt: props.totalRulesCnt,
      onDragStart: props.onDragStart,
      isDraggingTempo: props.isDraggingTempo,
      children1: props.children1,
      parentField: null,
      parentReordableNodesCnt: props.parentReordableNodesCnt
    }));
  },
  rule_group: function rule_group(props) {
    return /*#__PURE__*/_react["default"].createElement(_RuleGroup["default"], (0, _extends2["default"])({}, getProperties(props), {
      id: props.id,
      groupId: props.groupId,
      path: props.path,
      actions: props.actions,
      config: props.config
      //tree={props.tree}
      ,
      reordableNodesCnt: props.reordableNodesCnt,
      totalRulesCnt: props.totalRulesCnt,
      onDragStart: props.onDragStart,
      isDraggingTempo: props.isDraggingTempo,
      children1: props.children1,
      parentField: props.parentField,
      parentReordableNodesCnt: props.parentReordableNodesCnt
    }));
  },
  rule_group_ext: function rule_group_ext(props) {
    return /*#__PURE__*/_react["default"].createElement(_RuleGroupExt["default"], (0, _extends2["default"])({}, getProperties(props), {
      id: props.id,
      groupId: props.groupId,
      path: props.path,
      actions: props.actions,
      config: props.config
      //tree={props.tree}
      ,
      reordableNodesCnt: props.reordableNodesCnt,
      totalRulesCnt: props.totalRulesCnt,
      onDragStart: props.onDragStart,
      isDraggingTempo: props.isDraggingTempo,
      children1: props.children1,
      parentField: props.parentField,
      parentReordableNodesCnt: props.parentReordableNodesCnt
    }));
  },
  switch_group: function switch_group(props) {
    return /*#__PURE__*/_react["default"].createElement(_SwitchGroup["default"], (0, _extends2["default"])({}, getProperties(props), {
      id: props.id,
      groupId: props.groupId,
      path: props.path,
      actions: props.actions,
      config: props.config
      //tree={props.tree}
      ,
      reordableNodesCnt: props.reordableNodesCnt,
      totalRulesCnt: props.totalRulesCnt,
      onDragStart: props.onDragStart,
      isDraggingTempo: props.isDraggingTempo,
      children1: props.children1,
      parentField: null,
      parentReordableNodesCnt: props.parentReordableNodesCnt
    }));
  },
  case_group: function case_group(props) {
    return /*#__PURE__*/_react["default"].createElement(_CaseGroup["default"], (0, _extends2["default"])({}, getProperties(props), {
      id: props.id,
      groupId: props.groupId,
      path: props.path,
      actions: props.actions,
      config: props.config
      //tree={props.tree}
      ,
      reordableNodesCnt: props.reordableNodesCnt,
      totalRulesCnt: props.totalRulesCnt,
      onDragStart: props.onDragStart,
      isDraggingTempo: props.isDraggingTempo,
      children1: props.children1,
      parentField: null,
      parentReordableNodesCnt: props.parentReordableNodesCnt
    }));
  }
};
var Item = exports.Item = /*#__PURE__*/function (_PureComponent) {
  function Item() {
    (0, _classCallCheck2["default"])(this, Item);
    return _callSuper(this, Item, arguments);
  }
  (0, _inherits2["default"])(Item, _PureComponent);
  return (0, _createClass2["default"])(Item, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        type = _this$props.type,
        props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var mode = props.properties.get("mode");
      var postfix = mode == "array" ? "_ext" : "";
      var renderItem = props.config.settings.renderItem;
      var Cmp = typeMap[type + postfix];
      if (renderItem) {
        return renderItem(_objectSpread(_objectSpread({}, props), {}, {
          type: type,
          itemComponent: Cmp
        }));
      }
      if (!Cmp) return null;
      return Cmp(props);
    }
  }]);
}(_react.PureComponent);
Item.propTypes = {
  //tree: PropTypes.instanceOf(Immutable.Map).isRequired,
  config: _propTypes["default"].object.isRequired,
  id: _propTypes["default"].string.isRequired,
  groupId: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(types).isRequired,
  path: _propTypes["default"].any.isRequired,
  //instanceOf(Immutable.List)
  properties: _propTypes["default"].any.isRequired,
  //instanceOf(Immutable.Map)
  children1: _propTypes["default"].any,
  //instanceOf(Immutable.OrderedMap)
  actions: _propTypes["default"].object.isRequired,
  reordableNodesCnt: _propTypes["default"].number,
  onDragStart: _propTypes["default"].func,
  parentField: _propTypes["default"].string,
  //from RuleGroup
  isDraggingTempo: _propTypes["default"].bool,
  isParentLocked: _propTypes["default"].bool
};