"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _configUtils = require("../../utils/configUtils");
var _ruleUtils = require("../../utils/ruleUtils");
var _stuff = require("../../utils/stuff");
var _reactUtils = require("../../utils/reactUtils");
var _last = _interopRequireDefault(require("lodash/last"));
var _keys = _interopRequireDefault(require("lodash/keys"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Field = /*#__PURE__*/function (_PureComponent) {
  _inherits(Field, _PureComponent);
  var _super = _createSuper(Field);
  function Field(props) {
    var _this;
    _classCallCheck(this, Field);
    _this = _super.call(this, props);
    (0, _reactUtils.useOnPropsChanged)(_assertThisInitialized(_this));
    _this.onPropsChanged(props);
    return _this;
  }
  _createClass(Field, [{
    key: "onPropsChanged",
    value: function onPropsChanged(nextProps) {
      var prevProps = this.props;
      var keysForMeta = ["selectedField", "config", "parentField"];
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
        config = _ref.config,
        parentField = _ref.parentField;
      var selectedKey = selectedField;
      var _config$settings = config.settings,
        maxLabelsLength = _config$settings.maxLabelsLength,
        fieldSeparatorDisplay = _config$settings.fieldSeparatorDisplay,
        fieldPlaceholder = _config$settings.fieldPlaceholder,
        fieldSeparator = _config$settings.fieldSeparator;
      var isFieldSelected = !!selectedField;
      var placeholder = !isFieldSelected ? (0, _stuff.truncateString)(fieldPlaceholder, maxLabelsLength) : null;
      var currField = isFieldSelected ? (0, _configUtils.getFieldConfig)(config, selectedKey) : null;
      var selectedOpts = currField || {};
      var selectedKeys = (0, _ruleUtils.getFieldPath)(selectedKey, config);
      var selectedPath = (0, _ruleUtils.getFieldPath)(selectedKey, config, true);
      var selectedLabel = this.getFieldLabel(currField, selectedKey, config);
      var partsLabels = (0, _ruleUtils.getFieldPathLabels)(selectedKey, config);
      var selectedFullLabel = partsLabels ? partsLabels.join(fieldSeparatorDisplay) : null;
      if (selectedFullLabel == selectedLabel || parentField) selectedFullLabel = null;
      var selectedAltLabel = selectedOpts.label2;
      var parentFieldPath = typeof parentField == "string" ? parentField.split(fieldSeparator) : parentField;
      var parentFieldConfig = parentField ? (0, _configUtils.getFieldConfig)(config, parentField) : null;
      var sourceFields = parentField ? parentFieldConfig && parentFieldConfig.subfields : config.fields;
      var items = this.buildOptions(parentFieldPath, config, sourceFields, parentFieldPath);
      return {
        placeholder: placeholder,
        items: items,
        parentField: parentField,
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
    key: "getFieldLabel",
    value: function getFieldLabel(fieldOpts, fieldKey, config) {
      if (!fieldKey) return null;
      var fieldSeparator = config.settings.fieldSeparator;
      var maxLabelsLength = config.settings.maxLabelsLength;
      var fieldParts = Array.isArray(fieldKey) ? fieldKey : fieldKey.split(fieldSeparator);
      var label = fieldOpts && fieldOpts.label || (0, _last["default"])(fieldParts);
      label = (0, _stuff.truncateString)(label, maxLabelsLength);
      return label;
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
        var partsLabels = (0, _ruleUtils.getFieldPathLabels)(prefix + fieldKey, config);
        var fullLabel = partsLabels.join(fieldSeparatorDisplay);
        if (fullLabel == label || parentFieldPath) fullLabel = null;
        var altLabel = field.label2;
        var tooltip = field.tooltip;
        var subpath = (path ? path : []).concat(fieldKey);
        var disabled = field.disabled;
        if (field.hideForSelect) return undefined;
        if (field.type == "!struct") {
          return {
            disabled: disabled,
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
            disabled: disabled,
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
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        customProps = _this$props.customProps,
        setField = _this$props.setField,
        readonly = _this$props.readonly,
        id = _this$props.id,
        groupId = _this$props.groupId;
      var renderField = config.settings.renderField;
      var renderProps = _objectSpread({
        id: id,
        groupId: groupId,
        config: config,
        customProps: customProps,
        readonly: readonly,
        setField: setField
      }, this.meta);
      return renderField(renderProps);
    }
  }]);
  return Field;
}(_react.PureComponent);
exports["default"] = Field;
_defineProperty(Field, "propTypes", {
  id: _propTypes["default"].string,
  groupId: _propTypes["default"].string,
  config: _propTypes["default"].object.isRequired,
  selectedField: _propTypes["default"].string,
  parentField: _propTypes["default"].string,
  customProps: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  //actions
  setField: _propTypes["default"].func.isRequired
});