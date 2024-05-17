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
var _context = _interopRequireDefault(require("../../stores/context"));
var _configUtils = require("../../utils/configUtils");
var _reactUtils = require("../../utils/reactUtils");
var _reactRedux = require("react-redux");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var classNames = require("classnames");
var createRuleContainer = function createRuleContainer(Rule) {
  var _RuleContainer;
  return _RuleContainer = /*#__PURE__*/function (_Component) {
    function RuleContainer(props) {
      var _this;
      (0, _classCallCheck2["default"])(this, RuleContainer);
      _this = _callSuper(this, RuleContainer, [props]);
      _this.dummyFn = function () {};
      _this.removeSelf = function () {
        _this.props.actions.removeRule(_this.props.path);
      };
      _this.setLock = function () {
        var lock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        _this.props.actions.setLock(_this.props.path, lock);
      };
      _this.setField = function (field) {
        _this.props.actions.setField(_this.props.path, field);
      };
      _this.setOperator = function (operator) {
        _this.props.actions.setOperator(_this.props.path, operator);
      };
      _this.setOperatorOption = function (name, value) {
        _this.props.actions.setOperatorOption(_this.props.path, name, value);
      };
      _this.setValue = function (delta, value, type, asyncListValues, __isInternal) {
        _this.props.actions.setValue(_this.props.path, delta, value, type, asyncListValues, __isInternal);
      };
      _this.setValueSrc = function (delta, srcKey) {
        _this.props.actions.setValueSrc(_this.props.path, delta, srcKey);
      };
      _this.dummyFn.isDummyFn = true;
      return _this;
    }
    (0, _inherits2["default"])(RuleContainer, _Component);
    return (0, _createClass2["default"])(RuleContainer, [{
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
      key: "render",
      value: function render() {
        var isDraggingMe = this.props.dragging.id == this.props.id;
        var fieldConfig = (0, _configUtils.getFieldConfig)(this.props.config, this.props.field);
        var showErrorMessage = this.props.config.settings.showErrorMessage;
        var _isGroup = fieldConfig && fieldConfig.type == "!struct";
        var isInDraggingTempo = !isDraggingMe && this.props.isDraggingTempo;
        var valueError = this.props.valueError;
        var oneValueError = valueError && valueError.toArray().filter(function (e) {
          return !!e;
        }).shift() || null;
        var hasError = oneValueError != null && showErrorMessage;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: classNames("group-or-rule-container", "rule-container", hasError ? "rule-with-error" : null),
          "data-id": this.props.id
        }, [isDraggingMe ? /*#__PURE__*/_react["default"].createElement(Rule, {
          key: "dragging",
          id: this.props.id,
          groupId: this.props.groupId,
          isDraggingMe: true,
          isDraggingTempo: true,
          dragging: this.props.dragging,
          setField: this.dummyFn,
          setOperator: this.dummyFn,
          setOperatorOption: this.dummyFn,
          setLock: this.dummyFn,
          removeSelf: this.dummyFn,
          setValue: this.dummyFn,
          setValueSrc: this.dummyFn,
          selectedField: this.props.field || null,
          parentField: this.props.parentField || null,
          selectedOperator: this.props.operator || null,
          value: this.props.value || null,
          valueSrc: this.props.valueSrc || null,
          valueError: this.props.valueError || null,
          operatorOptions: this.props.operatorOptions,
          config: this.props.config,
          reordableNodesCnt: this.props.reordableNodesCnt,
          totalRulesCnt: this.props.totalRulesCnt,
          asyncListValues: this.props.asyncListValues,
          isLocked: this.props.isLocked,
          isTrueLocked: this.props.isTrueLocked,
          parentReordableNodesCnt: this.props.parentReordableNodesCnt
        }) : null, /*#__PURE__*/_react["default"].createElement(Rule, {
          key: this.props.id,
          id: this.props.id,
          groupId: this.props.groupId,
          isDraggingMe: isDraggingMe,
          isDraggingTempo: isInDraggingTempo,
          onDragStart: this.props.onDragStart,
          setLock: isInDraggingTempo ? this.dummyFn : this.setLock,
          removeSelf: isInDraggingTempo ? this.dummyFn : this.removeSelf,
          setField: isInDraggingTempo ? this.dummyFn : this.setField,
          setOperator: isInDraggingTempo ? this.dummyFn : this.setOperator,
          setOperatorOption: isInDraggingTempo ? this.dummyFn : this.setOperatorOption,
          setValue: isInDraggingTempo ? this.dummyFn : this.setValue,
          setValueSrc: isInDraggingTempo ? this.dummyFn : this.setValueSrc,
          selectedField: this.props.field || null,
          parentField: this.props.parentField || null,
          selectedOperator: this.props.operator || null,
          value: this.props.value || null,
          valueSrc: this.props.valueSrc || null,
          valueError: this.props.valueError || null,
          operatorOptions: this.props.operatorOptions,
          config: this.props.config,
          reordableNodesCnt: this.props.reordableNodesCnt,
          totalRulesCnt: this.props.totalRulesCnt,
          asyncListValues: this.props.asyncListValues,
          isLocked: this.props.isLocked,
          isTrueLocked: this.props.isTrueLocked,
          parentReordableNodesCnt: this.props.parentReordableNodesCnt
        })]);
      }
    }]);
  }(_react.Component), _RuleContainer.propTypes = {
    id: _propTypes["default"].string.isRequired,
    groupId: _propTypes["default"].string,
    config: _propTypes["default"].object.isRequired,
    path: _propTypes["default"].any.isRequired,
    //instanceOf(Immutable.List)
    operator: _propTypes["default"].string,
    field: _propTypes["default"].string,
    actions: _propTypes["default"].object.isRequired,
    //{removeRule: Funciton, setField, setOperator, setOperatorOption, setValue, setValueSrc, ...}
    onDragStart: _propTypes["default"].func,
    value: _propTypes["default"].any,
    //depends on widget
    valueSrc: _propTypes["default"].any,
    asyncListValues: _propTypes["default"].array,
    valueError: _propTypes["default"].any,
    operatorOptions: _propTypes["default"].object,
    reordableNodesCnt: _propTypes["default"].number,
    parentField: _propTypes["default"].string,
    //from RuleGroup
    isLocked: _propTypes["default"].bool,
    isTrueLocked: _propTypes["default"].bool,
    //connected:
    dragging: _propTypes["default"].object,
    //{id, x, y, w, h}
    isDraggingTempo: _propTypes["default"].bool
  }, _RuleContainer;
};
var _default = exports["default"] = function _default(Rule) {
  var ConnectedRuleContainer = (0, _reactRedux.connect)(function (state) {
    return {
      dragging: state.dragging
    };
  }, null, null, {
    context: _context["default"]
  })(createRuleContainer(Rule));
  ConnectedRuleContainer.displayName = "ConnectedRuleContainer";
  return ConnectedRuleContainer;
};