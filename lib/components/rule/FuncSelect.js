"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _configUtils = require("../../utils/configUtils");
var _ruleUtils = require("../../utils/ruleUtils");
var _stuff = require("../../utils/stuff");
var _reactUtils = require("../../utils/reactUtils");
var _last = _interopRequireDefault(require("lodash/last"));
var _keys = _interopRequireDefault(require("lodash/keys"));
var _clone = _interopRequireDefault(require("clone"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
//tip: this.props.value - right value, this.props.field - left value
var FuncSelect = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function FuncSelect(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FuncSelect);
    _this = _callSuper(this, FuncSelect, [props]);
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this.onPropsChanged(props);
    return _this;
  }
  (0, _inherits2["default"])(FuncSelect, _PureComponent);
  return (0, _createClass2["default"])(FuncSelect, [{
    key: "onPropsChanged",
    value: function onPropsChanged(nextProps) {
      var prevProps = this.props;
      var keysForItems = ["config", "field", "operator", "isFuncArg"];
      var keysForMeta = ["config", "field", "value"];
      var needUpdateItems = !this.items || keysForItems.map(function (k) {
        return nextProps[k] !== prevProps[k];
      }).filter(function (ch) {
        return ch;
      }).length > 0;
      var needUpdateMeta = !this.meta || keysForMeta.map(function (k) {
        return nextProps[k] !== prevProps[k];
      }).filter(function (ch) {
        return ch;
      }).length > 0;
      if (needUpdateMeta) {
        this.meta = this.getMeta(nextProps);
      }
      if (needUpdateItems) {
        this.items = this.getItems(nextProps);
      }
    }
  }, {
    key: "getItems",
    value: function getItems(_ref) {
      var config = _ref.config,
        field = _ref.field,
        operator = _ref.operator,
        parentFuncs = _ref.parentFuncs,
        fieldDefinition = _ref.fieldDefinition,
        isFuncArg = _ref.isFuncArg;
      var canUseFuncForField = config.settings.canUseFuncForField;
      var filteredFuncs = this.filterFuncs(config, config.funcs, field, operator, canUseFuncForField, parentFuncs, isFuncArg, fieldDefinition);
      var items = this.buildOptions(config, filteredFuncs);
      return items;
    }
  }, {
    key: "getMeta",
    value: function getMeta(_ref2) {
      var config = _ref2.config,
        field = _ref2.field,
        value = _ref2.value;
      var _config$settings = config.settings,
        funcPlaceholder = _config$settings.funcPlaceholder,
        fieldSeparatorDisplay = _config$settings.fieldSeparatorDisplay;
      var selectedFuncKey = value;
      var isFuncSelected = !!value;
      var leftFieldConfig = (0, _configUtils.getFieldConfig)(config, field);
      var leftFieldWidgetField = leftFieldConfig.widgets.field;
      var leftFieldWidgetFieldProps = leftFieldWidgetField && leftFieldWidgetField.widgetProps || {};
      var placeholder = !isFuncSelected ? funcPlaceholder : null;
      var currFunc = isFuncSelected ? (0, _configUtils.getFuncConfig)(config, selectedFuncKey) : null;
      var selectedOpts = currFunc || {};
      var selectedKeys = (0, _ruleUtils.getFieldPath)(selectedFuncKey, config);
      var selectedPath = (0, _ruleUtils.getFieldPath)(selectedFuncKey, config, true);
      var selectedLabel = this.getFuncLabel(currFunc, selectedFuncKey, config);
      var partsLabels = (0, _ruleUtils.getFuncPathLabels)(selectedFuncKey, config);
      var selectedFullLabel = partsLabels ? partsLabels.join(fieldSeparatorDisplay) : null;
      if (selectedFullLabel == selectedLabel) selectedFullLabel = null;
      return {
        placeholder: placeholder,
        selectedKey: selectedFuncKey,
        selectedKeys: selectedKeys,
        selectedPath: selectedPath,
        selectedLabel: selectedLabel,
        selectedOpts: selectedOpts,
        selectedFullLabel: selectedFullLabel
      };
    }
  }, {
    key: "filterFuncs",
    value: function filterFuncs(config, funcs, leftFieldFullkey, operator, canUseFuncForField, parentFuncs, isFuncArg, fieldDefinition) {
      funcs = (0, _clone["default"])(funcs);
      var fieldSeparator = config.settings.fieldSeparator;
      var leftFieldConfig = (0, _configUtils.getFieldConfig)(config, leftFieldFullkey);
      var expectedType;
      var targetDefinition = leftFieldConfig;
      var widget = (0, _ruleUtils.getWidgetForFieldOp)(config, leftFieldFullkey, operator, "value");
      if (isFuncArg && fieldDefinition) {
        targetDefinition = fieldDefinition;
        expectedType = fieldDefinition.type;
      } else if (widget) {
        var widgetConfig = config.widgets[widget];
        var widgetType = widgetConfig.type;
        //expectedType = leftFieldConfig.type;
        expectedType = widgetType;
      } else {
        expectedType = leftFieldConfig.type;
      }
      function _filter(list, path) {
        for (var funcKey in list) {
          var subfields = list[funcKey].subfields;
          var subpath = (path ? path : []).concat(funcKey);
          var funcFullkey = subpath.join(fieldSeparator);
          var funcConfig = (0, _configUtils.getFuncConfig)(config, funcFullkey);
          if (funcConfig.type == "!struct") {
            if (_filter(subfields, subpath) == 0) delete list[funcKey];
          } else {
            var canUse = funcConfig.returnType == expectedType;
            if (targetDefinition.funcs) canUse = canUse && targetDefinition.funcs.includes(funcFullkey);
            if (canUseFuncForField) canUse = canUse && canUseFuncForField(leftFieldFullkey, leftFieldConfig, funcFullkey, funcConfig, operator);
            // don't use func in func (can be configurable, but usually users don't need this)
            if (!funcConfig.allowSelfNesting && parentFuncs && parentFuncs.map(function (_ref3) {
              var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
                func = _ref4[0],
                _arg = _ref4[1];
              return func;
            }).includes(funcFullkey)) canUse = false;
            if (!canUse) delete list[funcKey];
          }
        }
        return (0, _keys["default"])(list).length;
      }
      _filter(funcs, []);
      return funcs;
    }
  }, {
    key: "buildOptions",
    value: function buildOptions(config, funcs) {
      var _this2 = this;
      var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var optGroupLabel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (!funcs) return null;
      var _config$settings2 = config.settings,
        fieldSeparator = _config$settings2.fieldSeparator,
        fieldSeparatorDisplay = _config$settings2.fieldSeparatorDisplay;
      var prefix = path ? path.join(fieldSeparator) + fieldSeparator : "";
      return (0, _keys["default"])(funcs).map(function (funcKey) {
        var func = funcs[funcKey];
        var label = _this2.getFuncLabel(func, funcKey, config);
        var partsLabels = (0, _ruleUtils.getFuncPathLabels)(funcKey, config);
        var fullLabel = partsLabels.join(fieldSeparatorDisplay);
        if (fullLabel == label) fullLabel = null;
        var tooltip = func.tooltip;
        var subpath = (path ? path : []).concat(funcKey);
        if (func.type == "!struct") {
          return {
            key: funcKey,
            path: prefix + funcKey,
            label: label,
            fullLabel: fullLabel,
            tooltip: tooltip,
            items: _this2.buildOptions(config, func.subfields, subpath, label)
          };
        } else {
          return {
            key: funcKey,
            path: prefix + funcKey,
            label: label,
            fullLabel: fullLabel,
            tooltip: tooltip,
            grouplabel: optGroupLabel
          };
        }
      });
    }
  }, {
    key: "getFuncLabel",
    value: function getFuncLabel(funcOpts, funcKey, config) {
      if (!funcKey) return null;
      var fieldSeparator = config.settings.fieldSeparator;
      var maxLabelsLength = config.settings.maxLabelsLength;
      var funcParts = Array.isArray(funcKey) ? funcKey : funcKey.split(fieldSeparator);
      var label = funcOpts.label || (0, _last["default"])(funcParts);
      label = (0, _stuff.truncateString)(label, maxLabelsLength);
      return label;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        customProps = _this$props.customProps,
        setValue = _this$props.setValue,
        readonly = _this$props.readonly,
        id = _this$props.id,
        groupId = _this$props.groupId;
      var renderFunc = config.settings.renderFunc;
      var renderProps = _objectSpread({
        config: config,
        customProps: customProps,
        readonly: readonly,
        setField: setValue,
        items: this.items,
        id: id,
        groupId: groupId
      }, this.meta);
      return renderFunc(renderProps);
    }
  }]);
}(_react.PureComponent);
FuncSelect.propTypes = {
  id: _propTypes["default"].string,
  groupId: _propTypes["default"].string,
  config: _propTypes["default"].object.isRequired,
  field: _propTypes["default"].string.isRequired,
  operator: _propTypes["default"].string,
  customProps: _propTypes["default"].object,
  value: _propTypes["default"].string,
  setValue: _propTypes["default"].func.isRequired,
  readonly: _propTypes["default"].bool,
  parentFuncs: _propTypes["default"].array,
  fieldDefinition: _propTypes["default"].object,
  isFuncArg: _propTypes["default"].bool
};