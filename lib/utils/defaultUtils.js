"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRuleProperties = exports.defaultRule = exports.defaultRoot = exports.defaultOperatorOptions = exports.defaultOperator = exports.defaultItemProperties = exports.defaultGroupProperties = exports.defaultGroupConjunction = exports.defaultField = exports.defaultConjunction = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _immutable = _interopRequireDefault(require("immutable"));
var _uuid = _interopRequireDefault(require("./uuid"));
var _configUtils = require("./configUtils");
var _ruleUtils = require("../utils/ruleUtils");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultField = exports.defaultField = function defaultField(config) {
  var canGetFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var parentRuleGroupPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return typeof config.settings.defaultField === "function" ? config.settings.defaultField(parentRuleGroupPath) : config.settings.defaultField || (canGetFirst ? (0, _ruleUtils.getFirstField)(config, parentRuleGroupPath) : null);
};
var defaultOperator = exports.defaultOperator = function defaultOperator(config, field) {
  var canGetFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var fieldConfig = (0, _configUtils.getFieldConfig)(config, field);
  var fieldOperators = fieldConfig && fieldConfig.operators || [];
  var fieldDefaultOperator = fieldConfig && fieldConfig.defaultOperator;
  if (!fieldOperators.includes(fieldDefaultOperator)) fieldDefaultOperator = null;
  if (!fieldDefaultOperator && canGetFirst) fieldDefaultOperator = (0, _ruleUtils.getFirstOperator)(config, field);
  var op = typeof config.settings.defaultOperator === "function" ? config.settings.defaultOperator(field, fieldConfig) : fieldDefaultOperator;
  return op;
};

//used for complex operators like proximity
var defaultOperatorOptions = exports.defaultOperatorOptions = function defaultOperatorOptions(config, operator, field) {
  var operatorConfig = operator ? (0, _configUtils.getOperatorConfig)(config, operator, field) : null;
  if (!operatorConfig) return null; //new Immutable.Map();
  return operatorConfig.options ? new _immutable["default"].Map(operatorConfig.options && operatorConfig.options.defaults || {}) : null;
};
var defaultRuleProperties = exports.defaultRuleProperties = function defaultRuleProperties(config) {
  var parentRuleGroupPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var item = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var field = null,
    operator = null;
  var _config$settings = config.settings,
    setDefaultFieldAndOp = _config$settings.setDefaultFieldAndOp,
    showErrorMessage = _config$settings.showErrorMessage;
  if (item) {
    var _item$properties, _item$properties2;
    field = item === null || item === void 0 || (_item$properties = item.properties) === null || _item$properties === void 0 ? void 0 : _item$properties.field;
    operator = item === null || item === void 0 || (_item$properties2 = item.properties) === null || _item$properties2 === void 0 ? void 0 : _item$properties2.operator;
  } else if (setDefaultFieldAndOp) {
    field = defaultField(config, true, parentRuleGroupPath);
    operator = defaultOperator(config, field);
  }
  var current = new _immutable["default"].Map({
    field: field,
    operator: operator,
    value: new _immutable["default"].List(),
    valueSrc: new _immutable["default"].List(),
    //used for complex operators like proximity
    operatorOptions: defaultOperatorOptions(config, operator, field)
  });
  if (showErrorMessage) {
    current = current.set("valueError", new _immutable["default"].List());
  }
  if (field && operator) {
    var _getNewValueForFieldO = (0, _ruleUtils.getNewValueForFieldOp)(config, config, current, field, operator, "operator", false),
      newValue = _getNewValueForFieldO.newValue,
      newValueSrc = _getNewValueForFieldO.newValueSrc,
      newValueType = _getNewValueForFieldO.newValueType,
      newValueError = _getNewValueForFieldO.newValueError;
    current = current.set("value", newValue).set("valueSrc", newValueSrc).set("valueType", newValueType);
    if (showErrorMessage) {
      current = current.set("valueError", newValueError);
    }
  }
  return current;
};
var defaultGroupConjunction = exports.defaultGroupConjunction = function defaultGroupConjunction(config) {
  var fieldConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  fieldConfig = (0, _configUtils.getFieldConfig)(config, fieldConfig); // if `fieldConfig` is field name, not config
  var conjs = fieldConfig && fieldConfig.conjunctions || Object.keys(config.conjunctions);
  if (conjs.length == 1) return conjs[0];
  return config.settings.defaultGroupConjunction || config.settings.defaultConjunction || conjs[0];
};
var defaultConjunction = exports.defaultConjunction = function defaultConjunction(config) {
  return config.settings.defaultConjunction || Object.keys(config.conjunctions)[0];
};
var defaultGroupProperties = exports.defaultGroupProperties = function defaultGroupProperties(config) {
  var fieldConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return new _immutable["default"].Map({
    conjunction: defaultGroupConjunction(config, fieldConfig),
    not: false
  });
};
var defaultItemProperties = exports.defaultItemProperties = function defaultItemProperties(config, item) {
  var _item$properties3;
  return item && item.type == "group" ? defaultGroupProperties(config, item === null || item === void 0 || (_item$properties3 = item.properties) === null || _item$properties3 === void 0 ? void 0 : _item$properties3.field) : defaultRuleProperties(config, null, item);
};
var defaultRule = exports.defaultRule = function defaultRule(id, config) {
  return (0, _defineProperty2["default"])({}, id, new _immutable["default"].Map({
    type: "rule",
    id: id,
    properties: defaultRuleProperties(config)
  }));
};
var defaultRoot = exports.defaultRoot = function defaultRoot(config) {
  return new _immutable["default"].Map({
    type: "group",
    id: (0, _uuid["default"])(),
    children1: new _immutable["default"].OrderedMap(_objectSpread({}, defaultRule((0, _uuid["default"])(), config))),
    properties: defaultGroupProperties(config)
  });
};