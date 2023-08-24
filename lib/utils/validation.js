"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateValue = exports.validateTree = void 0;
var _configUtils = require("./configUtils");
var _ruleUtils = require("../utils/ruleUtils");
var _stuff = require("../utils/stuff");
var _defaultUtils = require("../utils/defaultUtils");
var _omit = _interopRequireDefault(require("lodash/omit"));
var _immutable = require("immutable");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var typeOf = function typeOf(v) {
  if (_typeof(v) == "object" && v !== null && Array.isArray(v)) return "array";else return _typeof(v);
};
var isTypeOf = function isTypeOf(v, type) {
  if (typeOf(v) == type) return true;
  if (type == "number" && !isNaN(v)) return true; //can be casted
  return false;
};
var validateTree = function validateTree(tree, _oldTree, config, oldConfig, removeEmptyGroups, removeIncompleteRules) {
  if (removeEmptyGroups === undefined) {
    removeEmptyGroups = config.settings.removeEmptyGroupsOnLoad;
  }
  if (removeIncompleteRules === undefined) {
    removeIncompleteRules = config.settings.removeIncompleteRulesOnLoad;
  }
  var c = {
    config: config,
    oldConfig: oldConfig,
    removeEmptyGroups: removeEmptyGroups,
    removeIncompleteRules: removeIncompleteRules
  };
  return validateItem(tree, [], null, {}, c);
};
exports.validateTree = validateTree;
function validateItem(item, path, itemId, meta, c) {
  var type = item.get("type");
  var children = item.get("children1");
  if ((type === "group" || type === "rule_group" || type == "case_group" || type == "switch_group") && children && children.size) {
    return validateGroup(item, path, itemId, meta, c);
  } else if (type === "rule") {
    return validateRule(item, path, itemId, meta, c);
  } else {
    return item;
  }
}
function validateGroup(item, path, itemId, meta, c) {
  var removeEmptyGroups = c.removeEmptyGroups;
  var id = item.get("id");
  var children = item.get("children1");
  var oldChildren = children;
  if (!id && itemId) {
    id = itemId;
    item = item.set("id", id);
    meta.sanitized = true;
  }

  //validate children
  var submeta = {};
  children = children.map(function (currentChild, childId) {
    return validateItem(currentChild, path.concat(id), childId, submeta, c);
  });
  if (removeEmptyGroups) children = children.filter(function (currentChild) {
    return currentChild != undefined;
  });
  var sanitized = submeta.sanitized || oldChildren.size != children.size;
  if (!children.size && removeEmptyGroups && path.length) {
    sanitized = true;
    item = undefined;
  }
  if (sanitized) meta.sanitized = true;
  if (sanitized && item) item = item.set("children1", children);
  return item;
}
function validateRule(item, path, itemId, meta, c) {
  var removeIncompleteRules = c.removeIncompleteRules,
    config = c.config,
    oldConfig = c.oldConfig;
  var showErrorMessage = config.settings.showErrorMessage;
  var id = item.get("id");
  var properties = item.get("properties");
  var field = properties.get("field") || null;
  var operator = properties.get("operator") || null;
  var operatorOptions = properties.get("operatorOptions");
  var valueSrc = properties.get("valueSrc");
  var value = properties.get("value");
  var valueError = properties.get("valueError");
  var oldSerialized = {
    field: field,
    operator: operator,
    operatorOptions: operatorOptions ? operatorOptions.toJS() : {},
    valueSrc: valueSrc ? valueSrc.toJS() : null,
    value: value ? value.toJS() : null,
    valueError: valueError ? valueError.toJS() : null
  };
  var _wasValid = field && operator && value && !value.includes(undefined);
  if (!id && itemId) {
    id = itemId;
    item = item.set("id", id);
    meta.sanitized = true;
  }

  //validate field
  var fieldDefinition = field ? (0, _configUtils.getFieldConfig)(config, field) : null;
  if (field && !fieldDefinition) {
    _stuff.logger.warn("No config for field ".concat(field));
    field = null;
  }
  if (field == null) {
    properties = ["operator", "operatorOptions", "valueSrc", "value"].reduce(function (map, key) {
      return map["delete"](key);
    }, properties);
    operator = null;
  }

  //validate operator
  // Backward compatibility: obsolete operator range_between
  if (operator == "range_between" || operator == "range_not_between") {
    operator = operator == "range_between" ? "between" : "not_between";
    console.info("Fixed operator ".concat(properties.get("operator"), " to ").concat(operator));
    properties = properties.set("operator", operator);
  }
  var operatorDefinition = operator ? (0, _configUtils.getOperatorConfig)(config, operator, field) : null;
  if (operator && !operatorDefinition) {
    console.warn("No config for operator ".concat(operator));
    operator = null;
  }
  var availOps = field ? (0, _ruleUtils.getOperatorsForField)(config, field) : [];
  if (!availOps) {
    console.warn("Type of field ".concat(field, " is not supported"));
    operator = null;
  } else if (operator && availOps.indexOf(operator) == -1) {
    if (operator == "is_empty" || operator == "is_not_empty") {
      // Backward compatibility: is_empty #494
      operator = operator == "is_empty" ? "is_null" : "is_not_null";
      console.info("Fixed operator ".concat(properties.get("operator"), " to ").concat(operator, " for ").concat(field));
      properties = properties.set("operator", operator);
    } else {
      console.warn("Operator ".concat(operator, " is not supported for field ").concat(field));
      operator = null;
    }
  }
  if (operator == null) {
    properties = properties["delete"]("operatorOptions");
    properties = properties["delete"]("valueSrc");
    properties = properties["delete"]("value");
  }

  //validate operator options
  operatorOptions = properties.get("operatorOptions");
  var _operatorCardinality = operator ? (0, _stuff.defaultValue)(operatorDefinition.cardinality, 1) : null;
  if (!operator || operatorOptions && !operatorDefinition.options) {
    operatorOptions = null;
    properties = properties["delete"]("operatorOptions");
  } else if (operator && !operatorOptions && operatorDefinition.options) {
    operatorOptions = (0, _defaultUtils.defaultOperatorOptions)(config, operator, field);
    properties = properties.set("operatorOptions", operatorOptions);
  }

  //validate values
  valueSrc = properties.get("valueSrc");
  value = properties.get("value");
  var _getNewValueForFieldO = (0, _ruleUtils.getNewValueForFieldOp)(config, oldConfig, properties, field, operator, null, true),
    newValue = _getNewValueForFieldO.newValue,
    newValueSrc = _getNewValueForFieldO.newValueSrc,
    newValueError = _getNewValueForFieldO.newValueError;
  value = newValue;
  valueSrc = newValueSrc;
  valueError = newValueError;
  properties = properties.set("value", value);
  properties = properties.set("valueSrc", valueSrc);
  if (showErrorMessage) {
    properties = properties.set("valueError", valueError);
  }
  var newSerialized = {
    field: field,
    operator: operator,
    operatorOptions: operatorOptions ? operatorOptions.toJS() : {},
    valueSrc: valueSrc ? valueSrc.toJS() : null,
    value: value ? value.toJS() : null,
    valueError: valueError ? valueError.toJS() : null
  };
  var sanitized = !(0, _stuff.deepEqual)(oldSerialized, newSerialized);
  var isComplete = field && operator && value && !value.includes(undefined);
  if (sanitized) meta.sanitized = true;
  if (!isComplete && removeIncompleteRules) item = undefined;else if (sanitized) item = item.set("properties", properties);
  return item;
}

