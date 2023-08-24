"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _GroupContainer = _interopRequireDefault(require("../containers/GroupContainer"));
var _Draggable = _interopRequireDefault(require("../containers/Draggable"));
var _Group = require("./Group");
var _RuleGroupExtActions = require("./RuleGroupExtActions");
var _FieldWrapper = _interopRequireDefault(require("../rule/FieldWrapper"));
var _OperatorWrapper = _interopRequireDefault(require("../rule/OperatorWrapper"));
var _reactUtils = require("../../utils/reactUtils");
var _utils = require("../utils");
var _configUtils = require("../../utils/configUtils");
var _Widget = _interopRequireDefault(require("../rule/Widget"));
var _initClass, _dec;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function old_createMetadataMethodsForProperty(metadataMap, kind, property, decoratorFinishedRef) { return { getMetadata: function getMetadata(key) { old_assertNotFinished(decoratorFinishedRef, "getMetadata"), old_assertMetadataKey(key); var metadataForKey = metadataMap[key]; if (void 0 !== metadataForKey) if (1 === kind) { var pub = metadataForKey["public"]; if (void 0 !== pub) return pub[property]; } else if (2 === kind) { var priv = metadataForKey["private"]; if (void 0 !== priv) return priv.get(property); } else if (Object.hasOwnProperty.call(metadataForKey, "constructor")) return metadataForKey.constructor; }, setMetadata: function setMetadata(key, value) { old_assertNotFinished(decoratorFinishedRef, "setMetadata"), old_assertMetadataKey(key); var metadataForKey = metadataMap[key]; if (void 0 === metadataForKey && (metadataForKey = metadataMap[key] = {}), 1 === kind) { var pub = metadataForKey["public"]; void 0 === pub && (pub = metadataForKey["public"] = {}), pub[property] = value; } else if (2 === kind) { var priv = metadataForKey.priv; void 0 === priv && (priv = metadataForKey["private"] = new Map()), priv.set(property, value); } else metadataForKey.constructor = value; } }; }
function old_convertMetadataMapToFinal(obj, metadataMap) { var parentMetadataMap = obj[Symbol.metadata || Symbol["for"]("Symbol.metadata")], metadataKeys = Object.getOwnPropertySymbols(metadataMap); if (0 !== metadataKeys.length) { for (var i = 0; i < metadataKeys.length; i++) { var key = metadataKeys[i], metaForKey = metadataMap[key], parentMetaForKey = parentMetadataMap ? parentMetadataMap[key] : null, pub = metaForKey["public"], parentPub = parentMetaForKey ? parentMetaForKey["public"] : null; pub && parentPub && Object.setPrototypeOf(pub, parentPub); var priv = metaForKey["private"]; if (priv) { var privArr = Array.from(priv.values()), parentPriv = parentMetaForKey ? parentMetaForKey["private"] : null; parentPriv && (privArr = privArr.concat(parentPriv)), metaForKey["private"] = privArr; } parentMetaForKey && Object.setPrototypeOf(metaForKey, parentMetaForKey); } parentMetadataMap && Object.setPrototypeOf(metadataMap, parentMetadataMap), obj[Symbol.metadata || Symbol["for"]("Symbol.metadata")] = metadataMap; } }
function old_createAddInitializerMethod(initializers, decoratorFinishedRef) { return function (initializer) { old_assertNotFinished(decoratorFinishedRef, "addInitializer"), old_assertCallable(initializer, "An initializer"), initializers.push(initializer); }; }
function old_memberDec(dec, name, desc, metadataMap, initializers, kind, isStatic, isPrivate, value) { var kindStr; switch (kind) { case 1: kindStr = "accessor"; break; case 2: kindStr = "method"; break; case 3: kindStr = "getter"; break; case 4: kindStr = "setter"; break; default: kindStr = "field"; } var metadataKind, metadataName, ctx = { kind: kindStr, name: isPrivate ? "#" + name : name, isStatic: isStatic, isPrivate: isPrivate }, decoratorFinishedRef = { v: !1 }; if (0 !== kind && (ctx.addInitializer = old_createAddInitializerMethod(initializers, decoratorFinishedRef)), isPrivate) { metadataKind = 2, metadataName = Symbol(name); var access = {}; 0 === kind ? (access.get = desc.get, access.set = desc.set) : 2 === kind ? access.get = function () { return desc.value; } : (1 !== kind && 3 !== kind || (access.get = function () { return desc.get.call(this); }), 1 !== kind && 4 !== kind || (access.set = function (v) { desc.set.call(this, v); })), ctx.access = access; } else metadataKind = 1, metadataName = name; try { return dec(value, Object.assign(ctx, old_createMetadataMethodsForProperty(metadataMap, metadataKind, metadataName, decoratorFinishedRef))); } finally { decoratorFinishedRef.v = !0; } }
function old_assertNotFinished(decoratorFinishedRef, fnName) { if (decoratorFinishedRef.v) throw new Error("attempted to call " + fnName + " after decoration was finished"); }
function old_assertMetadataKey(key) { if ("symbol" != _typeof(key)) throw new TypeError("Metadata keys must be symbols, received: " + key); }
function old_assertCallable(fn, hint) { if ("function" != typeof fn) throw new TypeError(hint + " must be a function"); }
function old_assertValidReturnValue(kind, value) { var type = _typeof(value); if (1 === kind) { if ("object" !== type || null === value) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0"); void 0 !== value.get && old_assertCallable(value.get, "accessor.get"), void 0 !== value.set && old_assertCallable(value.set, "accessor.set"), void 0 !== value.init && old_assertCallable(value.init, "accessor.init"), void 0 !== value.initializer && old_assertCallable(value.initializer, "accessor.initializer"); } else if ("function" !== type) { var hint; throw hint = 0 === kind ? "field" : 10 === kind ? "class" : "method", new TypeError(hint + " decorators must return a function or void 0"); } }
function old_getInit(desc) { var initializer; return null == (initializer = desc.init) && (initializer = desc.initializer) && "undefined" != typeof console && console.warn(".initializer has been renamed to .init as of March 2022"), initializer; }
function old_applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, metadataMap, initializers) { var desc, initializer, value, newValue, get, set, decs = decInfo[0]; if (isPrivate ? desc = 0 === kind || 1 === kind ? { get: decInfo[3], set: decInfo[4] } : 3 === kind ? { get: decInfo[3] } : 4 === kind ? { set: decInfo[3] } : { value: decInfo[3] } : 0 !== kind && (desc = Object.getOwnPropertyDescriptor(base, name)), 1 === kind ? value = { get: desc.get, set: desc.set } : 2 === kind ? value = desc.value : 3 === kind ? value = desc.get : 4 === kind && (value = desc.set), "function" == typeof decs) void 0 !== (newValue = old_memberDec(decs, name, desc, metadataMap, initializers, kind, isStatic, isPrivate, value)) && (old_assertValidReturnValue(kind, newValue), 0 === kind ? initializer = newValue : 1 === kind ? (initializer = old_getInit(newValue), get = newValue.get || value.get, set = newValue.set || value.set, value = { get: get, set: set }) : value = newValue);else for (var i = decs.length - 1; i >= 0; i--) { var newInit; if (void 0 !== (newValue = old_memberDec(decs[i], name, desc, metadataMap, initializers, kind, isStatic, isPrivate, value))) old_assertValidReturnValue(kind, newValue), 0 === kind ? newInit = newValue : 1 === kind ? (newInit = old_getInit(newValue), get = newValue.get || value.get, set = newValue.set || value.set, value = { get: get, set: set }) : value = newValue, void 0 !== newInit && (void 0 === initializer ? initializer = newInit : "function" == typeof initializer ? initializer = [initializer, newInit] : initializer.push(newInit)); } if (0 === kind || 1 === kind) { if (void 0 === initializer) initializer = function initializer(instance, init) { return init; };else if ("function" != typeof initializer) { var ownInitializers = initializer; initializer = function initializer(instance, init) { for (var value = init, i = 0; i < ownInitializers.length; i++) value = ownInitializers[i].call(instance, value); return value; }; } else { var originalInitializer = initializer; initializer = function initializer(instance, init) { return originalInitializer.call(instance, init); }; } ret.push(initializer); } 0 !== kind && (1 === kind ? (desc.get = value.get, desc.set = value.set) : 2 === kind ? desc.value = value : 3 === kind ? desc.get = value : 4 === kind && (desc.set = value), isPrivate ? 1 === kind ? (ret.push(function (instance, args) { return value.get.call(instance, args); }), ret.push(function (instance, args) { return value.set.call(instance, args); })) : 2 === kind ? ret.push(value) : ret.push(function (instance, args) { return value.call(instance, args); }) : Object.defineProperty(base, name, desc)); }
function old_applyMemberDecs(ret, Class, protoMetadataMap, staticMetadataMap, decInfos) { for (var protoInitializers, staticInitializers, existingProtoNonFields = new Map(), existingStaticNonFields = new Map(), i = 0; i < decInfos.length; i++) { var decInfo = decInfos[i]; if (Array.isArray(decInfo)) { var base, metadataMap, initializers, kind = decInfo[1], name = decInfo[2], isPrivate = decInfo.length > 3, isStatic = kind >= 5; if (isStatic ? (base = Class, metadataMap = staticMetadataMap, 0 !== (kind -= 5) && (initializers = staticInitializers = staticInitializers || [])) : (base = Class.prototype, metadataMap = protoMetadataMap, 0 !== kind && (initializers = protoInitializers = protoInitializers || [])), 0 !== kind && !isPrivate) { var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields, existingKind = existingNonFields.get(name) || 0; if (!0 === existingKind || 3 === existingKind && 4 !== kind || 4 === existingKind && 3 !== kind) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name); !existingKind && kind > 2 ? existingNonFields.set(name, kind) : existingNonFields.set(name, !0); } old_applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, metadataMap, initializers); } } old_pushInitializers(ret, protoInitializers), old_pushInitializers(ret, staticInitializers); }
function old_pushInitializers(ret, initializers) { initializers && ret.push(function (instance) { for (var i = 0; i < initializers.length; i++) initializers[i].call(instance); return instance; }); }
function old_applyClassDecs(ret, targetClass, metadataMap, classDecs) { if (classDecs.length > 0) { for (var initializers = [], newClass = targetClass, name = targetClass.name, i = classDecs.length - 1; i >= 0; i--) { var decoratorFinishedRef = { v: !1 }; try { var ctx = Object.assign({ kind: "class", name: name, addInitializer: old_createAddInitializerMethod(initializers, decoratorFinishedRef) }, old_createMetadataMethodsForProperty(metadataMap, 0, name, decoratorFinishedRef)), nextNewClass = classDecs[i](newClass, ctx); } finally { decoratorFinishedRef.v = !0; } void 0 !== nextNewClass && (old_assertValidReturnValue(10, nextNewClass), newClass = nextNewClass); } ret.push(newClass, function () { for (var i = 0; i < initializers.length; i++) initializers[i].call(newClass); }); } }
function _applyDecs(targetClass, memberDecs, classDecs) { var ret = [], staticMetadataMap = {}, protoMetadataMap = {}; return old_applyMemberDecs(ret, targetClass, protoMetadataMap, staticMetadataMap, memberDecs), old_convertMetadataMapToFinal(targetClass.prototype, protoMetadataMap), old_applyClassDecs(ret, targetClass, staticMetadataMap, classDecs), old_convertMetadataMapToFinal(targetClass, staticMetadataMap), ret; }
function _identity(x) { return x; }
var classNames = require("classnames");
var _RuleGroupExt;
_dec = (0, _Draggable["default"])("group rule_group_ext");
new (function (_class2) {
  var RuleGroupExt = /*#__PURE__*/function (_BasicGroup) {
    (0, _inherits2["default"])(RuleGroupExt, _BasicGroup);
    var _super = _createSuper(RuleGroupExt);
    function RuleGroupExt(props) {
      var _this;
      (0, _classCallCheck2["default"])(this, RuleGroupExt);
      _this = _super.call(this, props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "childrenClassName", function () {
        return "rule_group_ext--children";
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderFooterWrapper", function () {
        return null;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "canAddGroup", function () {
        return false;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "canAddRule", function () {
        return true;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "canDeleteGroup", function () {
        return true;
      });
      (0, _reactUtils.useOnPropsChanged)((0, _assertThisInitialized2["default"])(_this));
      _this.onPropsChanged(props);
      return _this;
    }
    (0, _createClass2["default"])(RuleGroupExt, [{
      key: "onPropsChanged",
      value: function onPropsChanged(nextProps) {}
    }, {
      key: "renderHeaderWrapper",
      value: function renderHeaderWrapper() {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: "group-header",
          className: classNames("group--header", this.isOneChild() ? "one--child" : "", this.showDragIcon() ? "with--drag" : "hide--drag", this.showConjs() && (!this.isOneChild() || this.showNot()) ? "with--conjs" : "hide--conjs")
        }, this.renderHeader(), this.renderGroupField(), this.renderActions());
      }
    }, {
      key: "renderHeader",
      value: function renderHeader() {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "group--conjunctions"
        }, this.renderConjs(), this.renderDrag());
      }
    }, {
      key: "renderGroupField",
      value: function renderGroupField() {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "group--field--count--rule"
        }, this.renderField(), this.renderOperator(), this.renderWidget());
      }
    }, {
      key: "showNot",
      value: function showNot() {
        var _this$props = this.props,
          config = _this$props.config,
          selectedField = _this$props.selectedField,
          selectedOperator = _this$props.selectedOperator;
        var selectedFieldConfig = (0, _configUtils.getFieldConfig)(config, selectedField) || {};
        return selectedFieldConfig.showNot != undefined ? selectedFieldConfig.showNot : config.settings.showNot;
      }
    }, {
      key: "conjunctionOptions",
      value: function conjunctionOptions() {
        var _this$props2 = this.props,
          config = _this$props2.config,
          selectedField = _this$props2.selectedField,
          selectedOperator = _this$props2.selectedOperator;
        var selectedFieldConfig = (0, _configUtils.getFieldConfig)(config, selectedField) || {};
        var conjunctionOptions = (0, _get2["default"])((0, _getPrototypeOf2["default"])(RuleGroupExt.prototype), "conjunctionOptions", this).call(this);
        if (selectedFieldConfig.conjunctions) {
          var filtered = {};
          var _iterator = _createForOfIteratorHelper(selectedFieldConfig.conjunctions),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var k = _step.value;
              filtered[k] = conjunctionOptions[k];
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          conjunctionOptions = filtered;
        }
        return conjunctionOptions;
      }
    }, {
      key: "renderField",
      value: function renderField() {
        var _this$props3 = this.props,
          config = _this$props3.config,
          selectedField = _this$props3.selectedField,
          setField = _this$props3.setField,
          parentField = _this$props3.parentField,
          id = _this$props3.id,
          groupId = _this$props3.groupId,
          isLocked = _this$props3.isLocked;
        var immutableFieldsMode = config.settings.immutableFieldsMode;
        return /*#__PURE__*/_react["default"].createElement(_FieldWrapper["default"], {
          key: "field",
          classname: "rule--field",
          config: config,
          selectedField: selectedField,
          setField: setField,
          parentField: parentField,
          readonly: immutableFieldsMode || isLocked,
          id: id,
          groupId: groupId
        });
      }
    }, {
      key: "renderOperator",
      value: function renderOperator() {
        var _this$props4 = this.props,
          config = _this$props4.config,
          selectedField = _this$props4.selectedField,
          selectedOperator = _this$props4.selectedOperator,
          setField = _this$props4.setField,
          setOperator = _this$props4.setOperator,
          isLocked = _this$props4.isLocked;
        var immutableFieldsMode = config.settings.immutableFieldsMode;
        var selectedFieldWidgetConfig = (0, _configUtils.getFieldWidgetConfig)(config, selectedField, selectedOperator) || {};
        var hideOperator = selectedFieldWidgetConfig.hideOperator;
        var showOperatorLabel = selectedField && hideOperator && selectedFieldWidgetConfig.operatorInlineLabel;
        var showOperator = selectedField && !hideOperator;
        return /*#__PURE__*/_react["default"].createElement(_OperatorWrapper["default"], {
          key: "operator",
          classname: "group--operator",
          config: config,
          selectedField: selectedField,
          selectedOperator: selectedOperator,
          setField: setField,
          setOperator: setOperator,
          selectedFieldPartsLabels: ["group"],
          showOperator: showOperator,
          showOperatorLabel: showOperatorLabel,
          selectedFieldWidgetConfig: selectedFieldWidgetConfig,
          readonly: immutableFieldsMode || isLocked,
          id: this.props.id,
          groupId: this.props.groupId
        });
      }
    }, {
      key: "renderWidget",
      value: function renderWidget() {
        var _this$props5 = this.props,
          config = _this$props5.config,
          selectedField = _this$props5.selectedField,
          selectedOperator = _this$props5.selectedOperator,
          isLocked = _this$props5.isLocked;
        var immutableValuesMode = config.settings.immutableValuesMode;
        var isFieldAndOpSelected = selectedField && selectedOperator;
        var showWidget = isFieldAndOpSelected;
        if (!showWidget) return null;
        var widget = /*#__PURE__*/_react["default"].createElement(_Widget["default"], {
          key: "values",
          isForRuleGruop: true,
          field: this.props.selectedField,
          operator: this.props.selectedOperator,
          value: this.props.value,
          valueSrc: "value",
          valueError: null,
          config: config,
          setValue: !immutableValuesMode ? this.props.setValue : _utils.dummyFn,
          setValueSrc: _utils.dummyFn,
          readonly: immutableValuesMode || isLocked,
          id: this.props.id,
          groupId: this.props.groupId
        });
        return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
          key: "widget-for-" + this.props.selectedOperator,
          className: "rule--value"
        }, widget);
      }
    }, {
      key: "renderActions",
      value: function renderActions() {
        var _this$props6 = this.props,
          config = _this$props6.config,
          addRule = _this$props6.addRule,
          isLocked = _this$props6.isLocked,
          isTrueLocked = _this$props6.isTrueLocked,
          id = _this$props6.id;
        return /*#__PURE__*/_react["default"].createElement(_RuleGroupExtActions.RuleGroupExtActions, {
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
      key: "reordableNodesCntForItem",
      value: function reordableNodesCntForItem(_item) {
        if (this.props.isLocked) return 0;
        var children1 = this.props.children1;
        return children1.size;
      }
    }, {
      key: "extraPropsForItem",
      value: function extraPropsForItem(_item) {
        return {
          parentField: this.props.selectedField
        };
      }
    }]);
    return RuleGroupExt;
  }(_Group.BasicGroup);
  _class2 = RuleGroupExt;
  var _applyDecs2 = _applyDecs(_class2, [], [_GroupContainer["default"], _dec, _utils.ConfirmFn]);
  var _applyDecs3 = (0, _slicedToArray2["default"])(_applyDecs2, 2);
  _RuleGroupExt = _applyDecs3[0];
  _initClass = _applyDecs3[1];
}(), /*#__PURE__*/function (_identity2) {
  (0, _inherits2["default"])(_class3, _identity2);
  var _super2 = _createSuper(_class3);
  function _class3() {
    var _this2;
    (0, _classCallCheck2["default"])(this, _class3);
    (_this2 = _super2.call(this, _RuleGroupExt), (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "propTypes", _objectSpread(_objectSpread({}, _Group.BasicGroup.propTypes), {}, {
      selectedField: _propTypes["default"].string,
      selectedOperator: _propTypes["default"].string,
      value: _propTypes["default"].any,
      parentField: _propTypes["default"].string,
      setField: _propTypes["default"].func,
      setOperator: _propTypes["default"].func,
      setValue: _propTypes["default"].func
    }))), _initClass();
    return _this2;
  }
  return (0, _createClass2["default"])(_class3);
}(_identity))();
var _default = _RuleGroupExt;
exports["default"] = _default;