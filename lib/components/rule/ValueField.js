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
var ValueField = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function ValueField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ValueField);
    _this = _callSuper(this, ValueField, [props]);
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this.onPropsChanged(props);
    return _this;
  }
  (0, _inherits2["default"])(ValueField, _PureComponent);
  return (0, _createClass2["default"])(ValueField, [{
    key: "onPropsChanged",
    value: function onPropsChanged(nextProps) {
      var prevProps = this.props;
      var keysForItems = ["config", "field", "operator", "isFuncArg", "parentField"];
      var keysForMeta = ["config", "field", "operator", "value", "placeholder", "isFuncArg", "parentField"];
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
      if (needUpdateItems) {
        this.items = this.getItems(nextProps);
      }
      if (needUpdateMeta) {
        this.meta = this.getMeta(nextProps);
      }
    }
  }, {
    key: "getItems",
    value: function getItems(_ref) {
      var config = _ref.config,
        field = _ref.field,
        operator = _ref.operator,
        parentField = _ref.parentField,
        isFuncArg = _ref.isFuncArg,
        fieldDefinition = _ref.fieldDefinition;
      var canCompareFieldWithField = config.settings.canCompareFieldWithField;
      var fieldSeparator = config.settings.fieldSeparator;
      var parentFieldPath = typeof parentField == "string" ? parentField.split(fieldSeparator) : parentField;
      var parentFieldConfig = parentField ? (0, _configUtils.getFieldConfig)(config, parentField) : null;
      // const sourceFields = parentField ? parentFieldConfig && parentFieldConfig.subfields : config.fields;

      //TODO: refactor
      var sourceFields = config.fields;
      var filteredFields = this.filterFields(config, sourceFields, field, parentField, parentFieldPath, operator, canCompareFieldWithField, isFuncArg, fieldDefinition);
      // const items = this.buildOptions(parentFieldPath, config, filteredFields, parentFieldPath);

      var items = this.buildOptions(parentFieldPath, config, filteredFields, null);
      return items;
    }
  }, {
    key: "getMeta",
    value: function getMeta(_ref2) {
      var config = _ref2.config,
        field = _ref2.field,
        operator = _ref2.operator,
        value = _ref2.value,
        customPlaceholder = _ref2.placeholder,
        isFuncArg = _ref2.isFuncArg,
        parentField = _ref2.parentField;
      var _config$settings = config.settings,
        fieldPlaceholder = _config$settings.fieldPlaceholder,
        fieldSeparatorDisplay = _config$settings.fieldSeparatorDisplay;
      var selectedKey = value;
      var isFieldSelected = !!value;
      var leftFieldConfig = (0, _configUtils.getFieldConfig)(config, field);
      var leftFieldWidgetField = leftFieldConfig.widgets.field;
      var leftFieldWidgetFieldProps = leftFieldWidgetField && leftFieldWidgetField.widgetProps || {};
      var placeholder = isFieldSelected ? null : isFuncArg && customPlaceholder || leftFieldWidgetFieldProps.valuePlaceholder || fieldPlaceholder;
      var currField = isFieldSelected ? (0, _configUtils.getFieldConfig)(config, selectedKey) : null;
      var selectedOpts = currField || {};
      var selectedKeys = (0, _ruleUtils.getFieldPath)(selectedKey, config);
      var selectedPath = (0, _ruleUtils.getFieldPath)(selectedKey, config, true);
      var selectedLabel = this.getFieldLabel(currField, selectedKey, config);
      var partsLabels = (0, _ruleUtils.getFieldPathLabels)(selectedKey, config);
      var selectedFullLabel = partsLabels ? partsLabels.join(fieldSeparatorDisplay) : null;
      if (selectedFullLabel == selectedLabel || parentField) selectedFullLabel = null;
      var selectedAltLabel = selectedOpts.label2;
      return {
        placeholder: placeholder,
        selectedKey: selectedKey,
        selectedKeys: selectedKeys,
        selectedPath: selectedPath,
        selectedLabel: selectedLabel,
        selectedOpts: selectedOpts,
        selectedAltLabel: selectedAltLabel,
        selectedFullLabel: selectedFullLabel
      };
    }
  }, {
    key: "filterFields",
    value: function filterFields(config, fields, leftFieldFullkey, parentField, parentFieldPath, operator, canCompareFieldWithField, isFuncArg, fieldDefinition) {
      fields = (0, _clone["default"])(fields);
      var fieldSeparator = config.settings.fieldSeparator;
      var leftFieldConfig = (0, _configUtils.getFieldConfig)(config, leftFieldFullkey);
      var expectedType;
      var widget = (0, _ruleUtils.getWidgetForFieldOp)(config, leftFieldFullkey, operator, "value");
      if (isFuncArg && fieldDefinition) {
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
        for (var rightFieldKey in list) {
          var subfields = list[rightFieldKey].subfields;
          var subpath = (path ? path : []).concat(rightFieldKey);
          var rightFieldFullkey = subpath.join(fieldSeparator);
          var rightFieldConfig = (0, _configUtils.getFieldConfig)(config, rightFieldFullkey);
          if (!rightFieldConfig) {
            delete list[rightFieldKey];
          } else if (rightFieldConfig.type == "!struct" || rightFieldConfig.type == "!group") {
            if (_filter(subfields, subpath) == 0) delete list[rightFieldKey];
          } else {
            // tip: LHS field can be used as arg in RHS function
            var canUse = rightFieldConfig.type == expectedType && (isFuncArg ? true : rightFieldFullkey != leftFieldFullkey);
            var fn = canCompareFieldWithField || config.settings.canCompareFieldWithField;
            if (fn) canUse = canUse && fn(leftFieldFullkey, leftFieldConfig, rightFieldFullkey, rightFieldConfig, operator);
            if (!canUse) delete list[rightFieldKey];
          }
        }
        return (0, _keys["default"])(list).length;
      }

      // TODO: filter by path
      // _filter(fields, parentFieldPath || []);

      _filter(fields, []);
      return fields;
    }
  }, {
    key: "buildOptions",
    value: function buildOptions(parentFieldPath, config, fields) {
      var _this2 = this;
      var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var optGroupLabel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      if (!fields) return null;
      var _config$settings2 = config.settings,
        fieldSeparator = _config$settings2.fieldSeparator,
        fieldSeparatorDisplay = _config$settings2.fieldSeparatorDisplay;
      var prefix = path ? path.join(fieldSeparator) + fieldSeparator : "";
      return (0, _keys["default"])(fields).map(function (fieldKey) {
        var field = fields[fieldKey];
        var label = _this2.getFieldLabel(field, fieldKey, config);
        var partsLabels = (0, _ruleUtils.getFieldPathLabels)(fieldKey, config);
        var fullLabel = partsLabels.join(fieldSeparatorDisplay);
        if (fullLabel == label || parentFieldPath) fullLabel = null;
        var altLabel = field.label2;
        var tooltip = field.tooltip;
        var subpath = (path ? path : []).concat(fieldKey);
        if (field.hideForCompare) return undefined;
        if (field.type == "!struct" || field.type == "!group") {
          return {
            key: fieldKey,
            path: prefix + fieldKey,
            label: label,
            fullLabel: fullLabel,
            altLabel: altLabel,
            tooltip: tooltip,
            items: _this2.buildOptions(parentFieldPath, config, field.subfields, subpath, label)
          };
        } else {
          return {
            key: fieldKey,
            path: prefix + fieldKey,
            label: label,
            fullLabel: fullLabel,
            altLabel: altLabel,
            tooltip: tooltip,
            grouplabel: optGroupLabel
          };
        }
      }).filter(function (o) {
        return !!o;
      });
    }
  }, {
    key: "getFieldLabel",
    value: function getFieldLabel(fieldOpts, fieldKey, config) {
      if (!fieldKey) return null;
      var fieldSeparator = config.settings.fieldSeparator;
      var maxLabelsLength = config.settings.maxLabelsLength;
      var fieldParts = Array.isArray(fieldKey) ? fieldKey : fieldKey.split(fieldSeparator);
      var label = fieldOpts.label || (0, _last["default"])(fieldParts);
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
      var renderField = config.settings.renderField;
      var renderProps = _objectSpread({
        config: config,
        customProps: customProps,
        setField: setValue,
        readonly: readonly,
        items: this.items,
        id: id,
        groupId: groupId
      }, this.meta);
      return renderField(renderProps);
    }
  }]);
}(_react.PureComponent);
ValueField.propTypes = {
  id: _propTypes["default"].string,
  groupId: _propTypes["default"].string,
  setValue: _propTypes["default"].func.isRequired,
  config: _propTypes["default"].object.isRequired,
  field: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].string,
  operator: _propTypes["default"].string,
  customProps: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  parentField: _propTypes["default"].string,
  fieldDefinition: _propTypes["default"].object,
  isFuncArg: _propTypes["default"].bool
};