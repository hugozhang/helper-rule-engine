"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BasicGroup = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _startsWith = _interopRequireDefault(require("lodash/startsWith"));
var _GroupContainer = _interopRequireDefault(require("../containers/GroupContainer"));
var _Draggable = _interopRequireDefault(require("../containers/Draggable"));
var _Item = require("./Item");
var _GroupActions = require("./GroupActions");
var _utils = require("../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var classNames = require("classnames");
var defaultPosition = "topRight";
var BasicGroup = exports.BasicGroup = /*#__PURE__*/function (_PureComponent) {
  function BasicGroup(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, BasicGroup);
    _this = _callSuper(this, BasicGroup, [props]);
    _this.childrenClassName = function () {
      return "";
    };
    _this.renderBeforeActions = function () {
      var BeforeActions = _this.props.config.settings.renderBeforeActions;
      if (BeforeActions == undefined) return null;
      return typeof BeforeActions === "function" ? /*#__PURE__*/_react["default"].createElement(BeforeActions, _this.props) : BeforeActions;
    };
    _this.renderAfterActions = function () {
      var AfterActions = _this.props.config.settings.renderAfterActions;
      if (AfterActions == undefined) return null;
      return typeof AfterActions === "function" ? /*#__PURE__*/_react["default"].createElement(AfterActions, _this.props) : AfterActions;
    };
    _this.removeSelf = _this.removeSelf.bind(_this);
    _this.setLock = _this.setLock.bind(_this);
    _this.renderItem = _this.renderItem.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(BasicGroup, _PureComponent);
  return (0, _createClass2["default"])(BasicGroup, [{
    key: "isGroupTopPosition",
    value: function isGroupTopPosition() {
      return (0, _startsWith["default"])(this.props.config.settings.groupActionsPosition || defaultPosition, "top");
    }
  }, {
    key: "setLock",
    value: function setLock(lock) {
      this.props.setLock(lock);
    }
  }, {
    key: "removeSelf",
    value: function removeSelf() {
      var _this2 = this;
      var confirmFn = this.props.confirmFn;
      var _this$props$config$se = this.props.config.settings,
        renderConfirm = _this$props$config$se.renderConfirm,
        confirmOptions = _this$props$config$se.removeGroupConfirmOptions;
      var doRemove = function doRemove() {
        _this2.props.removeSelf();
      };
      if (confirmOptions && !this.isEmptyCurrentGroup()) {
        renderConfirm(_objectSpread(_objectSpread({}, confirmOptions), {}, {
          onOk: doRemove,
          onCancel: null,
          confirmFn: confirmFn
        }));
      } else {
        doRemove();
      }
    }
  }, {
    key: "isEmptyCurrentGroup",
    value: function isEmptyCurrentGroup() {
      var children = this.props.children1;
      return !children || children.size == 0 || children.size == 1 && this.isEmpty(children.first());
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(item) {
      var isGroup = item.get("type") == "group" || item.get("type") == "rule_group";
      return isGroup ? this.isEmptyGroup(item) : this.isEmptyRule(item);
    }
  }, {
    key: "isEmptyGroup",
    value: function isEmptyGroup(group) {
      var children = group.get("children1");
      return !children || children.size == 0 || children.size == 1 && this.isEmpty(children.first());
    }
  }, {
    key: "isEmptyRule",
    value: function isEmptyRule(rule) {
      var properties = rule.get("properties");
      return !(properties.get("field") !== null && properties.get("operator") !== null && properties.get("value").filter(function (val) {
        return val !== undefined;
      }).size > 0);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderHeaderWrapper(), this.renderChildrenWrapper(), this.renderFooterWrapper());
    }
  }, {
    key: "showNot",
    value: function showNot() {
      var config = this.props.config;
      return config.settings.showNot;
    }

    // show conjs for 2+ children?
  }, {
    key: "showConjs",
    value: function showConjs() {
      var _this$props = this.props,
        conjunctionOptions = _this$props.conjunctionOptions,
        children1 = _this$props.children1,
        config = _this$props.config;
      var conjunctionCount = Object.keys(conjunctionOptions).length;
      return conjunctionCount > 1 || this.showNot();
    }
  }, {
    key: "isOneChild",
    value: function isOneChild() {
      var children1 = this.props.children1;
      return children1 ? children1.size < 2 : true;
    }
  }, {
    key: "renderChildrenWrapper",
    value: function renderChildrenWrapper() {
      var children1 = this.props.children1;
      return children1 && /*#__PURE__*/_react["default"].createElement("div", {
        key: "group-children",
        className: classNames("group--children", !this.showConjs() ? "hide--conjs" : "", this.isOneChild() ? "hide--line" : "", this.isOneChild() ? "one--child" : "", this.childrenClassName())
      }, this.renderChildren());
    }
  }, {
    key: "renderHeaderWrapper",
    value: function renderHeaderWrapper() {
      var isGroupTopPosition = this.isGroupTopPosition();
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: "group-header",
        className: classNames("group--header", this.isOneChild() ? "one--child" : "")
      }, this.renderHeader(), isGroupTopPosition && this.renderBeforeActions(), isGroupTopPosition && this.renderActions(), isGroupTopPosition && this.renderAfterActions());
    }
  }, {
    key: "renderFooterWrapper",
    value: function renderFooterWrapper() {
      var isGroupTopPosition = this.isGroupTopPosition();
      return !isGroupTopPosition && /*#__PURE__*/_react["default"].createElement("div", {
        key: "group-footer",
        className: "group--footer"
      }, this.renderBeforeActions(), this.renderActions(), this.renderAfterActions());
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var _this$props2 = this.props,
        config = _this$props2.config,
        addRule = _this$props2.addRule,
        addGroup = _this$props2.addGroup,
        isLocked = _this$props2.isLocked,
        isTrueLocked = _this$props2.isTrueLocked,
        id = _this$props2.id;
      return /*#__PURE__*/_react["default"].createElement(_GroupActions.GroupActions, {
        config: config,
        addRule: addRule,
        addGroup: addGroup,
        canAddGroup: this.canAddGroup(),
        canAddRule: this.canAddRule(),
        canDeleteGroup: this.canDeleteGroup(),
        removeSelf: this.removeSelf,
        setLock: this.setLock,
        isLocked: isLocked,
        isTrueLocked: isTrueLocked,
        id: id
      });
    }
  }, {
    key: "canAddGroup",
    value: function canAddGroup() {
      return this.props.allowFurtherNesting;
    }
  }, {
    key: "canAddRule",
    value: function canAddRule() {
      var maxNumberOfRules = this.props.config.settings.maxNumberOfRules;
      var totalRulesCnt = this.props.totalRulesCnt;
      if (maxNumberOfRules) {
        return totalRulesCnt < maxNumberOfRules;
      }
      return true;
    }
  }, {
    key: "canDeleteGroup",
    value: function canDeleteGroup() {
      return !this.props.isRoot;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var children1 = this.props.children1;
      return children1 ? children1.map(this.renderItem).toList() : null;
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var props = this.props;
      var config = props.config,
        actions = props.actions,
        onDragStart = props.onDragStart,
        isLocked = props.isLocked;
      var isRuleGroup = item.get("type") == "group" && item.getIn(["properties", "field"]) != null;
      var type = isRuleGroup ? "rule_group" : item.get("type");
      return /*#__PURE__*/_react["default"].createElement(_Item.Item, (0, _extends2["default"])({}, this.extraPropsForItem(item), {
        key: item.get("id"),
        id: item.get("id"),
        groupId: props.id
        //path={props.path.push(item.get('id'))}
        ,
        path: item.get("path"),
        type: type,
        properties: item.get("properties"),
        config: config,
        actions: actions,
        children1: item.get("children1")
        //tree={props.tree}
        ,
        reordableNodesCnt: this.reordableNodesCntForItem(item),
        totalRulesCnt: this.totalRulesCntForItem(item),
        parentReordableNodesCnt: this.reordableNodesCnt(),
        onDragStart: onDragStart,
        isDraggingTempo: this.props.isDraggingTempo,
        isParentLocked: isLocked
      }));
    }
  }, {
    key: "extraPropsForItem",
    value: function extraPropsForItem(_item) {
      return {};
    }
  }, {
    key: "reordableNodesCnt",
    value: function reordableNodesCnt() {
      if (this.props.isLocked) return 0;
      return this.props.reordableNodesCnt;
    }
  }, {
    key: "totalRulesCntForItem",
    value: function totalRulesCntForItem(_item) {
      return this.props.totalRulesCnt;
    }
  }, {
    key: "reordableNodesCntForItem",
    value: function reordableNodesCntForItem(_item) {
      if (this.props.isLocked) return 0;
      return this.reordableNodesCnt();
    }
  }, {
    key: "showDragIcon",
    value: function showDragIcon() {
      var _this$props3 = this.props,
        config = _this$props3.config,
        isRoot = _this$props3.isRoot,
        isLocked = _this$props3.isLocked;
      var reordableNodesCnt = this.reordableNodesCnt();
      return config.settings.canReorder && !isRoot && reordableNodesCnt > 1 && !isLocked;
    }
  }, {
    key: "renderDrag",
    value: function renderDrag() {
      var handleDraggerMouseDown = this.props.handleDraggerMouseDown;
      var drag = this.showDragIcon() && /*#__PURE__*/_react["default"].createElement("span", {
        key: "group-drag-icon",
        className: "qb-drag-handler group--drag-handler",
        onMouseDown: handleDraggerMouseDown
      }, /*#__PURE__*/_react["default"].createElement(_utils.DragIcon, null), " ");
      return drag;
    }
  }, {
    key: "conjunctionOptions",
    value: function conjunctionOptions() {
      var conjunctionOptions = this.props.conjunctionOptions;
      return conjunctionOptions;
    }
  }, {
    key: "renderConjs",
    value: function renderConjs() {
      var _this$props4 = this.props,
        config = _this$props4.config,
        children1 = _this$props4.children1,
        id = _this$props4.id,
        selectedConjunction = _this$props4.selectedConjunction,
        setConjunction = _this$props4.setConjunction,
        not = _this$props4.not,
        setNot = _this$props4.setNot,
        isLocked = _this$props4.isLocked;
      var _config$settings = config.settings,
        immutableGroupsMode = _config$settings.immutableGroupsMode,
        Conjs = _config$settings.renderConjs,
        _showNot = _config$settings.showNot,
        notLabel = _config$settings.notLabel;
      var conjunctionOptions = this.conjunctionOptions();
      if (!this.showConjs()) return null;
      if (!children1 || !children1.size) return null;
      var renderProps = {
        disabled: this.isOneChild(),
        readonly: immutableGroupsMode || isLocked,
        selectedConjunction: selectedConjunction,
        setConjunction: immutableGroupsMode ? _utils.dummyFn : setConjunction,
        conjunctionOptions: conjunctionOptions,
        config: config,
        not: not || false,
        id: id,
        setNot: immutableGroupsMode ? _utils.dummyFn : setNot,
        notLabel: notLabel,
        showNot: this.showNot(),
        isLocked: isLocked
      };
      return /*#__PURE__*/_react["default"].createElement(Conjs, renderProps);
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "group--conjunctions"
      }, this.renderConjs(), this.renderDrag());
    }
  }]);
}(_react.PureComponent);
BasicGroup.propTypes = {
  //tree: PropTypes.instanceOf(Immutable.Map).isRequired,
  reordableNodesCnt: _propTypes["default"].number,
  conjunctionOptions: _propTypes["default"].object.isRequired,
  allowFurtherNesting: _propTypes["default"].bool.isRequired,
  isRoot: _propTypes["default"].bool.isRequired,
  not: _propTypes["default"].bool,
  selectedConjunction: _propTypes["default"].string,
  config: _propTypes["default"].object.isRequired,
  id: _propTypes["default"].string.isRequired,
  groupId: _propTypes["default"].string,
  path: _propTypes["default"].any,
  //instanceOf(Immutable.List)
  children1: _propTypes["default"].any,
  //instanceOf(Immutable.OrderedMap)
  isDraggingMe: _propTypes["default"].bool,
  isDraggingTempo: _propTypes["default"].bool,
  isLocked: _propTypes["default"].bool,
  isTrueLocked: _propTypes["default"].bool,
  //actions
  handleDraggerMouseDown: _propTypes["default"].func,
  onDragStart: _propTypes["default"].func,
  addRule: _propTypes["default"].func.isRequired,
  addGroup: _propTypes["default"].func.isRequired,
  removeSelf: _propTypes["default"].func.isRequired,
  setConjunction: _propTypes["default"].func.isRequired,
  setNot: _propTypes["default"].func.isRequired,
  setLock: _propTypes["default"].func.isRequired,
  actions: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = (0, _GroupContainer["default"])((0, _Draggable["default"])("group")((0, _utils.ConfirmFn)(BasicGroup)));