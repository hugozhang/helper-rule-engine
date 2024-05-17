"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _FuncSelect = _interopRequireDefault(require("./FuncSelect"));
var _configUtils = require("../../utils/configUtils");
var _Widget = _interopRequireDefault(require("./Widget"));
var _utils = require("../utils");
var _funcUtils = require("../../utils/funcUtils");
var _reactUtils = require("../../utils/reactUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FuncWidget = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function FuncWidget(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FuncWidget);
    _this = _callSuper(this, FuncWidget, [props]);
    _this.setFunc = function (funcKey) {
      _this.props.setValue((0, _funcUtils.setFunc)(_this.props.value, funcKey, _this.props.config));
    };
    _this.setArgValue = function (argKey, argVal) {
      var config = _this.props.config;
      var funcDefinition = _this.meta.funcDefinition;
      var args = funcDefinition.args;
      var argDefinition = args[argKey];
      _this.props.setValue((0, _funcUtils.setArgValue)(_this.props.value, argKey, argVal, argDefinition, config));
    };
    _this.setArgValueSrc = function (argKey, argValSrc) {
      var config = _this.props.config;
      var funcDefinition = _this.meta.funcDefinition;
      var args = funcDefinition.args;
      var argDefinition = args[argKey];
      _this.props.setValue((0, _funcUtils.setArgValueSrc)(_this.props.value, argKey, argValSrc, argDefinition, config));
    };
    _this.renderFuncSelect = function () {
      var _this$props = _this.props,
        config = _this$props.config,
        field = _this$props.field,
        operator = _this$props.operator,
        customProps = _this$props.customProps,
        value = _this$props.value,
        readonly = _this$props.readonly,
        parentFuncs = _this$props.parentFuncs,
        id = _this$props.id,
        groupId = _this$props.groupId,
        isFuncArg = _this$props.isFuncArg,
        fieldDefinition = _this$props.fieldDefinition;
      var funcKey = value ? value.get("func") : null;
      var selectProps = {
        value: funcKey,
        setValue: _this.setFunc,
        config: config,
        field: field,
        operator: operator,
        customProps: customProps,
        readonly: readonly,
        parentFuncs: parentFuncs,
        isFuncArg: isFuncArg,
        fieldDefinition: fieldDefinition,
        id: id,
        groupId: groupId
      };
      var _config$settings = config.settings,
        showLabels = _config$settings.showLabels,
        funcLabel = _config$settings.funcLabel;
      var widgetLabel = showLabels ? /*#__PURE__*/_react["default"].createElement("label", {
        className: "rule--label"
      }, funcLabel) : null;
      return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        key: "func",
        className: "rule--func"
      }, widgetLabel, /*#__PURE__*/_react["default"].createElement(_FuncSelect["default"], selectProps));
    };
    _this.renderArgLabel = function (argKey, argDefinition) {
      var valueSources = argDefinition.valueSources,
        type = argDefinition.type,
        showPrefix = argDefinition.showPrefix,
        label = argDefinition.label;
      var config = _this.props.config;
      var isConst = valueSources && valueSources.length == 1 && valueSources[0] == "const";
      var forceShow = !config.settings.showLabels && (type == "boolean" || isConst) && showPrefix;
      if (!forceShow) return null;
      return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        className: "rule--func--arg-label"
      }, label || argKey);
    };
    _this.renderArgLabelSep = function (argKey, argDefinition) {
      var valueSources = argDefinition.valueSources,
        type = argDefinition.type,
        showPrefix = argDefinition.showPrefix;
      var config = _this.props.config;
      var isConst = valueSources && valueSources.length == 1 && valueSources[0] == "const";
      var forceShow = !config.settings.showLabels && (type == "boolean" || isConst) && showPrefix;
      if (!forceShow) return null;
      return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        className: "rule--func--arg-label-sep"
      }, ":");
    };
    _this.renderArgVal = function (funcKey, argKey, argDefinition) {
      var _this$props2 = _this.props,
        config = _this$props2.config,
        field = _this$props2.field,
        operator = _this$props2.operator,
        value = _this$props2.value,
        readonly = _this$props2.readonly,
        parentFuncs = _this$props2.parentFuncs,
        id = _this$props2.id,
        groupId = _this$props2.groupId;
      var arg = value ? value.getIn(["args", argKey]) : null;
      var argVal = arg ? arg.get("value") : undefined;
      var defaultValueSource = argDefinition.valueSources.length == 1 ? argDefinition.valueSources[0] : undefined;
      var argValSrc = arg ? arg.get("valueSrc") || defaultValueSource || "value" : defaultValueSource;
      var widgetProps = {
        config: config,
        fieldFunc: funcKey,
        fieldArg: argKey,
        leftField: field,
        operator: null,
        value: argVal,
        valueSrc: argValSrc,
        setValue: _this.setArgValue,
        setValueSrc: _this.setArgValueSrc,
        funcKey: funcKey,
        argKey: argKey,
        argDefinition: argDefinition,
        readonly: readonly,
        parentFuncs: parentFuncs,
        id: id,
        groupId: groupId
      };
      //tip: value & valueSrc will be converted to Immutable.List at <Widget>

      return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        className: "rule--func--arg-value"
      }, /*#__PURE__*/_react["default"].createElement(ArgWidget, widgetProps));
    };
    _this.renderArgSep = function (argKey, argDefinition, argIndex, _ref) {
      var renderSeps = _ref.renderSeps;
      if (!argIndex) return null;
      return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        className: "rule--func--arg-sep"
      }, renderSeps ? renderSeps[argIndex - 1] : ", ");
    };
    _this.renderBracketBefore = function (_ref2) {
      var renderBrackets = _ref2.renderBrackets;
      return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        key: "before_args",
        className: "rule--func--bracket-before"
      }, renderBrackets ? renderBrackets[0] : "(");
    };
    _this.renderBracketAfter = function (_ref3) {
      var renderBrackets = _ref3.renderBrackets;
      return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        key: "after_args",
        className: "rule--func--bracket-after"
      }, renderBrackets ? renderBrackets[1] : ")");
    };
    _this.renderFuncArgs = function () {
      var _this$meta = _this.meta,
        funcDefinition = _this$meta.funcDefinition,
        funcKey = _this$meta.funcKey;
      if (!funcKey) return null;
      var args = funcDefinition.args;
      if (!args) return null;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _this.renderBracketBefore(funcDefinition), /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        key: "args",
        className: "rule--func--args"
      }, Object.keys(args).map(function (argKey, argIndex) {
        return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
          key: "arg-".concat(argKey, "-").concat(argIndex),
          className: "rule--func--arg"
        }, _this.renderArgSep(argKey, args[argKey], argIndex, funcDefinition), _this.renderArgLabel(argKey, args[argKey]), _this.renderArgLabelSep(argKey, args[argKey]), _this.renderArgVal(funcKey, argKey, args[argKey]));
      })), _this.renderBracketAfter(funcDefinition));
    };
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this.onPropsChanged(props);
    return _this;
  }
  (0, _inherits2["default"])(FuncWidget, _PureComponent);
  return (0, _createClass2["default"])(FuncWidget, [{
    key: "onPropsChanged",
    value: function onPropsChanged(nextProps) {
      var prevProps = this.props;
      var keysForMeta = ["config", "field", "operator", "value"];
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
    value: function getMeta(_ref4) {
      var config = _ref4.config,
        field = _ref4.field,
        operator = _ref4.operator,
        value = _ref4.value;
      var funcKey = value ? value.get("func") : null;
      var funcDefinition = funcKey ? (0, _configUtils.getFuncConfig)(config, funcKey) : null;
      return {
        funcDefinition: funcDefinition,
        funcKey: funcKey
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
        className: "rule--func--wrapper"
      }, this.renderFuncSelect(), this.renderFuncArgs());
    }
  }]);
}(_react.PureComponent);
FuncWidget.propTypes = {
  id: _propTypes["default"].string,
  groupId: _propTypes["default"].string,
  config: _propTypes["default"].object.isRequired,
  field: _propTypes["default"].string.isRequired,
  operator: _propTypes["default"].string,
  customProps: _propTypes["default"].object,
  value: _propTypes["default"].object,
  //instanceOf(Immutable.Map) //with keys 'func' and `args`
  setValue: _propTypes["default"].func.isRequired,
  readonly: _propTypes["default"].bool,
  parentFuncs: _propTypes["default"].array,
  fieldDefinition: _propTypes["default"].object,
  isFuncArg: _propTypes["default"].bool
};
var ArgWidget = /*#__PURE__*/function (_PureComponent2) {
  function ArgWidget() {
    var _this2;
    (0, _classCallCheck2["default"])(this, ArgWidget);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _callSuper(this, ArgWidget, [].concat(args));
    _this2.setValue = function (_delta, value, _widgetType) {
      var _this2$props = _this2.props,
        setValue = _this2$props.setValue,
        argKey = _this2$props.argKey;
      setValue(argKey, value);
    };
    _this2.setValueSrc = function (_delta, valueSrc, _widgetType) {
      var _this2$props2 = _this2.props,
        setValueSrc = _this2$props2.setValueSrc,
        argKey = _this2$props2.argKey;
      setValueSrc(argKey, valueSrc);
    };
    return _this2;
  }
  (0, _inherits2["default"])(ArgWidget, _PureComponent2);
  return (0, _createClass2["default"])(ArgWidget, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        funcKey = _this$props3.funcKey,
        argKey = _this$props3.argKey,
        parentFuncs = _this$props3.parentFuncs;
      return /*#__PURE__*/_react["default"].createElement(_Widget["default"], (0, _extends2["default"])({}, this.props, {
        setValue: this.setValue,
        setValueSrc: this.setValueSrc,
        isFuncArg: true,
        parentFuncs: [].concat((0, _toConsumableArray2["default"])(parentFuncs || []), [[funcKey, argKey]])
      }));
    }
  }]);
}(_react.PureComponent);
ArgWidget.propTypes = {
  funcKey: _propTypes["default"].string.isRequired,
  argKey: _propTypes["default"].string.isRequired,
  setValue: _propTypes["default"].func.isRequired,
  setValueSrc: _propTypes["default"].func.isRequired,
  readonly: _propTypes["default"].bool,
  parentFuncs: _propTypes["default"].array,
  id: _propTypes["default"].string,
  groupId: _propTypes["default"].string
};