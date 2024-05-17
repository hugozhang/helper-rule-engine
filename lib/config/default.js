"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settings = void 0;
var Widgets = _interopRequireWildcard(require("../components/widgets"));
var _react = _interopRequireDefault(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var VanillaFieldSelect = Widgets.VanillaFieldSelect,
  VanillaConjs = Widgets.VanillaConjs,
  VanillaButton = Widgets.VanillaButton,
  VanillaButtonGroup = Widgets.VanillaButtonGroup,
  VanillaProvider = Widgets.VanillaProvider,
  VanillaValueSources = Widgets.VanillaValueSources,
  vanillaConfirm = Widgets.vanillaConfirm,
  VanillaSwitch = Widgets.VanillaSwitch;
var settings = exports.settings = {
  formatField: function formatField(field, parts, label2, fieldDefinition, config, isForDisplay) {
    if (isForDisplay) return label2;else return field;
  },
  renderField: function renderField(props) {
    return /*#__PURE__*/_react["default"].createElement(VanillaFieldSelect, props);
  },
  renderOperator: function renderOperator(props) {
    return /*#__PURE__*/_react["default"].createElement(VanillaFieldSelect, props);
  },
  renderFunc: function renderFunc(props) {
    return /*#__PURE__*/_react["default"].createElement(VanillaFieldSelect, props);
  },
  renderConjs: function renderConjs(props) {
    return /*#__PURE__*/_react["default"].createElement(VanillaConjs, props);
  },
  renderSwitch: function renderSwitch(props) {
    return /*#__PURE__*/_react["default"].createElement(VanillaSwitch, props);
  },
  renderButton: function renderButton(props) {
    return /*#__PURE__*/_react["default"].createElement(VanillaButton, props);
  },
  renderButtonGroup: function renderButtonGroup(props) {
    return /*#__PURE__*/_react["default"].createElement(VanillaButtonGroup, props);
  },
  renderProvider: function renderProvider(props) {
    return /*#__PURE__*/_react["default"].createElement(VanillaProvider, props);
  },
  renderValueSources: function renderValueSources(props) {
    return /*#__PURE__*/_react["default"].createElement(VanillaValueSources, props);
  },
  renderConfirm: vanillaConfirm,
  renderSwitchPrefix: function renderSwitchPrefix() {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Conditions");
  },
  valueSourcesInfo: {
    value: {}
  },
  fieldSeparator: ".",
  fieldSeparatorDisplay: ".",
  renderSize: "small",
  maxLabelsLength: 100,
  canReorder: true,
  canRegroup: true,
  showLock: false,
  canDeleteLocked: false,
  showNot: true,
  canLeaveEmptyGroup: true,
  shouldCreateEmptyGroup: false,
  forceShowConj: false,
  canShortMongoQuery: true,
  removeEmptyGroupsOnLoad: true,
  removeIncompleteRulesOnLoad: true,
  removeInvalidMultiSelectValuesOnLoad: true,
  groupActionsPosition: "topRight",
  // oneOf [topLeft, topCenter, topRight, bottomLeft, bottomCenter, bottomRight]
  setOpOnChangeField: ["keep", "default"],
  // 'default' (default if present), 'keep' (keep prev from last field), 'first', 'none'
  groupOperators: ["some", "all", "none"],
  convertableWidgets: {
    "number": ["slider", "rangeslider"],
    "slider": ["number", "rangeslider"],
    "rangeslider": ["number", "slider"],
    "text": ["textarea"],
    "textarea": ["text"]
  },
  // localization
  locale: {
    moment: "en"
  },
  valueLabel: "Value",
  valuePlaceholder: "Value",
  fieldLabel: "Field",
  operatorLabel: "Operator",
  funcLabel: "Function",
  fieldPlaceholder: "Select field",
  funcPlaceholder: "Select function",
  operatorPlaceholder: "Select operator",
  lockLabel: "Lock",
  lockedLabel: "Locked",
  deleteLabel: null,
  addGroupLabel: "Add group",
  addCaseLabel: "Add condition",
  addDefaultCaseLabel: "Add default condition",
  defaultCaseLabel: "Default:",
  addRuleLabel: "Add rule",
  addSubRuleLabel: "Add sub rule",
  delGroupLabel: "",
  notLabel: "Not",
  valueSourcesPopupTitle: "Select value source",
  removeRuleConfirmOptions: null,
  removeGroupConfirmOptions: null,
  defaultGroupConjunction: "AND",
  jsonLogic: {
    groupVarKey: "var",
    altVarKey: "var",
    lockedOp: "locked"
  }
};