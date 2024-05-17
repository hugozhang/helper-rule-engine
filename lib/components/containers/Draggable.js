"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SortableContainer = require("./SortableContainer");
var _excluded = ["isDraggingTempo", "isDraggingMe", "dragging"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var classNames = require("classnames");
var _default = exports["default"] = function _default(className) {
  return function (GroupOrRule) {
    var _Draggable;
    return _Draggable = /*#__PURE__*/function (_PureComponent) {
      function Draggable(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, Draggable);
        _this = _callSuper(this, Draggable, [props]);
        _this.handleDraggerMouseDown = function (e) {
          var nodeId = _this.props.id;
          var dom = _this.wrapper.current;
          if (_this.props.onDragStart) {
            _this.props.onDragStart(nodeId, dom, e);
          }
        };
        _this.wrapper = /*#__PURE__*/_react["default"].createRef();
        return _this;
      }
      (0, _inherits2["default"])(Draggable, _PureComponent);
      return (0, _createClass2["default"])(Draggable, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
            isDraggingTempo = _this$props.isDraggingTempo,
            isDraggingMe = _this$props.isDraggingMe,
            dragging = _this$props.dragging,
            otherProps = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
          var isTrueLocked = otherProps.isTrueLocked;
          var styles = {};
          if (isDraggingMe && isDraggingTempo) {
            if (_SortableContainer._isReorderingTree) {
              // don't apply old styles for dragging tempo during reorder
            } else {
              styles = {
                top: dragging.y,
                left: dragging.x,
                width: dragging.w
              };
            }
          }
          var cn = classNames(className, "group-or-rule", isDraggingMe && isDraggingTempo ? "qb-draggable" : null, isDraggingMe && !isDraggingTempo ? "qb-placeholder" : null, isTrueLocked ? "locked" : null);
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: cn,
            style: styles,
            ref: this.wrapper,
            "data-id": this.props.id
          }, /*#__PURE__*/_react["default"].createElement(GroupOrRule, (0, _extends2["default"])({
            handleDraggerMouseDown: this.handleDraggerMouseDown,
            isDraggingMe: isDraggingMe,
            isDraggingTempo: isDraggingTempo
          }, otherProps)));
        }
      }]);
    }(_react.PureComponent), _Draggable.propTypes = {
      isDraggingTempo: _propTypes["default"].bool,
      isDraggingMe: _propTypes["default"].bool,
      onDragStart: _propTypes["default"].func,
      dragging: _propTypes["default"].object,
      //{id, x, y, w, h}
      isLocked: _propTypes["default"].bool,
      isTrueLocked: _propTypes["default"].bool
    }, _Draggable;
  };
};