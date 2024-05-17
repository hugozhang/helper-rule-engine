"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _GroupContainer = _interopRequireDefault(require("../containers/GroupContainer"));
var _Draggable = _interopRequireDefault(require("../containers/Draggable"));
var _Group = require("./Group");
var _RuleGroupExtActions = require("./RuleGroupExtActions");
var _FieldWrapper = _interopRequireDefault(require("../rule/FieldWrapper"));
var _OperatorWrapper = _interopRequireDefault(require("../rule/OperatorWrapper"));
var _reactUtils = require("../../utils/reactUtils");
var _utils = require("../utils");
var _configUtils = require("../../utils/configUtils");
var _Widget = _interopRequireDefault(require("../rule/Widget"));
var _dec, _class, _RuleGroupExt;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var classNames = require("classnames");
var RuleGroupExt = (_dec = (0, _Draggable["default"])("group rule_group_ext"), (0, _GroupContainer["default"])(_class = _dec(_class = (0, _utils.ConfirmFn)(_class = (_RuleGroupExt = /*#__PURE__*/function (_BasicGroup) {
  function RuleGroupExt(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RuleGroupExt);
    _this = _callSuper(this, RuleGroupExt, [props]);
    _this.childrenClassName = function () {
      return "rule_group_ext--children";
    };
    _this.renderFooterWrapper = function () {
      return null;
    };
    _this.canAddGroup = function () {
      return false;
    };
    _this.canAddRule = function () {
      return true;
    };
    _this.canDeleteGroup = function () {
      return true;
    };
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this.onPropsChanged(props);
    return _this;
  }
  (0, _inherits2["default"])(RuleGroupExt, _BasicGroup);
  return (0, _createClass2["default"])(RuleGroupExt, [{
    key: "onPropsChanged",
    value: function onPropsChanged(nextProps) {}
  }, {
    key: "renderHeaderWrapper",
    value: function renderHeaderWrapper() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: "group-header",
        className: classNames("group--header", this.isOneChild() ? "one--child" : "", this.showDragIcon() ? "with--drag" : "hide--drag", this.showConjs() && (!this.isOneChild() || this.showNot()) ? "with--conjs" : "hide--conjs")
      }, this.renderHeader(), this.renderGroupField(), this.renderActions());
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "group--conjunctions"
      }, this.renderConjs(), this.renderDrag());
    }
  }, {
    key: "renderGroupField",
    value: function renderGroupField() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "group--field--count--rule"
      }, this.renderField(), this.renderOperator(), this.renderWidget());
    }
  }, {
    key: "showNot",
    value: function showNot() {
      var _this$props = this.props,
        config = _this$props.config,
        selectedField = _this$props.selectedField,
        selectedOperator = _this$props.selectedOperator;
      var selectedFieldConfig = (0, _configUtils.getFieldConfig)(config, selectedField) || {};
      return selectedFieldConfig.showNot != undefined ? selectedFieldConfig.showNot : config.settings.showNot;
    }
  }, {
    key: "conjunctionOptions",
    value: function conjunctionOptions() {
      var _this$props2 = this.props,
        config = _this$props2.config,
        selectedField = _this$props2.selectedField,
        selectedOperator = _this$props2.selectedOperator;
      var selectedFieldConfig = (0, _configUtils.getFieldConfig)(config, selectedField) || {};
      var conjunctionOptions = (0, _get2["default"])((0, _getPrototypeOf2["default"])(RuleGroupExt.prototype), "conjunctionOptions", this).call(this);
      if (selectedFieldConfig.conjunctions) {
        var filtered = {};
        var _iterator = _createForOfIteratorHelper(selectedFieldConfig.conjunctions),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var k = _step.value;
            filtered[k] = conjunctionOptions[k];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        conjunctionOptions = filtered;
      }
      return conjunctionOptions;
    }
  }, {
    key: "renderField",
    value: function renderField() {
      var _this$props3 = this.props,
        config = _this$props3.config,
        selectedField = _this$props3.selectedField,
        setField = _this$props3.setField,
        parentField = _this$props3.parentField,
        id = _this$props3.id,
        groupId = _this$props3.groupId,
        isLocked = _this$props3.isLocked;
      var immutableFieldsMode = config.settings.immutableFieldsMode;
      return /*#__PURE__*/_react["default"].createElement(_FieldWrapper["default"], {
        key: "field",
        classname: "rule--field",
        config: config,
        selectedField: selectedField,
        setField: setField,
        parentField: parentField,
        readonly: immutableFieldsMode || isLocked,
        id: id,
        groupId: groupId
      });
    }
  }, {
    key: "renderOperator",
    value: function renderOperator() {
      var _this$props4 = this.props,
        config = _this$props4.config,
        selectedField = _this$props4.selectedField,
        selectedOperator = _this$props4.selectedOperator,
        setField = _this$props4.setField,
        setOperator = _this$props4.setOperator,
        isLocked = _this$props4.isLocked;
      var immutableFieldsMode = config.settings.immutableFieldsMode;
      var selectedFieldWidgetConfig = (0, _configUtils.getFieldWidgetConfig)(config, selectedField, selectedOperator) || {};
      var hideOperator = selectedFieldWidgetConfig.hideOperator;
      var showOperatorLabel = selectedField && hideOperator && selectedFieldWidgetConfig.operatorInlineLabel;
      var showOperator = selectedField && !hideOperator;
      return /*#__PURE__*/_react["default"].createElement(_OperatorWrapper["default"], {
        key: "operator",
        classname: "group--operator",
        config: config,
        selectedField: selectedField,
        selectedOperator: selectedOperator,
        setField: setField,
        setOperator: setOperator,
        selectedFieldPartsLabels: ["group"],
        showOperator: showOperator,
        showOperatorLabel: showOperatorLabel,
        selectedFieldWidgetConfig: selectedFieldWidgetConfig,
        readonly: immutableFieldsMode || isLocked,
        id: this.props.id,
        groupId: this.props.groupId
      });
    }
  }, {
    key: "renderWidget",
    value: function renderWidget() {
      var _this$props5 = this.props,
        config = _this$props5.config,
        selectedField = _this$props5.selectedField,
        selectedOperator = _this$props5.selectedOperator,
        isLocked = _this$props5.isLocked;
      var immutableValuesMode = config.settings.immutableValuesMode;
      var isFieldAndOpSelected = selectedField && selectedOperator;
      var showWidget = isFieldAndOpSelected;
      if (!showWidget) return null;
      var widget = /*#__PURE__*/_react["default"].createElement(_Widget["default"], {
        key: "values",
        isForRuleGruop: true,
        field: this.props.selectedField,
        operator: this.props.selectedOperator,
        value: this.props.value,
        valueSrc: "value",
        valueError: null,
        config: config,
        setValue: !immutableValuesMode ? this.props.setValue : _utils.dummyFn,
        setValueSrc: _utils.dummyFn,
        readonly: immutableValuesMode || isLocked,
        id: this.props.id,
        groupId: this.props.groupId
      });
      return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        key: "widget-for-" + this.props.selectedOperator,
        className: "rule--value"
      }, widget);
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var _this$props6 = this.props,
        config = _this$props6.config,
        addRule = _this$props6.addRule,
        isLocked = _this$props6.isLocked,
        isTrueLocked = _this$props6.isTrueLocked,
        id = _this$props6.id;
      return /*#__PURE__*/_react["default"].createElement(_RuleGroupExtActions.RuleGroupExtActions, {
        config: config,
        addRule: addRule,
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
    key: "reordableNodesCntForItem",
    value: function reordableNodesCntForItem(_item) {
      if (this.props.isLocked) return 0;
      var children1 = this.props.children1;
      return children1.size;
    }
  }, {
    key: "extraPropsForItem",
    value: function extraPropsForItem(_item) {
      return {
        parentField: this.props.selectedField
      };
    }
  }]);
}(_Group.BasicGroup), _RuleGroupExt.propTypes = _objectSpread(_objectSpread({}, _Group.BasicGroup.propTypes), {}, {
  selectedField: _propTypes["default"].string,
  selectedOperator: _propTypes["default"].string,
  value: _propTypes["default"].any,
  parentField: _propTypes["default"].string,
  setField: _propTypes["default"].func,
  setOperator: _propTypes["default"].func,
  setValue: _propTypes["default"].func
}), _RuleGroupExt)) || _class) || _class) || _class);
var _default = exports["default"] = RuleGroupExt;