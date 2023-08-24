"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Rule = _interopRequireDefault(require("./Rule"));
var _Group = _interopRequireDefault(require("./Group"));
var _RuleGroup = _interopRequireDefault(require("./RuleGroup"));
var _RuleGroupExt = _interopRequireDefault(require("./RuleGroupExt"));
var _SwitchGroup = _interopRequireDefault(require("./SwitchGroup"));
var _CaseGroup = _interopRequireDefault(require("./CaseGroup"));
var _excluded = ["type"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    return /*#__PURE__*/_react["default"].createElement(_Rule["default"], _extends({}, getProperties(props), {
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
    return /*#__PURE__*/_react["default"].createElement(_Group["default"], _extends({}, getProperties(props), {
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
    return /*#__PURE__*/_react["default"].createElement(_RuleGroup["default"], _extends({}, getProperties(props), {
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
    return /*#__PURE__*/_react["default"].createElement(_RuleGroupExt["default"], _extends({}, getProperties(props), {
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
    return /*#__PURE__*/_react["default"].createElement(_SwitchGroup["default"], _extends({}, getProperties(props), {
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
    return /*#__PURE__*/_react["default"].createElement(_CaseGroup["default"], _extends({}, getProperties(props), {
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
var Item = /*#__PURE__*/function (_PureComponent) {
  _inherits(Item, _PureComponent);
  var _super = _createSuper(Item);
  function Item() {
    _classCallCheck(this, Item);
    return _super.apply(this, arguments);
  }
  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        type = _this$props.type,
        props = _objectWithoutProperties(_this$props, _excluded);
      var mode = props.properties.get("mode");
      var postfix = mode == "array" ? "_ext" : "";
      var Cmp = typeMap[type + postfix];
      if (!Cmp) return null;
      return Cmp(props);
    }
  }]);
  return Item;
}(_react.PureComponent);
exports.Item = Item;
_defineProperty(Item, "propTypes", {
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
});