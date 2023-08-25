"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _GroupContainer = _interopRequireDefault(require("../containers/GroupContainer"));
var _Draggable = _interopRequireDefault(require("../containers/Draggable"));
var _Group = require("./Group");
var _SwitchGroupActions = require("./SwitchGroupActions");
var _reactUtils = require("../../utils/reactUtils");
var _utils = require("../utils");
var _treeUtils = require("../../utils/treeUtils");
var _dec, _class, _class2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var classNames = require("classnames");
var SwitchGroup = (_dec = (0, _Draggable["default"])("group switch_group"), (0, _GroupContainer["default"])(_class = _dec(_class = (0, _utils.ConfirmFn)(_class = (_class2 = /*#__PURE__*/function (_BasicGroup) {
  (0, _inherits2["default"])(SwitchGroup, _BasicGroup);
  var _super = _createSuper(SwitchGroup);
  function SwitchGroup(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, SwitchGroup);
    _this = _super.call(this, props);
    _this.childrenClassName = function () {
      return "switch_group--children";
    };
    _this.renderFooterWrapper = function () {
      return null;
    };
    _this.hasDefaultCase = function () {
      return _this.props.children1.size && _this.props.children1.filter(function (c) {
        return c.get("children1") == null;
      }).size > 0;
    };
    (0, _reactUtils.useOnPropsChanged)((0, _assertThisInitialized2["default"])(_this));
    _this.onPropsChanged(props);
    return _this;
  }
  (0, _createClass2["default"])(SwitchGroup, [{
    key: "onPropsChanged",
    value: function onPropsChanged(nextProps) {}
  }, {
    key: "canAddGroup",
    value: function canAddGroup() {
      var maxNumberOfCases = this.props.config.settings.maxNumberOfCases;
      var totalCasesCnt = this.props.children1.size;
      if (maxNumberOfCases) {
        return totalCasesCnt < maxNumberOfCases;
      }
      return true;
    }
  }, {
    key: "canAddRule",
    value: function canAddRule() {
      return false;
    }
  }, {
    key: "reordableNodesCnt",
    value: function reordableNodesCnt() {
      // result will be passed to each case's `parentReordableNodesCnt` prop
      var totalCasesCnt = this.props.children1.size;
      var casesToReorder = totalCasesCnt;
      if (this.hasDefaultCase()) {
        casesToReorder--;
      }
      return casesToReorder;
    }
  }, {
    key: "totalRulesCntForItem",
    value: function totalRulesCntForItem(item) {
      return (0, _treeUtils.getTotalRulesCountInTree)(item);
    }
  }, {
    key: "reordableNodesCntForItem",
    value: function reordableNodesCntForItem(item) {
      if (this.props.isLocked) return 0;
      var _this$props$config$se = this.props.config.settings,
        canLeaveEmptyCase = _this$props$config$se.canLeaveEmptyCase,
        canRegroupCases = _this$props$config$se.canRegroupCases;
      var totalCasesCnt = this.props.children1.size;
      var casesToReorder = totalCasesCnt;
      if (this.hasDefaultCase()) {
        casesToReorder--;
      }
      var nodesInCase = (0, _treeUtils.getTotalReordableNodesCountInTree)(item);
      var cnt = nodesInCase;
      if (cnt == 1 && canRegroupCases && canLeaveEmptyCase && casesToReorder > 1) cnt = 111;
      return cnt;
    }
  }, {
    key: "renderHeaderWrapper",
    value: function renderHeaderWrapper() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: "group-header",
        className: classNames("group--header", this.isOneChild() ? "one--child" : "", this.showDragIcon() ? "with--drag" : "hide--drag", this.showConjs() && (!this.isOneChild() || this.showNot()) ? "with--conjs" : "hide--conjs")
      }, this.renderHeader(), this.renderActions());
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "group--conjunctions"
      }, this.renderConjs(), this.renderDrag());
    }
  }, {
    key: "renderConjs",
    value: function renderConjs() {
      var renderSwitchPrefix = this.props.config.settings.renderSwitchPrefix;
      return renderSwitchPrefix ? renderSwitchPrefix() : null;
    }
  }, {
    key: "showNot",
    value: function showNot() {
      return false;
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var _this$props = this.props,
        config = _this$props.config,
        addCaseGroup = _this$props.addCaseGroup,
        addDefaultCaseGroup = _this$props.addDefaultCaseGroup,
        isLocked = _this$props.isLocked,
        isTrueLocked = _this$props.isTrueLocked,
        id = _this$props.id;
      return /*#__PURE__*/_react["default"].createElement(_SwitchGroupActions.SwitchGroupActions, {
        config: config,
        addCaseGroup: addCaseGroup,
        addDefaultCaseGroup: addDefaultCaseGroup,
        canAddDefault: !this.hasDefaultCase(),
        canAddGroup: this.canAddGroup(),
        setLock: this.setLock,
        isLocked: isLocked,
        isTrueLocked: isTrueLocked,
        id: id
      });
    }
  }]);
  return SwitchGroup;
}(_Group.BasicGroup), _class2.propTypes = _objectSpread({}, _Group.BasicGroup.propTypes), _class2)) || _class) || _class) || _class);
var _default = SwitchGroup;
exports["default"] = _default;