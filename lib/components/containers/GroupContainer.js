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
var _mapValues = _interopRequireDefault(require("lodash/mapValues"));
var _context = _interopRequireDefault(require("../../stores/context"));
var _reactUtils = require("../../utils/reactUtils");
var _reactRedux = require("react-redux");
var _defaultUtils = require("../../utils/defaultUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var createGroupContainer = function createGroupContainer(Group) {
  var _GroupContainer;
  return _GroupContainer = /*#__PURE__*/function (_Component) {
    function GroupContainer(_props) {
      var _this;
      (0, _classCallCheck2["default"])(this, GroupContainer);
      _this = _callSuper(this, GroupContainer, [_props]);
      _this._selectedConjunction = function (props) {
        props = props || _this.props;
        return props.conjunction || (0, _defaultUtils.defaultGroupConjunction)(props.config, props.field);
      };
      _this.setConjunction = function () {
        var conj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        _this.props.actions.setConjunction(_this.props.path, conj);
      };
      _this.setNot = function () {
        var not = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        _this.props.actions.setNot(_this.props.path, not);
      };
      _this.setLock = function () {
        var lock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        _this.props.actions.setLock(_this.props.path, lock);
      };
      _this.dummyFn = function () {};
      _this.removeSelf = function () {
        _this.props.actions.removeGroup(_this.props.path);
      };
      _this.addGroup = function () {
        _this.props.actions.addGroup(_this.props.path);
      };
      _this.addCaseGroup = function () {
        _this.props.actions.addCaseGroup(_this.props.path);
      };
      _this.addDefaultCaseGroup = function () {
        _this.props.actions.addDefaultCaseGroup(_this.props.path);
      };
      _this.addRule = function () {
        _this.props.actions.addRule(_this.props.path);
      };
      // for RuleGroup
      _this.setField = function (field) {
        _this.props.actions.setField(_this.props.path, field);
      };
      // for RuleGroupExt
      _this.setOperator = function (operator) {
        _this.props.actions.setOperator(_this.props.path, operator);
      };
      _this.setValue = function (delta, value, type) {
        _this.props.actions.setValue(_this.props.path, delta, value, type);
      };
      (0, _reactUtils.useOnPropsChanged)(_this);
      _this.selectedConjunction = _this._selectedConjunction(_props);
      _this.conjunctionOptions = _this._getConjunctionOptions(_props);
      _this.dummyFn.isDummyFn = true;
      return _this;
    }
    (0, _inherits2["default"])(GroupContainer, _Component);
    return (0, _createClass2["default"])(GroupContainer, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        var prevProps = this.props;
        var prevState = this.state;
        var should = (0, _reactUtils.pureShouldComponentUpdate)(this)(nextProps, nextState);
        if (should) {
          if (prevState == nextState && prevProps != nextProps) {
            var draggingId = nextProps.dragging.id || prevProps.dragging.id;
            var isDraggingMe = draggingId == nextProps.id;
            var chs = [];
            for (var k in nextProps) {
              var changed = nextProps[k] != prevProps[k];
              if (k == "dragging" && !isDraggingMe) {
                changed = false; //dragging another item -> ignore
              }
              if (changed) {
                chs.push(k);
              }
            }
            if (!chs.length) should = false;
          }
        }
        return should;
      }
    }, {
      key: "onPropsChanged",
      value: function onPropsChanged(nextProps) {
        var config = nextProps.config,
          id = nextProps.id,
          conjunction = nextProps.conjunction;
        var oldConfig = this.props.config;
        var oldConjunction = this.props.conjunction;
        if (oldConfig != config || oldConjunction != conjunction) {
          this.selectedConjunction = this._selectedConjunction(nextProps);
          this.conjunctionOptions = this._getConjunctionOptions(nextProps);
        }
      }
    }, {
      key: "_getConjunctionOptions",
      value: function _getConjunctionOptions(props) {
        var _this2 = this;
        return (0, _mapValues["default"])(props.config.conjunctions, function (item, index) {
          return {
            id: "conjunction-".concat(props.id, "-").concat(index),
            name: "conjunction[".concat(props.id, "]"),
            key: index,
            label: item.label,
            checked: index === _this2._selectedConjunction(props)
          };
        });
      }
    }, {
      key: "render",
      value: function render() {
        var isDraggingMe = this.props.dragging.id == this.props.id;
        var currentNesting = this.props.path.size;
        var maxNesting = this.props.config.settings.maxNesting;
        var isInDraggingTempo = !isDraggingMe && this.props.isDraggingTempo;

        // Don't allow nesting further than the maximum configured depth and don't
        // allow removal of the root group.
        var allowFurtherNesting = typeof maxNesting === "undefined" || currentNesting < maxNesting;
        var isRoot = currentNesting == 1;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "group-or-rule-container group-container",
          "data-id": this.props.id
        }, [isDraggingMe ? /*#__PURE__*/_react["default"].createElement(Group, {
          key: "dragging",
          id: this.props.id,
          groupId: this.props.groupId,
          isDraggingMe: true,
          isDraggingTempo: true,
          dragging: this.props.dragging,
          isRoot: isRoot,
          allowFurtherNesting: allowFurtherNesting,
          conjunctionOptions: this.conjunctionOptions,
          not: this.props.not,
          selectedConjunction: this.selectedConjunction,
          setConjunction: this.dummyFn,
          setNot: this.dummyFn,
          setLock: this.dummyFn,
          removeSelf: this.dummyFn,
          addGroup: this.dummyFn,
          addCaseGroup: this.dummyFn,
          addDefaultCaseGroup: this.dummyFn,
          addRule: this.dummyFn,
          setField: this.dummyFn,
          setOperator: this.dummyFn,
          setValue: this.dummyFn,
          value: this.props.value || null,
          config: this.props.config,
          children1: this.props.children1,
          actions: this.props.actions
          //tree={this.props.tree}
          ,
          reordableNodesCnt: this.props.reordableNodesCnt,
          totalRulesCnt: this.props.totalRulesCnt,
          selectedField: this.props.field || null,
          parentField: this.props.parentField || null,
          selectedOperator: this.props.operator || null,
          isLocked: this.props.isLocked,
          isTrueLocked: this.props.isTrueLocked,
          parentReordableNodesCnt: this.props.parentReordableNodesCnt
        }) : null, /*#__PURE__*/_react["default"].createElement(Group, {
          key: this.props.id,
          id: this.props.id,
          groupId: this.props.groupId,
          isDraggingMe: isDraggingMe,
          isDraggingTempo: isInDraggingTempo,
          onDragStart: this.props.onDragStart,
          isRoot: isRoot,
          allowFurtherNesting: allowFurtherNesting,
          conjunctionOptions: this.conjunctionOptions,
          not: this.props.not,
          selectedConjunction: this.selectedConjunction,
          setConjunction: isInDraggingTempo ? this.dummyFn : this.setConjunction,
          setNot: isInDraggingTempo ? this.dummyFn : this.setNot,
          setLock: isInDraggingTempo ? this.dummyFn : this.setLock,
          removeSelf: isInDraggingTempo ? this.dummyFn : this.removeSelf,
          addGroup: isInDraggingTempo ? this.dummyFn : this.addGroup,
          addCaseGroup: isInDraggingTempo ? this.dummyFn : this.addCaseGroup,
          addDefaultCaseGroup: isInDraggingTempo ? this.dummyFn : this.addDefaultCaseGroup,
          addRule: isInDraggingTempo ? this.dummyFn : this.addRule,
          setField: isInDraggingTempo ? this.dummyFn : this.setField,
          setOperator: isInDraggingTempo ? this.dummyFn : this.setOperator,
          setValue: isInDraggingTempo ? this.dummyFn : this.setValue,
          value: this.props.value || null,
          config: this.props.config,
          children1: this.props.children1,
          actions: this.props.actions
          //tree={this.props.tree}
          ,
          reordableNodesCnt: this.props.reordableNodesCnt,
          totalRulesCnt: this.props.totalRulesCnt,
          selectedField: this.props.field || null,
          parentField: this.props.parentField || null,
          selectedOperator: this.props.operator || null,
          isLocked: this.props.isLocked,
          isTrueLocked: this.props.isTrueLocked,
          parentReordableNodesCnt: this.props.parentReordableNodesCnt
        })]);
      }
    }]);
  }(_react.Component), _GroupContainer.propTypes = {
    //tree: PropTypes.instanceOf(Immutable.Map).isRequired,
    config: _propTypes["default"].object.isRequired,
    actions: _propTypes["default"].object.isRequired,
    //{setConjunction: Funciton, removeGroup, addGroup, addRule, ...}
    path: _propTypes["default"].any.isRequired,
    //instanceOf(Immutable.List)
    id: _propTypes["default"].string.isRequired,
    groupId: _propTypes["default"].string,
    not: _propTypes["default"].bool,
    conjunction: _propTypes["default"].string,
    children1: _propTypes["default"].any,
    //instanceOf(Immutable.OrderedMap)
    onDragStart: _propTypes["default"].func,
    reordableNodesCnt: _propTypes["default"].number,
    field: _propTypes["default"].string,
    // for RuleGroup
    parentField: _propTypes["default"].string,
    //from RuleGroup
    isLocked: _propTypes["default"].bool,
    isTrueLocked: _propTypes["default"].bool,
    //connected:
    dragging: _propTypes["default"].object,
    //{id, x, y, w, h}
    isDraggingTempo: _propTypes["default"].bool
  }, _GroupContainer;
};
var _default = exports["default"] = function _default(Group) {
  var ConnectedGroupContainer = (0, _reactRedux.connect)(function (state) {
    return {
      dragging: state.dragging
    };
  }, null, null, {
    context: _context["default"]
  })(createGroupContainer(Group));
  ConnectedGroupContainer.displayName = "ConnectedGroupContainer";
  return ConnectedGroupContainer;
};