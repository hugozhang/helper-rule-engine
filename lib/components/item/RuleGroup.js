"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _GroupContainer = _interopRequireDefault(require("../containers/GroupContainer"));
var _Draggable = _interopRequireDefault(require("../containers/Draggable"));
var _Group = require("./Group");
var _RuleGroupActions = require("./RuleGroupActions");
var _FieldWrapper = _interopRequireDefault(require("../rule/FieldWrapper"));
var _reactUtils = require("../../utils/reactUtils");
var _utils = require("../utils");
var _dec, _class, _RuleGroup;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var RuleGroup = (_dec = (0, _Draggable["default"])("group rule_group"), (0, _GroupContainer["default"])(_class = _dec(_class = (0, _utils.ConfirmFn)(_class = (_RuleGroup = /*#__PURE__*/function (_BasicGroup) {
  function RuleGroup(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RuleGroup);
    _this = _callSuper(this, RuleGroup, [props]);
    _this.childrenClassName = function () {
      return "rule_group--children";
    };
    _this.renderHeaderWrapper = function () {
      return null;
    };
    _this.renderFooterWrapper = function () {
      return null;
    };
    _this.renderConjs = function () {
      return null;
    };
    _this.canAddGroup = function () {
      return false;
    };
    _this.canAddRule = function () {
      return true;
    };
    _this.canDeleteGroup = function () {
      return false;
    };
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this.onPropsChanged(props);
    return _this;
  }
  (0, _inherits2["default"])(RuleGroup, _BasicGroup);
  return (0, _createClass2["default"])(RuleGroup, [{
    key: "onPropsChanged",
    value: function onPropsChanged(nextProps) {}
  }, {
    key: "reordableNodesCntForItem",
    value: function reordableNodesCntForItem(_item) {
      if (this.props.isLocked) return 0;
      var children1 = this.props.children1;
      return children1.size;
    }
  }, {
    key: "renderChildrenWrapper",
    value: function renderChildrenWrapper() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderDrag(), this.renderField(), this.renderActions(), (0, _get2["default"])((0, _getPrototypeOf2["default"])(RuleGroup.prototype), "renderChildrenWrapper", this).call(this));
    }
  }, {
    key: "renderField",
    value: function renderField() {
      var _this$props = this.props,
        config = _this$props.config,
        selectedField = _this$props.selectedField,
        setField = _this$props.setField,
        parentField = _this$props.parentField,
        id = _this$props.id,
        groupId = _this$props.groupId,
        isLocked = _this$props.isLocked;
      var immutableFieldsMode = config.settings.immutableFieldsMode;
      return /*#__PURE__*/_react["default"].createElement(_FieldWrapper["default"], {
        key: "field",
        classname: "group--field",
        config: config,
        selectedField: selectedField,
        setField: setField,
        parentField: parentField
        // readonly={immutableFieldsMode || isLocked}
        ,
        readonly: true,
        id: id,
        groupId: groupId
      });
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var _this$props2 = this.props,
        config = _this$props2.config,
        addRule = _this$props2.addRule,
        isLocked = _this$props2.isLocked,
        isTrueLocked = _this$props2.isTrueLocked,
        id = _this$props2.id;
      return /*#__PURE__*/_react["default"].createElement(_RuleGroupActions.RuleGroupActions, {
        config: config,
        addRule: addRule,
        canAddRule: this.canAddRule(),
        canDeleteGroup: this.canDeleteGroup(),
        removeSelf: this.removeSelf,
        setLock: this.setLock,
        isLocked: isLocked,
        isTrueLocked: isTrueLocked,
        id: id
      });
    }
  }, {
    key: "extraPropsForItem",
    value: function extraPropsForItem(_item) {
      return {
        parentField: this.props.selectedField
      };
    }
  }]);
}(_Group.BasicGroup), _RuleGroup.propTypes = _objectSpread(_objectSpread({}, _Group.BasicGroup.propTypes), {}, {
  selectedField: _propTypes["default"].string,
  parentField: _propTypes["default"].string,
  setField: _propTypes["default"].func
}), _RuleGroup)) || _class) || _class) || _class);
var _default = exports["default"] = RuleGroup;