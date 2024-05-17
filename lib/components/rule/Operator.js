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
var _keys = _interopRequireDefault(require("lodash/keys"));
var _pickBy = _interopRequireDefault(require("lodash/pickBy"));
var _mapValues = _interopRequireDefault(require("lodash/mapValues"));
var _reactUtils = require("../../utils/reactUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Operator = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function Operator(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Operator);
    _this = _callSuper(this, Operator, [props]);
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this.onPropsChanged(props);
    return _this;
  }
  (0, _inherits2["default"])(Operator, _PureComponent);
  return (0, _createClass2["default"])(Operator, [{
    key: "onPropsChanged",
    value: function onPropsChanged(nextProps) {
      var prevProps = this.props;
      var keysForMeta = ["config", "selectedField", "selectedOperator"];
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
      var config = _ref.config,
        selectedField = _ref.selectedField,
        selectedOperator = _ref.selectedOperator;
      var fieldConfig = (0, _configUtils.getFieldConfig)(config, selectedField);
      var operators = fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.operators;
      var operatorOptions = (0, _mapValues["default"])((0, _pickBy["default"])(config.operators, function (item, key) {
        return (operators === null || operators === void 0 ? void 0 : operators.indexOf(key)) !== -1;
      }), function (_opts, op) {
        return (0, _configUtils.getOperatorConfig)(config, op, selectedField);
      });
      var items = this.buildOptions(config, operatorOptions, operators);
      var isOpSelected = !!selectedOperator;
      var currOp = isOpSelected ? operatorOptions[selectedOperator] : null;
      var selectedOpts = currOp || {};
      var placeholder = this.props.config.settings.operatorPlaceholder;
      var selectedKey = selectedOperator;
      var selectedKeys = isOpSelected ? [selectedKey] : null;
      var selectedPath = selectedKeys;
      var selectedLabel = selectedOpts.label;
      return {
        placeholder: placeholder,
        items: items,
        selectedKey: selectedKey,
        selectedKeys: selectedKeys,
        selectedPath: selectedPath,
        selectedLabel: selectedLabel,
        selectedOpts: selectedOpts,
        fieldConfig: fieldConfig
      };
    }
  }, {
    key: "buildOptions",
    value: function buildOptions(config, fields, ops) {
      if (!fields || !ops) return null;
      return (0, _keys["default"])(fields).sort(function (a, b) {
        return ops.indexOf(a) - ops.indexOf(b);
      }).map(function (fieldKey) {
        var field = fields[fieldKey];
        var label = field.label;
        return {
          key: fieldKey,
          path: fieldKey,
          label: label
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        customProps = _this$props.customProps,
        setOperator = _this$props.setOperator,
        readonly = _this$props.readonly,
        id = _this$props.id,
        groupId = _this$props.groupId;
      var renderOperator = config.settings.renderOperator;
      var renderProps = _objectSpread({
        id: id,
        groupId: groupId,
        config: config,
        customProps: customProps,
        readonly: readonly,
        setField: setOperator
      }, this.meta);
      if (!renderProps.items) return null;
      return renderOperator(renderProps);
    }
  }]);
}(_react.PureComponent);
Operator.propTypes = {
  id: _propTypes["default"].string,
  groupId: _propTypes["default"].string,
  config: _propTypes["default"].object.isRequired,
  selectedField: _propTypes["default"].string,
  selectedOperator: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  //actions
  setOperator: _propTypes["default"].func.isRequired
};