"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _immutable = _interopRequireWildcard(require("immutable"));
var _Item = require("./item/Item");
var _SortableContainer = _interopRequireDefault(require("./containers/SortableContainer"));
var _treeUtils = require("../utils/treeUtils");
var _uuid = _interopRequireDefault(require("../utils/uuid"));
var _reactUtils = require("../utils/reactUtils");
var _class, _Builder;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Builder = exports["default"] = (0, _SortableContainer["default"])(_class = (_Builder = /*#__PURE__*/function (_Component) {
  function Builder(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Builder);
    _this = _callSuper(this, Builder, [props]);
    _this._updPath(props);
    return _this;
  }
  (0, _inherits2["default"])(Builder, _Component);
  return (0, _createClass2["default"])(Builder, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var prevProps = this.props;
      var should = (0, _reactUtils.pureShouldComponentUpdate)(this)(nextProps, nextState);
      if (should) {
        var chs = [];
        for (var k in nextProps) {
          var changed = nextProps[k] !== prevProps[k];
          if (changed && k != "__isInternalValueChange") {
            chs.push(k);
          }
        }
        if (!chs.length) should = false;
        //optimize render
        if (chs.length == 1 && chs[0] == "tree" && nextProps.__isInternalValueChange) should = false;
      }
      return should;
    }
  }, {
    key: "_updPath",
    value: function _updPath(props) {
      var id = props.tree.get("id");
      this.path = _immutable["default"].List.of(id);
    }
  }, {
    key: "render",
    value: function render() {
      var tree = this.props.tree;
      var rootType = tree.get("type");
      var isTernary = rootType == "switch_group";
      var reordableNodesCnt = isTernary ? null : (0, _treeUtils.getTotalReordableNodesCountInTree)(tree);
      var totalRulesCnt = isTernary ? null : (0, _treeUtils.getTotalRulesCountInTree)(tree);
      var id = tree.get("id");
      return /*#__PURE__*/_react["default"].createElement(_Item.Item, {
        key: id,
        id: id,
        path: this.path,
        type: rootType,
        properties: tree.get("properties") || new _immutable.Map(),
        config: this.props.config,
        actions: this.props.actions,
        children1: tree.get("children1") || new _immutable.Map()
        //tree={tree}
        ,
        reordableNodesCnt: reordableNodesCnt,
        totalRulesCnt: totalRulesCnt,
        parentReordableNodesCnt: 0,
        onDragStart: this.props.onDragStart
      });
    }
  }]);
}(_react.Component), _Builder.propTypes = {
  tree: _propTypes["default"].any.isRequired,
  //instanceOf(Immutable.Map)
  config: _propTypes["default"].object.isRequired,
  actions: _propTypes["default"].object.isRequired,
  onDragStart: _propTypes["default"].func
}, _Builder)) || _class;