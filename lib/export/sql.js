"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sqlFormat = exports._sqlFormat = void 0;
var _configUtils = require("../utils/configUtils");
var _ruleUtils = require("../utils/ruleUtils");
var _omit = _interopRequireDefault(require("lodash/omit"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _stuff = require("../utils/stuff");
var _defaultUtils = require("../utils/defaultUtils");
var _default = require("../config/default");
var _funcUtils = require("../utils/funcUtils");
var _immutable = require("immutable");
var _export = require("../utils/export");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var sqlFormat = function sqlFormat(tree, config) {
  return _sqlFormat(tree, config, false);
};
exports.sqlFormat = sqlFormat;
var _sqlFormat = function _sqlFormat(tree, config) {
  var returnErrors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  //meta is mutable
  var meta = {
    errors: []
  };
  var res = formatItem(tree, config, meta);
  if (returnErrors) {
    return [res, meta.errors];
  } else {
    if (meta.errors.length) console.warn("Errors while exporting to SQL:", meta.errors);
    return res;
  }
};
exports._sqlFormat = _sqlFormat;
var formatItem = function formatItem(item, config, meta) {
  if (!item) return undefined;
  var type = item.get("type");
  var children = item.get("children1");
  if ((type === "group" || type === "rule_group") && children && children.size) {
    return formatGroup(item, config, meta);
  } else if (type === "rule") {
    return formatRule(item, config, meta);
  }
  return undefined;
};
var formatGroup = function formatGroup(item, config, meta) {
  var type = item.get("type");
  var properties = item.get("properties") || new _immutable.Map();
  var children = item.get("children1");
  var groupField = type === "rule_group" ? properties.get("field") : null;
  var groupFieldDef = (0, _configUtils.getFieldConfig)(config, groupField) || {};
  if (groupFieldDef.mode == "array") {
    meta.errors.push("Aggregation is not supported for ".concat(groupField));
  }
  var not = properties.get("not");
  var list = children.map(function (currentChild) {
    return formatItem(currentChild, config, meta);
  }).filter(function (currentChild) {
    return typeof currentChild !== "undefined";
  });
  if (!list.size) return undefined;
  var conjunction = properties.get("conjunction");
  if (!conjunction) conjunction = (0, _defaultUtils.defaultConjunction)(config);
  var conjunctionDefinition = config.conjunctions[conjunction];
  return conjunctionDefinition.sqlFormatConj(list, conjunction, not);
};
var buildFnToFormatOp = function buildFnToFormatOp(operator, operatorDefinition) {
  var sqlOp = operatorDefinition.sqlOp || operator;
  var cardinality = (0, _stuff.defaultValue)(operatorDefinition.cardinality, 1);
  var fn;
  if (cardinality == 0) {
    fn = function fn(field, op, values, valueSrc, valueType, opDef, operatorOptions, fieldDef) {
      return "".concat(field, " ").concat(sqlOp);
    };
  } else if (cardinality == 1) {
    fn = function fn(field, op, value, valueSrc, valueType, opDef, operatorOptions, fieldDef) {
      return "".concat(field, " ").concat(sqlOp, " ").concat(value);
    };
  } else if (cardinality == 2) {
    // between
    fn = function fn(field, op, values, valueSrc, valueType, opDef, operatorOptions, fieldDef) {
      var valFrom = values.first();
      var valTo = values.get(1);
      return "".concat(field, " ").concat(sqlOp, " ").concat(valFrom, " AND ").concat(valTo);
    };
  }
  return fn;
};
var formatRule = function formatRule(item, config, meta) {
  var properties = item.get("properties") || new _immutable.Map();
  var field = properties.get("field");
  var operator = properties.get("operator");
  var operatorOptions = properties.get("operatorOptions");
  var iValueSrc = properties.get("valueSrc");
  var iValueType = properties.get("valueType");
  var iValue = properties.get("value");
  var asyncListValues = properties.get("asyncListValues");
  if (field == null || operator == null) return undefined;
  var fieldDefinition = (0, _configUtils.getFieldConfig)(config, field) || {};
  var opDef = (0, _configUtils.getOperatorConfig)(config, operator, field) || {};
  var reversedOp = opDef.reversedOp;
  var revOpDef = (0, _configUtils.getOperatorConfig)(config, reversedOp, field) || {};
  var cardinality = (0, _stuff.defaultValue)(opDef.cardinality, 1);

  // check op
  var isRev = false;
  var canFormatOp = opDef.sqlOp || opDef.sqlFormatOp;
  var canFormatRevOp = revOpDef.sqlOp || revOpDef.sqlFormatOp;
  if (!canFormatOp && !canFormatRevOp) {
    meta.errors.push("Operator ".concat(operator, " is not supported"));
    return undefined;
  }
  if (!canFormatRevOp && canFormatRevOp) {
    isRev = true;
    var _ref = [reversedOp, operator];
    operator = _ref[0];
    reversedOp = _ref[1];
    var _ref2 = [revOpDef, opDef];
    opDef = _ref2[0];
    revOpDef = _ref2[1];
  }

  //format value
  var valueSrcs = [];
  var valueTypes = [];
  var fvalue = iValue.map(function (currentValue, ind) {
    var valueSrc = iValueSrc ? iValueSrc.get(ind) : null;
    var valueType = iValueType ? iValueType.get(ind) : null;
    var cValue = (0, _funcUtils.completeValue)(currentValue, valueSrc, config);
    var widget = (0, _ruleUtils.getWidgetForFieldOp)(config, field, operator, valueSrc);
    var fieldWidgetDefinition = (0, _omit["default"])((0, _configUtils.getFieldWidgetConfig)(config, field, operator, widget, valueSrc), ["factory"]);
    var fv = formatValue(meta, config, cValue, valueSrc, valueType, fieldWidgetDefinition, fieldDefinition, operator, opDef, asyncListValues);
    if (fv !== undefined) {
      valueSrcs.push(valueSrc);
      valueTypes.push(valueType);
    }
    return fv;
  });
  var hasUndefinedValues = fvalue.filter(function (v) {
    return v === undefined;
  }).size > 0;
  if (hasUndefinedValues || fvalue.size < cardinality) return undefined;
  var formattedValue = cardinality == 1 ? fvalue.first() : fvalue;

  //find fn to format expr
  var fn = opDef.sqlFormatOp || buildFnToFormatOp(operator, opDef);
  if (!fn) {
    meta.errors.push("Operator ".concat(operator, " is not supported"));
    return undefined;
  }

  //format field
  var formattedField = formatField(meta, config, field);

  //format expr
  var args = [formattedField, operator, formattedValue, valueSrcs.length > 1 ? valueSrcs : valueSrcs[0], valueTypes.length > 1 ? valueTypes : valueTypes[0], (0, _omit["default"])(opDef, ["formatOp", "mongoFormatOp", "sqlFormatOp", "jsonLogic", "spelFormatOp"]), operatorOptions, fieldDefinition];
  var ret;
  ret = fn.apply(void 0, args);
  if (isRev) {
    ret = config.settings.sqlFormatReverse(ret);
  }
  if (ret === undefined) {
    meta.errors.push("Operator ".concat(operator, " is not supported for value source ").concat(valueSrcs.join(", ")));
    return undefined;
  }
  return ret;
};
var formatValue = function formatValue(meta, config, currentValue, valueSrc, valueType, fieldWidgetDef, fieldDef, operator, operatorDef, asyncListValues) {
  if (currentValue === undefined) return undefined;
  var ret;
  if (valueSrc == "field") {
    ret = formatField(meta, config, currentValue);
  } else if (valueSrc == "func") {
    ret = formatFunc(meta, config, currentValue);
  } else {
    if (typeof fieldWidgetDef.sqlFormatValue === "function") {
      var fn = fieldWidgetDef.sqlFormatValue;
      var args = [currentValue, _objectSpread(_objectSpread({}, (0, _pick["default"])(fieldDef, ["fieldSettings", "listValues"])), {}, {
        asyncListValues: asyncListValues
      }),
      //useful options: valueFormat for date/time
      (0, _omit["default"])(fieldWidgetDef, ["formatValue", "mongoFormatValue", "sqlFormatValue", "jsonLogic", "elasticSearchFormatValue", "spelFormatValue"])];
      if (operator) {
        args.push(operator);
        args.push(operatorDef);
      }
      if (valueSrc == "field") {
        var valFieldDefinition = (0, _configUtils.getFieldConfig)(config, currentValue) || {};
        args.push(valFieldDefinition);
      }
      ret = fn.apply(void 0, args);
    } else {
      ret = _export.SqlString.escape(currentValue);
    }
  }
  return ret;
};
var formatField = function formatField(meta, config, field) {
  if (!field) return;
  var fieldSeparator = config.settings.fieldSeparator;
  var fieldDefinition = (0, _configUtils.getFieldConfig)(config, field) || {};
  var fieldParts = Array.isArray(field) ? field : field.split(fieldSeparator);
  var _fieldKeys = (0, _ruleUtils.getFieldPath)(field, config);
  var fieldPartsLabels = (0, _ruleUtils.getFieldPathLabels)(field, config);
  var fieldFullLabel = fieldPartsLabels ? fieldPartsLabels.join(fieldSeparator) : null;
  var formatFieldFn = config.settings.formatField || _default.settings.formatField;
  var fieldName = (0, _ruleUtils.formatFieldName)(field, config, meta);
  var formattedField = formatFieldFn(fieldName, fieldParts, fieldFullLabel, fieldDefinition, config);
  return formattedField;
};
var formatFunc = function formatFunc(meta, config, currentValue) {
  var funcKey = currentValue.get("func");
  var args = currentValue.get("args");
  var funcConfig = (0, _configUtils.getFuncConfig)(config, funcKey);
  var funcName = funcConfig.sqlFunc || funcKey;
  var formattedArgs = {};
  for (var argKey in funcConfig.args) {
    var argConfig = funcConfig.args[argKey];
    var fieldDef = (0, _configUtils.getFieldConfig)(config, argConfig);
    var argVal = args ? args.get(argKey) : undefined;
    var argValue = argVal ? argVal.get("value") : undefined;
    var argValueSrc = argVal ? argVal.get("valueSrc") : undefined;
    var argAsyncListValues = argVal ? argVal.get("asyncListValues") : undefined;
    var formattedArgVal = formatValue(meta, config, argValue, argValueSrc, argConfig.type, fieldDef, argConfig, null, null, argAsyncListValues);
    if (argValue != undefined && formattedArgVal === undefined) {
      meta.errors.push("Can't format value of arg ".concat(argKey, " for func ").concat(funcKey));
      return undefined;
    }
    if (formattedArgVal !== undefined) {
      // skip optional in the end
      formattedArgs[argKey] = formattedArgVal;
    }
  }
  var ret;
  if (typeof funcConfig.sqlFormatFunc === "function") {
    var fn = funcConfig.sqlFormatFunc;
    var _args = [formattedArgs];
    ret = fn.apply(void 0, _args);
  } else {
    var argsStr = Object.entries(formattedArgs).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];
      return v;
    }).join(", ");
    ret = "".concat(funcName, "(").concat(argsStr, ")");
  }
  return ret;
};