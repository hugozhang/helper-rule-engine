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
var _reactRedux = require("react-redux");
var _context = _interopRequireDefault(require("../stores/context"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var actions = _interopRequireWildcard(require("../actions"));
var _stuff = require("../utils/stuff");
var _reactUtils = require("../utils/reactUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Query = /*#__PURE__*/function (_Component) {
  function Query(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Query);
    _this = _callSuper(this, Query, [props]);
    _this.shouldComponentUpdate = (0, _reactUtils.liteShouldComponentUpdate)(_this, {
      tree: function tree(nextValue) {
        if (nextValue === _this.oldValidatedTree && _this.oldValidatedTree === _this.validatedTree) {
          // Got value dispatched from QueryContainer
          // Ignore, because we've just rendered it
          return false;
        }
        return true;
      }
    });
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this._updateActions(props);

    // For preventive validation (tree and config consistency)
    // When config has chnaged from QueryContainer, 
    //  but new dispatched validated tree value is not in redux store yet (tree prop is old)
    _this.validatedTree = props.getMemoizedTree(props.config, props.tree);
    _this.oldValidatedTree = _this.validatedTree;

    //props.onChange && props.onChange(this.validatedTree, props.config);
    return _this;
  }
  (0, _inherits2["default"])(Query, _Component);
  return (0, _createClass2["default"])(Query, [{
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
      var oldTree = this.props.tree;
      var newConfig = nextProps.config;
      this.oldValidatedTree = this.validatedTree;
      this.validatedTree = newTree;
      if (oldConfig !== newConfig) {
        this._updateActions(nextProps);
        this.validatedTree = nextProps.getMemoizedTree(newConfig, newTree, oldConfig);
      }
      var validatedTreeChanged = !(0, _stuff.immutableEqual)(this.validatedTree, this.oldValidatedTree);
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
}(_react.Component);
Query.propTypes = {
  config: _propTypes["default"].object.isRequired,
  onChange: _propTypes["default"].func,
  renderBuilder: _propTypes["default"].func,
  tree: _propTypes["default"].any //instanceOf(Immutable.Map)
  //dispatch: PropTypes.func.isRequired,
  //__isInternalValueChange
  //__lastAction
  //getMemoizedTree: PropTypes.func.isRequired,
};
var ConnectedQuery = (0, _reactRedux.connect)(function (state) {
  return {
    tree: state.tree,
    __isInternalValueChange: state.__isInternalValueChange,
    __lastAction: state.__lastAction
  };
}, null, null, {
  context: _context["default"]
})(Query);
ConnectedQuery.displayName = "ConnectedQuery";
var _default = exports["default"] = ConnectedQuery;