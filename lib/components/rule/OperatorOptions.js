"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _configUtils = require("../../utils/configUtils");
var _excluded = ["factory"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var OperatorOptions = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function OperatorOptions() {
    (0, _classCallCheck2["default"])(this, OperatorOptions);
    return _callSuper(this, OperatorOptions, arguments);
  }
  (0, _inherits2["default"])(OperatorOptions, _PureComponent);
  return (0, _createClass2["default"])(OperatorOptions, [{
    key: "render",
    value: function render() {
      if (!this.props.selectedOperator) return null;
      var operatorDefinitions = (0, _configUtils.getOperatorConfig)(this.props.config, this.props.selectedOperator, this.props.selectedField);
      if (typeof operatorDefinitions.options === "undefined") {
        return null;
      }
      var _operatorDefinitions$ = operatorDefinitions.options,
        optionsFactory = _operatorDefinitions$.factory,
        basicOptionsProps = (0, _objectWithoutProperties2["default"])(_operatorDefinitions$, _excluded);
      var optionsProps = Object.assign({}, basicOptionsProps, {
        config: this.props.config,
        field: this.props.selectedField,
        operator: this.props.selectedOperator,
        options: this.props.operatorOptions,
        setOption: this.props.setOperatorOption,
        readonly: this.props.readonly
      });
      var optionsCmp = optionsFactory(optionsProps);
      var name = this.props.selectedOperator;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "rule--operator rule--operator--".concat(name.toUpperCase())
      }, optionsCmp);
    }
  }]);
}(_react.PureComponent);
OperatorOptions.propTypes = {
  config: _propTypes["default"].object.isRequired,
  operatorOptions: _propTypes["default"].any.isRequired,
  //instanceOf(Immutable.Map)
  selectedField: _propTypes["default"].string.isRequired,
  selectedOperator: _propTypes["default"].string.isRequired,
  readonly: _propTypes["default"].bool,
  //actions
  setOperatorOption: _propTypes["default"].func.isRequired
};