/**
 * 
 * @param {bool} canFix true is useful for func values to remove bad args
 * @param {bool} isEndValue false if value is in process of editing by user
 * @param {bool} isRawValue false is used only internally from validateFuncValue
 * @return {array} [validError, fixedValue] - if validError === null and canFix == true, fixedValue can differ from value if was fixed
 */
var validateValue = function validateValue(config, leftField, field, operator, value, valueType, valueSrc, asyncListValues) {
  var canFix = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  var isEndValue = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
  var isRawValue = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : true;
  var validError = null;
  var fixedValue = value;
  if (value != null) {
    if (valueSrc == "field") {
      var _validateFieldValue = validateFieldValue(leftField, field, value, valueSrc, valueType, asyncListValues, config, operator, isEndValue, canFix);
      var _validateFieldValue2 = _slicedToArray(_validateFieldValue, 2);
      validError = _validateFieldValue2[0];
      fixedValue = _validateFieldValue2[1];
    } else if (valueSrc == "func") {
      var _validateFuncValue = validateFuncValue(leftField, field, value, valueSrc, valueType, asyncListValues, config, operator, isEndValue, canFix);
      var _validateFuncValue2 = _slicedToArray(_validateFuncValue, 2);
      validError = _validateFuncValue2[0];
      fixedValue = _validateFuncValue2[1];
    } else if (valueSrc == "value" || !valueSrc) {
      var _validateNormalValue = validateNormalValue(leftField, field, value, valueSrc, valueType, asyncListValues, config, operator, isEndValue, canFix);
      var _validateNormalValue2 = _slicedToArray(_validateNormalValue, 2);
      validError = _validateNormalValue2[0];
      fixedValue = _validateNormalValue2[1];
    }
    if (!validError) {
      var fieldConfig = (0, _configUtils.getFieldConfig)(config, field);
      var w = (0, _ruleUtils.getWidgetForFieldOp)(config, field, operator, valueSrc);
      var operatorDefinition = operator ? (0, _configUtils.getOperatorConfig)(config, operator, field) : null;
      var fieldWidgetDefinition = (0, _omit["default"])((0, _configUtils.getFieldWidgetConfig)(config, field, operator, w, valueSrc), ["factory"]);
      var rightFieldDefinition = valueSrc == "field" ? (0, _configUtils.getFieldConfig)(config, value) : null;
      var fieldSettings = fieldWidgetDefinition; // widget definition merged with fieldSettings

      var fn = fieldWidgetDefinition.validateValue;
      if (typeof fn == "function") {
        var args = [fixedValue, fieldSettings, operator, operatorDefinition];
        if (valueSrc == "field") args.push(rightFieldDefinition);
        var validResult = fn.apply(void 0, args);
        if (typeof validResult == "boolean") {
          if (validResult == false) validError = "Invalid value";
        } else {
          validError = validResult;
        }
      }
    }
  }
  if (isRawValue && validError) {
    console.warn("[RAQB validate]", "Field ".concat(field, ": ").concat(validError));
  }
  return [validError, validError ? value : fixedValue];
};
exports.validateValue = validateValue;
var validateValueInList = function validateValueInList(value, listValues) {
  var values = _immutable.List.isList(value) ? value.toJS() : value instanceof Array ? _toConsumableArray(value) : undefined;
  if (values) {
    for (var i = 0; i < values.length; i++) {
      var vv = (0, _stuff.getItemInListValues)(listValues, values[i]);
      if (vv == undefined) {
        return ["Value ".concat(value[i], " is not in list of values"), values];
      } else {
        values[i] = vv.value;
      }
    }
    return [null, values];
  } else {
    var _vv = (0, _stuff.getItemInListValues)(listValues, value);
    if (_vv == undefined) {
      return ["Value ".concat(value, " is not in list of values"), value];
    } else {
      value = _vv.value;
    }
    return [null, value];
  }
};

