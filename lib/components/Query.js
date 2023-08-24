"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAndFixTree = exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var actions = _interopRequireWildcard(require("../actions"));
var _treeUtils = require("../utils/treeUtils");
var _stuff = require("../utils/stuff");
var _reactUtils = require("../utils/reactUtils");
var _validation = require("../utils/validation");
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
var validateAndFixTree = function validateAndFixTree(newTree, _oldTree, newConfig, oldConfig) {
  var tree = (0, _validation.validateTree)(newTree, _oldTree, newConfig, oldConfig);
  tree = (0, _treeUtils.fixPathsInTree)(tree);
  return tree;
};
exports.validateAndFixTree = validateAndFixTree;
var Query = /*#__PURE__*/function (_PureComponent) {
  _inherits(Query, _PureComponent);
  var _super = _createSuper(Query);
  function Query(props) {
    var _this;
    _classCallCheck(this, Query);
    _this = _super.call(this, props);
    (0, _reactUtils.useOnPropsChanged)(_assertThisInitialized(_this));
    _this._updateActions(props);
    _this.validatedTree = _this.validateTree(props, props);
    //props.onChange && props.onChange(this.validatedTree, props.config);
    return _this;
  }
  _createClass(Query, [{
    key: "validateTree",
    value: function validateTree(props, oldProps) {
      return validateAndFixTree(props.tree, oldProps.tree, props.config, oldProps.config);
    }
  }, {
    key: "_updateActions",
    value: function _updateActions(props) {
      var config = props.config,
        dispatch = props.dispatch;
      this.actions = (0, _reactUtils.bindActionCreators)(_objectSpread(_objectSpread(_objectSpread({}, actions.tree), actions.group), actions.rule), config, dispatch);
    }
  }, {
    key: "onPropsChanged",
    value: function onPropsChanged(nextProps) {
      var onChange = nextProps.onChange;
      var oldConfig = this.props.config;
      var newTree = nextProps.tree;
      var newConfig = nextProps.config;
      var oldValidatedTree = this.validatedTree;
      this.validatedTree = newTree;
      if (oldConfig !== newConfig) {
        this._updateActions(nextProps);
        this.validatedTree = this.validateTree(nextProps, this.props);
      }
      var validatedTreeChanged = !(0, _stuff.immutableEqual)(this.validatedTree, oldValidatedTree);
      if (validatedTreeChanged) {
        onChange && onChange(this.validatedTree, newConfig, nextProps.__lastAction);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        renderBuilder = _this$props.renderBuilder,
        dispatch = _this$props.dispatch,
        __isInternalValueChange = _this$props.__isInternalValueChange;
      var builderProps = {
        tree: this.validatedTree,
        actions: this.actions,
        config: config,
        dispatch: dispatch,
        __isInternalValueChange: __isInternalValueChange
      };
      return renderBuilder(builderProps);
    }
  }]);
  return Query;
}(_react.PureComponent);
exports["default"] = Query;
_defineProperty(Query, "propTypes", {
  config: _propTypes["default"].object.isRequired,
  onChange: _propTypes["default"].func,
  renderBuilder: _propTypes["default"].func,
  tree: _propTypes["default"].any //instanceOf(Immutable.Map)
  //dispatch: PropTypes.func.isRequired,
});