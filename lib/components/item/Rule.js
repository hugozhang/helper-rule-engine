"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RuleContainer = _interopRequireDefault(require("../containers/RuleContainer"));
var _Draggable = _interopRequireDefault(require("../containers/Draggable"));
var _OperatorWrapper = _interopRequireDefault(require("../rule/OperatorWrapper"));
var _FieldWrapper = _interopRequireDefault(require("../rule/FieldWrapper"));
var _Widget = _interopRequireDefault(require("../rule/Widget"));
var _OperatorOptions = _interopRequireDefault(require("../rule/OperatorOptions"));
var _configUtils = require("../../utils/configUtils");
var _ruleUtils = require("../../utils/ruleUtils");
var _reactUtils = require("../../utils/reactUtils");
var _utils = require("../utils");
var _dec, _class, _Rule;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var classNames = require("classnames");
var Rule = (_dec = (0, _Draggable["default"])("rule"), (0, _RuleContainer["default"])(_class = _dec(_class = (0, _utils.ConfirmFn)(_class = (_Rule = /*#__PURE__*/function (_PureComponent) {
  function Rule(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Rule);
    _this = _callSuper(this, Rule, [props]);
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this.removeSelf = _this.removeSelf.bind(_this);
    _this.setLock = _this.setLock.bind(_this);
    _this.onPropsChanged(props);
    return _this;
  }
  (0, _inherits2["default"])(Rule, _PureComponent);
  return (0, _createClass2["default"])(Rule, [{
    key: "onPropsChanged",
    value: function onPropsChanged(nextProps) {
      var prevProps = this.props;
      var keysForMeta = ["selectedField", "selectedOperator", "config", "reordableNodesCnt", "isLocked"];
      var needUpdateMeta = !this.meta || keysForMeta.map(function (k) {
        return nextProps[k] !== prevProps[k];
      }).filter(function (ch) {
        return ch;
      }).length > 0;
      if (needUpdateMeta) {
        this.meta = this.getMeta(nextProps);
      }
    }
  }, {
    key: "getMeta",
    value: function getMeta(_ref) {
      var selectedField = _ref.selectedField,
        selectedOperator = _ref.selectedOperator,
        config = _ref.config,
        reordableNodesCnt = _ref.reordableNodesCnt,
        isLocked = _ref.isLocked;
      var selectedFieldPartsLabels = (0, _ruleUtils.getFieldPathLabels)(selectedField, config);
      var selectedFieldConfig = (0, _configUtils.getFieldConfig)(config, selectedField);
      var isSelectedGroup = selectedFieldConfig && selectedFieldConfig.type == "!struct";
      var isFieldAndOpSelected = selectedField && selectedOperator && !isSelectedGroup;
      var selectedOperatorConfig = (0, _configUtils.getOperatorConfig)(config, selectedOperator, selectedField);
      var selectedOperatorHasOptions = selectedOperatorConfig && selectedOperatorConfig.options != null;
      var selectedFieldWidgetConfig = (0, _configUtils.getFieldWidgetConfig)(config, selectedField, selectedOperator) || {};
      var hideOperator = selectedFieldWidgetConfig.hideOperator;
      var showDragIcon = config.settings.canReorder && reordableNodesCnt > 1 && !isLocked;
      var showOperator = selectedField && !hideOperator;
      var showOperatorLabel = selectedField && hideOperator && selectedFieldWidgetConfig.operatorInlineLabel;
      var showWidget = isFieldAndOpSelected;
      var showOperatorOptions = isFieldAndOpSelected && selectedOperatorHasOptions;
      return {
        selectedFieldPartsLabels: selectedFieldPartsLabels,
        selectedFieldWidgetConfig: selectedFieldWidgetConfig,
        showDragIcon: showDragIcon,
        showOperator: showOperator,
        showOperatorLabel: showOperatorLabel,
        showWidget: showWidget,
        showOperatorOptions: showOperatorOptions
      };
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
        confirmOptions = _this$props$config$se.removeRuleConfirmOptions;
      var doRemove = function doRemove() {
        _this2.props.removeSelf();
      };
      if (confirmOptions && !this.isEmptyCurrentRule()) {
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
    key: "isEmptyCurrentRule",
    value: function isEmptyCurrentRule() {
      return !(this.props.selectedField !== null && this.props.selectedOperator !== null && this.props.value.filter(function (val) {
        return val !== undefined;
      }).size > 0);
    }
  }, {
    key: "renderField",
    value: function renderField() {
      var _this$props = this.props,
        config = _this$props.config,
        isLocked = _this$props.isLocked;
      var immutableFieldsMode = config.settings.immutableFieldsMode;
      return /*#__PURE__*/_react["default"].createElement(_FieldWrapper["default"], {
        key: "field",
        classname: "rule--field",
        config: config,
        selectedField: this.props.selectedField,
        setField: !immutableFieldsMode ? this.props.setField : _utils.dummyFn,
        parentField: this.props.parentField,
        readonly: immutableFieldsMode || isLocked,
        id: this.props.id,
        groupId: this.props.groupId
      });
    }
  }, {
    key: "renderOperator",
    value: function renderOperator() {
      var _this$props2 = this.props,
        config = _this$props2.config,
        isLocked = _this$props2.isLocked;
      var _this$meta = this.meta,
        selectedFieldPartsLabels = _this$meta.selectedFieldPartsLabels,
        selectedFieldWidgetConfig = _this$meta.selectedFieldWidgetConfig,
        showOperator = _this$meta.showOperator,
        showOperatorLabel = _this$meta.showOperatorLabel;
      var immutableOpsMode = config.settings.immutableOpsMode;
      return /*#__PURE__*/_react["default"].createElement(_OperatorWrapper["default"], {
        key: "operator",
        config: config,
        selectedField: this.props.selectedField,
        selectedOperator: this.props.selectedOperator,
        setOperator: !immutableOpsMode ? this.props.setOperator : _utils.dummyFn,
        selectedFieldPartsLabels: selectedFieldPartsLabels,
        showOperator: showOperator,
        showOperatorLabel: showOperatorLabel,
        selectedFieldWidgetConfig: selectedFieldWidgetConfig,
        readonly: immutableOpsMode || isLocked,
        id: this.props.id,
        groupId: this.props.groupId
      });
    }
  }, {
    key: "renderWidget",
    value: function renderWidget() {
      var _this$props3 = this.props,
        config = _this$props3.config,
        valueError = _this$props3.valueError,
        isLocked = _this$props3.isLocked;
      var showWidget = this.meta.showWidget;
      var immutableValuesMode = config.settings.immutableValuesMode;
      if (!showWidget) return null;
      var widget = /*#__PURE__*/_react["default"].createElement(_Widget["default"], {
        key: "values",
        field: this.props.selectedField,
        parentField: this.props.parentField,
        operator: this.props.selectedOperator,
        value: this.props.value,
        valueSrc: this.props.valueSrc,
        asyncListValues: this.props.asyncListValues,
        valueError: valueError,
        config: config,
        setValue: !immutableValuesMode ? this.props.setValue : _utils.dummyFn,
        setValueSrc: !immutableValuesMode ? this.props.setValueSrc : _utils.dummyFn,
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
    key: "renderOperatorOptions",
    value: function renderOperatorOptions() {
      var config = this.props.config;
      var showOperatorOptions = this.meta.showOperatorOptions;
      var _config$settings = config.settings,
        immutableOpsMode = _config$settings.immutableOpsMode,
        immutableValuesMode = _config$settings.immutableValuesMode;
      if (!showOperatorOptions) return null;
      var opOpts = /*#__PURE__*/_react["default"].createElement(_OperatorOptions["default"], {
        key: "operatorOptions",
        selectedField: this.props.selectedField,
        selectedOperator: this.props.selectedOperator,
        operatorOptions: this.props.operatorOptions,
        setOperatorOption: !immutableOpsMode ? this.props.setOperatorOption : _utils.dummyFn,
        config: config,
        readonly: immutableValuesMode
      });
      return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        key: "op-options-for-" + this.props.selectedOperator,
        className: "rule--operator-options"
      }, opOpts);
    }
  }, {
    key: "renderBeforeWidget",
    value: function renderBeforeWidget() {
      var config = this.props.config;
      var renderBeforeWidget = config.settings.renderBeforeWidget;
      return renderBeforeWidget && /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        key: "before-widget-for-" + this.props.selectedOperator,
        className: "rule--before-widget"
      }, typeof renderBeforeWidget === "function" ? renderBeforeWidget(this.props) : renderBeforeWidget);
    }
  }, {
    key: "renderAfterWidget",
    value: function renderAfterWidget() {
      var config = this.props.config;
      var renderAfterWidget = config.settings.renderAfterWidget;
      return renderAfterWidget && /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        key: "after-widget-for-" + this.props.selectedOperator,
        className: "rule--after-widget"
      }, typeof renderAfterWidget === "function" ? renderAfterWidget(this.props) : renderAfterWidget);
    }
  }, {
    key: "renderError",
    value: function renderError() {
      var _this$props4 = this.props,
        config = _this$props4.config,
        valueError = _this$props4.valueError;
      var _config$settings2 = config.settings,
        renderRuleError = _config$settings2.renderRuleError,
        showErrorMessage = _config$settings2.showErrorMessage;
      var oneValueError = valueError && valueError.toArray().filter(function (e) {
        return !!e;
      }).shift() || null;
      return showErrorMessage && oneValueError && /*#__PURE__*/_react["default"].createElement("div", {
        className: "rule--error"
      }, renderRuleError ? renderRuleError({
        error: oneValueError
      }) : oneValueError);
    }
  }, {
    key: "renderDrag",
    value: function renderDrag() {
      var showDragIcon = this.meta.showDragIcon;
      return showDragIcon && /*#__PURE__*/_react["default"].createElement("span", {
        key: "rule-drag-icon",
        className: "qb-drag-handler rule--drag-handler",
        onMouseDown: this.props.handleDraggerMouseDown
      }, /*#__PURE__*/_react["default"].createElement(_utils.DragIcon, null), " ");
    }
  }, {
    key: "renderDel",
    value: function renderDel() {
      var _this$props5 = this.props,
        config = _this$props5.config,
        isLocked = _this$props5.isLocked;
      var _config$settings3 = config.settings,
        deleteLabel = _config$settings3.deleteLabel,
        immutableGroupsMode = _config$settings3.immutableGroupsMode,
        Btn = _config$settings3.renderButton,
        canDeleteLocked = _config$settings3.canDeleteLocked;
      return !immutableGroupsMode && (!isLocked || isLocked && canDeleteLocked) && /*#__PURE__*/_react["default"].createElement(Btn, {
        type: "delRule",
        onClick: this.removeSelf,
        label: deleteLabel,
        config: config
      });
    }
  }, {
    key: "renderLock",
    value: function renderLock() {
      var _this$props6 = this.props,
        config = _this$props6.config,
        isLocked = _this$props6.isLocked,
        isTrueLocked = _this$props6.isTrueLocked,
        id = _this$props6.id;
      var _config$settings4 = config.settings,
        lockLabel = _config$settings4.lockLabel,
        lockedLabel = _config$settings4.lockedLabel,
        showLock = _config$settings4.showLock,
        Switch = _config$settings4.renderSwitch;
      return showLock && !(isLocked && !isTrueLocked) && /*#__PURE__*/_react["default"].createElement(Switch, {
        type: "lock",
        id: id,
        value: isLocked,
        setValue: this.setLock,
        label: lockLabel,
        checkedLabel: lockedLabel,
        hideLabel: true,
        config: config
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$meta2 = this.meta,
        showOperatorOptions = _this$meta2.showOperatorOptions,
        selectedFieldWidgetConfig = _this$meta2.selectedFieldWidgetConfig;
      var _this$props7 = this.props,
        valueSrc = _this$props7.valueSrc,
        value = _this$props7.value,
        config = _this$props7.config;
      var canShrinkValue = valueSrc.first() == "value" && !showOperatorOptions && value.size == 1 && selectedFieldWidgetConfig.fullWidth;
      var BtnGrp = config.settings.renderButtonGroup;
      var parts = [this.renderField(), this.renderOperator(), this.renderBeforeWidget(), this.renderWidget(), this.renderAfterWidget(), this.renderOperatorOptions()];
      var body = /*#__PURE__*/_react["default"].createElement("div", {
        key: "rule-body",
        className: classNames("rule--body", canShrinkValue && "can--shrink--value")
      }, parts);
      var error = this.renderError();
      var drag = this.renderDrag();
      var lock = this.renderLock();
      var del = this.renderDel();
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, drag, /*#__PURE__*/_react["default"].createElement("div", {
        className: "rule--body--wrapper"
      }, body, error), /*#__PURE__*/_react["default"].createElement("div", {
        className: "rule--header"
      }, /*#__PURE__*/_react["default"].createElement(BtnGrp, {
        config: config
      }, lock, del)));
    }
  }]);
}(_react.PureComponent), _Rule.propTypes = {
  id: _propTypes["default"].string.isRequired,
  groupId: _propTypes["default"].string,
  selectedField: _propTypes["default"].string,
  selectedOperator: _propTypes["default"].string,
  operatorOptions: _propTypes["default"].object,
  config: _propTypes["default"].object.isRequired,
  value: _propTypes["default"].any,
  //depends on widget
  valueSrc: _propTypes["default"].any,
  asyncListValues: _propTypes["default"].array,
  isDraggingMe: _propTypes["default"].bool,
  isDraggingTempo: _propTypes["default"].bool,
  parentField: _propTypes["default"].string,
  //from RuleGroup
  valueError: _propTypes["default"].any,
  isLocked: _propTypes["default"].bool,
  isTrueLocked: _propTypes["default"].bool,
  //path: PropTypes.instanceOf(Immutable.List),
  //actions
  handleDraggerMouseDown: _propTypes["default"].func,
  setField: _propTypes["default"].func,
  setOperator: _propTypes["default"].func,
  setOperatorOption: _propTypes["default"].func,
  setLock: _propTypes["default"].func,
  removeSelf: _propTypes["default"].func,
  setValue: _propTypes["default"].func,
  setValueSrc: _propTypes["default"].func,
  reordableNodesCnt: _propTypes["default"].number
}, _Rule)) || _class) || _class) || _class);
var _default = exports["default"] = Rule;