/**
* 
*/
var validateNormalValue = function validateNormalValue(leftField, field, value, valueSrc, valueType, asyncListValues, config) {
  var operator = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
  var isEndValue = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  var canFix = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
  var fixedValue = value;
  if (field) {
    var fieldConfig = (0, _configUtils.getFieldConfig)(config, field);
    var w = (0, _ruleUtils.getWidgetForFieldOp)(config, field, operator, valueSrc);
    var wConfig = config.widgets[w];
    var wType = wConfig.type;
    var jsType = wConfig.jsType;
    var fieldSettings = fieldConfig.fieldSettings;
    if (valueType != wType) return ["Value should have type ".concat(wType, ", but got value of type ").concat(valueType), value];
    if (jsType && !isTypeOf(value, jsType) && !fieldSettings.listValues) {
      //tip: can skip tye check for listValues
      return ["Value should have JS type ".concat(jsType, ", but got value of type ").concat(_typeof(value)), value];
    }
    if (fieldSettings) {
      var listValues = asyncListValues || fieldSettings.listValues;
      if (listValues && !fieldSettings.allowCustomValues) {
        return validateValueInList(value, listValues);
      }
      if (fieldSettings.min != null && value < fieldSettings.min) {
        return ["Value ".concat(value, " < min ").concat(fieldSettings.min), value];
      }
      if (fieldSettings.max != null && value > fieldSettings.max) {
        return ["Value ".concat(value, " > max ").concat(fieldSettings.max), value];
      }
    }
  }
  return [null, value];
};

/**
* 
*/
var validateFieldValue = function validateFieldValue(leftField, field, value, _valueSrc, valueType, asyncListValues, config) {
  var operator = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
  var isEndValue = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  var canFix = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
  var fieldSeparator = config.settings.fieldSeparator;
  var isFuncArg = _typeof(field) == "object" && (field === null || field === void 0 ? void 0 : field._isFuncArg);
  var leftFieldStr = Array.isArray(leftField) ? leftField.join(fieldSeparator) : leftField;
  var rightFieldStr = Array.isArray(value) ? value.join(fieldSeparator) : value;
  var rightFieldDefinition = (0, _configUtils.getFieldConfig)(config, value);
  if (!rightFieldDefinition) return ["Unknown field ".concat(value), value];
  if (rightFieldStr == leftFieldStr && !isFuncArg) return ["Can't compare field ".concat(leftField, " with itself"), value];
  if (valueType && valueType != rightFieldDefinition.type) return ["Field ".concat(value, " is of type ").concat(rightFieldDefinition.type, ", but expected ").concat(valueType), value];
  return [null, value];
};

/**
* 
*/
var validateFuncValue = function validateFuncValue(leftField, field, value, _valueSrc, valueType, asyncListValues, config) {
  var operator = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
  var isEndValue = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  var canFix = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
  var fixedValue = value;
  if (value) {
    var funcKey = value.get("func");
    if (funcKey) {
      var funcConfig = (0, _configUtils.getFuncConfig)(config, funcKey);
      if (funcConfig) {
        if (valueType && funcConfig.returnType != valueType) return ["Function ".concat(funcKey, " should return value of type ").concat(funcConfig.returnType, ", but got ").concat(valueType), value];
        for (var argKey in funcConfig.args) {
          var argConfig = funcConfig.args[argKey];
          var args = fixedValue.get("args");
          var argVal = args ? args.get(argKey) : undefined;
          var fieldDef = (0, _configUtils.getFieldConfig)(config, argConfig);
          var argValue = argVal ? argVal.get("value") : undefined;
          var argValueSrc = argVal ? argVal.get("valueSrc") : undefined;
          if (argValue !== undefined) {
            var _validateValue = validateValue(config, leftField, fieldDef, operator, argValue, argConfig.type, argValueSrc, asyncListValues, canFix, isEndValue, false),
              _validateValue2 = _slicedToArray(_validateValue, 2),
              argValidError = _validateValue2[0],
              fixedArgVal = _validateValue2[1];
            if (argValidError !== null) {
              if (canFix) {
                fixedValue = fixedValue.deleteIn(["args", argKey]);
                if (argConfig.defaultValue !== undefined) {
                  fixedValue = fixedValue.setIn(["args", argKey, "value"], argConfig.defaultValue);
                  fixedValue = fixedValue.setIn(["args", argKey, "valueSrc"], "value");
                }
              } else {
                return ["Invalid value of arg ".concat(argKey, " for func ").concat(funcKey, ": ").concat(argValidError), value];
              }
            } else if (fixedArgVal !== argValue) {
              fixedValue = fixedValue.setIn(["args", argKey, "value"], fixedArgVal);
            }
          } else if (isEndValue && argConfig.defaultValue === undefined && !canFix) {
            return ["Value of arg ".concat(argKey, " for func ").concat(funcKey, " is required"), value];
          }
        }
      } else return ["Unknown function ".concat(funcKey), value];
    } // else it's not function value
  } // empty value

  return [null, fixedValue];
};