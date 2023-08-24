"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RuleContainer = _interopRequireDefault(require("../containers/RuleContainer"));
var _Draggable = _interopRequireDefault(require("../containers/Draggable"));
var _OperatorWrapper = _interopRequireDefault(require("../rule/OperatorWrapper"));
var _FieldWrapper = _interopRequireDefault(require("../rule/FieldWrapper"));
var _Widget = _interopRequireDefault(require("../rule/Widget"));
var _OperatorOptions = _interopRequireDefault(require("../rule/OperatorOptions"));
var _configUtils = require("../../utils/configUtils");
var _ruleUtils = require("../../utils/ruleUtils");
var _reactUtils = require("../../utils/reactUtils");
var _utils = require("../utils");
var _initClass, _dec;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var _Rule;
_dec = (0, _Draggable["default"])("rule");
new (function (_class2) {
  var Rule = /*#__PURE__*/function (_PureComponent) {
    _inherits(Rule, _PureComponent);
    var _super = _createSuper(Rule);
    function Rule(props) {
      var _this;
      _classCallCheck(this, Rule);
      _this = _super.call(this, props);
      (0, _reactUtils.useOnPropsChanged)(_assertThisInitialized(_this));
      _this.removeSelf = _this.removeSelf.bind(_assertThisInitialized(_this));
      _this.setLock = _this.setLock.bind(_assertThisInitialized(_this));
      _this.onPropsChanged(props);
      return _this;
    }
    _createClass(Rule, [{
      key: "onPropsChanged",
      value: function onPropsChanged(nextProps) {
        var prevProps = this.props;
        var keysForMeta = ["selectedField", "selectedOperator", "config", "reordableNodesCnt", "isLocked"];
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
      value: function getMeta(_ref) {
        var selectedField = _ref.selectedField,
          selectedOperator = _ref.selectedOperator,
          config = _ref.config,
          reordableNodesCnt = _ref.reordableNodesCnt,
          isLocked = _ref.isLocked;
        var selectedFieldPartsLabels = (0, _ruleUtils.getFieldPathLabels)(selectedField, config);
        var selectedFieldConfig = (0, _configUtils.getFieldConfig)(config, selectedField);
        var isSelectedGroup = selectedFieldConfig && selectedFieldConfig.type == "!struct";
        var isFieldAndOpSelected = selectedField && selectedOperator && !isSelectedGroup;
        var selectedOperatorConfig = (0, _configUtils.getOperatorConfig)(config, selectedOperator, selectedField);
        var selectedOperatorHasOptions = selectedOperatorConfig && selectedOperatorConfig.options != null;
        var selectedFieldWidgetConfig = (0, _configUtils.getFieldWidgetConfig)(config, selectedField, selectedOperator) || {};
        var hideOperator = selectedFieldWidgetConfig.hideOperator;
        var showDragIcon = config.settings.canReorder && reordableNodesCnt > 1 && !isLocked;
        var showOperator = selectedField && !hideOperator;
        var showOperatorLabel = selectedField && hideOperator && selectedFieldWidgetConfig.operatorInlineLabel;
        var showWidget = isFieldAndOpSelected;
        var showOperatorOptions = isFieldAndOpSelected && selectedOperatorHasOptions;
        return {
          selectedFieldPartsLabels: selectedFieldPartsLabels,
          selectedFieldWidgetConfig: selectedFieldWidgetConfig,
          showDragIcon: showDragIcon,
          showOperator: showOperator,
          showOperatorLabel: showOperatorLabel,
          showWidget: showWidget,
          showOperatorOptions: showOperatorOptions
        };
      }
    }, {
      key: "setLock",
      value: function setLock(lock) {
        this.props.setLock(lock);
      }
    }, {
      key: "removeSelf",
      value: function removeSelf() {
        var _this2 = this;
        var confirmFn = this.props.confirmFn;
        var _this$props$config$se = this.props.config.settings,
          renderConfirm = _this$props$config$se.renderConfirm,
          confirmOptions = _this$props$config$se.removeRuleConfirmOptions;
        var doRemove = function doRemove() {
          _this2.props.removeSelf();
        };
        if (confirmOptions && !this.isEmptyCurrentRule()) {
          renderConfirm(_objectSpread(_objectSpread({}, confirmOptions), {}, {
            onOk: doRemove,
            onCancel: null,
            confirmFn: confirmFn
          }));
        } else {
          doRemove();
        }
      }
    }, {
      key: "isEmptyCurrentRule",
      value: function isEmptyCurrentRule() {
        return !(this.props.selectedField !== null && this.props.selectedOperator !== null && this.props.value.filter(function (val) {
          return val !== undefined;
        }).size > 0);
      }
    }, {
      key: "renderField",
      value: function renderField() {
        var _this$props = this.props,
          config = _this$props.config,
          isLocked = _this$props.isLocked;
        var immutableFieldsMode = config.settings.immutableFieldsMode;
        return /*#__PURE__*/_react["default"].createElement(_FieldWrapper["default"], {
          key: "field",
          classname: "rule--field",
          config: config,
          selectedField: this.props.selectedField,
          setField: !immutableFieldsMode ? this.props.setField : _utils.dummyFn,
          parentField: this.props.parentField,
          readonly: immutableFieldsMode || isLocked,
          id: this.props.id,
          groupId: this.props.groupId
        });
      }
    }, {
      key: "renderOperator",
      value: function renderOperator() {
        var _this$props2 = this.props,
          config = _this$props2.config,
          isLocked = _this$props2.isLocked;
        var _this$meta = this.meta,
          selectedFieldPartsLabels = _this$meta.selectedFieldPartsLabels,
          selectedFieldWidgetConfig = _this$meta.selectedFieldWidgetConfig,
          showOperator = _this$meta.showOperator,
          showOperatorLabel = _this$meta.showOperatorLabel;
        var immutableOpsMode = config.settings.immutableOpsMode;
        return /*#__PURE__*/_react["default"].createElement(_OperatorWrapper["default"], {
          key: "operator",
          config: config,
          selectedField: this.props.selectedField,
          selectedOperator: this.props.selectedOperator,
          setOperator: !immutableOpsMode ? this.props.setOperator : _utils.dummyFn,
          selectedFieldPartsLabels: selectedFieldPartsLabels,
          showOperator: showOperator,
          showOperatorLabel: showOperatorLabel,
          selectedFieldWidgetConfig: selectedFieldWidgetConfig,
          readonly: immutableOpsMode || isLocked,
          id: this.props.id,
          groupId: this.props.groupId
        });
      }
    }, {
      key: "renderWidget",
      value: function renderWidget() {
        var _this$props3 = this.props,
          config = _this$props3.config,
          valueError = _this$props3.valueError,
          isLocked = _this$props3.isLocked;
        var showWidget = this.meta.showWidget;
        var immutableValuesMode = config.settings.immutableValuesMode;
        if (!showWidget) return null;
        var widget = /*#__PURE__*/_react["default"].createElement(_Widget["default"], {
          key: "values",
          field: this.props.selectedField,
          parentField: this.props.parentField,
          operator: this.props.selectedOperator,
          value: this.props.value,
          valueSrc: this.props.valueSrc,
          asyncListValues: this.props.asyncListValues,
          valueError: valueError,
          config: config,
          setValue: !immutableValuesMode ? this.props.setValue : _utils.dummyFn,
          setValueSrc: !immutableValuesMode ? this.props.setValueSrc : _utils.dummyFn,
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
      key: "renderOperatorOptions",
      value: function renderOperatorOptions() {
        var config = this.props.config;
        var showOperatorOptions = this.meta.showOperatorOptions;
        var _config$settings = config.settings,
          immutableOpsMode = _config$settings.immutableOpsMode,
          immutableValuesMode = _config$settings.immutableValuesMode;
        if (!showOperatorOptions) return null;
        var opOpts = /*#__PURE__*/_react["default"].createElement(_OperatorOptions["default"], {
          key: "operatorOptions",
          selectedField: this.props.selectedField,
          selectedOperator: this.props.selectedOperator,
          operatorOptions: this.props.operatorOptions,
          setOperatorOption: !immutableOpsMode ? this.props.setOperatorOption : _utils.dummyFn,
          config: config,
          readonly: immutableValuesMode
        });
        return /*#__PURE__*/_react["default"].createElement(_utils.Col, {
          key: "op-options-for-" + this.props.selectedOperator,
          className: "rule--operator-options"
        }, opOpts);
      }
    }, {
      key: "renderBeforeWidget",
      value: function renderBeforeWidget() {
        var config = this.props.config;
        var renderBeforeWidget = config.settings.renderBeforeWidget;
        return renderBeforeWidget && /*#__PURE__*/_react["default"].createElement(_utils.Col, {
          key: "before-widget-for-" + this.props.selectedOperator,
          className: "rule--before-widget"
        }, typeof renderBeforeWidget === "function" ? renderBeforeWidget(this.props) : renderBeforeWidget);
      }
    }, {
      key: "renderAfterWidget",
      value: function renderAfterWidget() {
        var config = this.props.config;
        var renderAfterWidget = config.settings.renderAfterWidget;
        return renderAfterWidget && /*#__PURE__*/_react["default"].createElement(_utils.Col, {
          key: "after-widget-for-" + this.props.selectedOperator,
          className: "rule--after-widget"
        }, typeof renderAfterWidget === "function" ? renderAfterWidget(this.props) : renderAfterWidget);
      }
    }, {
      key: "renderError",
      value: function renderError() {
        var _this$props4 = this.props,
          config = _this$props4.config,
          valueError = _this$props4.valueError;
        var _config$settings2 = config.settings,
          renderRuleError = _config$settings2.renderRuleError,
          showErrorMessage = _config$settings2.showErrorMessage;
        var oneValueError = valueError && valueError.toArray().filter(function (e) {
          return !!e;
        }).shift() || null;
        return showErrorMessage && oneValueError && /*#__PURE__*/_react["default"].createElement("div", {
          className: "rule--error"
        }, renderRuleError ? renderRuleError({
          error: oneValueError
        }) : oneValueError);
      }
    }, {
      key: "renderDrag",
      value: function renderDrag() {
        var showDragIcon = this.meta.showDragIcon;
        return showDragIcon && /*#__PURE__*/_react["default"].createElement("span", {
          key: "rule-drag-icon",
          className: "qb-drag-handler rule--drag-handler",
          onMouseDown: this.props.handleDraggerMouseDown
        }, /*#__PURE__*/_react["default"].createElement(_utils.DragIcon, null), " ");
      }
    }, {
      key: "renderDel",
      value: function renderDel() {
        var _this$props5 = this.props,
          config = _this$props5.config,
          isLocked = _this$props5.isLocked;
        var _config$settings3 = config.settings,
          deleteLabel = _config$settings3.deleteLabel,
          immutableGroupsMode = _config$settings3.immutableGroupsMode,
          Btn = _config$settings3.renderButton,
          canDeleteLocked = _config$settings3.canDeleteLocked;
        return !immutableGroupsMode && (!isLocked || isLocked && canDeleteLocked) && /*#__PURE__*/_react["default"].createElement(Btn, {
          type: "delRule",
          onClick: this.removeSelf,
          label: deleteLabel,
          config: config
        });
      }
    }, {
      key: "renderLock",
      value: function renderLock() {
        var _this$props6 = this.props,
          config = _this$props6.config,
          isLocked = _this$props6.isLocked,
          isTrueLocked = _this$props6.isTrueLocked,
          id = _this$props6.id;
        var _config$settings4 = config.settings,
          lockLabel = _config$settings4.lockLabel,
          lockedLabel = _config$settings4.lockedLabel,
          showLock = _config$settings4.showLock,
          Switch = _config$settings4.renderSwitch;
        return showLock && !(isLocked && !isTrueLocked) && /*#__PURE__*/_react["default"].createElement(Switch, {
          type: "lock",
          id: id,
          value: isLocked,
          setValue: this.setLock,
          label: lockLabel,
          checkedLabel: lockedLabel,
          hideLabel: true,
          config: config
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$meta2 = this.meta,
          showOperatorOptions = _this$meta2.showOperatorOptions,
          selectedFieldWidgetConfig = _this$meta2.selectedFieldWidgetConfig;
        var _this$props7 = this.props,
          valueSrc = _this$props7.valueSrc,
          value = _this$props7.value,
          config = _this$props7.config;
        var canShrinkValue = valueSrc.first() == "value" && !showOperatorOptions && value.size == 1 && selectedFieldWidgetConfig.fullWidth;
        var BtnGrp = config.settings.renderButtonGroup;
        var parts = [this.renderField(), this.renderOperator(), this.renderBeforeWidget(), this.renderWidget(), this.renderAfterWidget(), this.renderOperatorOptions()];
        var body = /*#__PURE__*/_react["default"].createElement("div", {
          key: "rule-body",
          className: classNames("rule--body", canShrinkValue && "can--shrink--value")
        }, parts);
        var error = this.renderError();
        var drag = this.renderDrag();
        var lock = this.renderLock();
        var del = this.renderDel();
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, drag, /*#__PURE__*/_react["default"].createElement("div", {
          className: "rule--body--wrapper"
        }, body, error), /*#__PURE__*/_react["default"].createElement("div", {
          className: "rule--header"
        }, /*#__PURE__*/_react["default"].createElement(BtnGrp, {
          config: config
        }, lock, del)));
      }
    }]);
    return Rule;
  }(_react.PureComponent);
  _class2 = Rule;
  var _applyDecs2 = _applyDecs(_class2, [], [_RuleContainer["default"], _dec, _utils.ConfirmFn]);
  var _applyDecs3 = _slicedToArray(_applyDecs2, 2);
  _Rule = _applyDecs3[0];
  _initClass = _applyDecs3[1];
}(), /*#__PURE__*/function (_identity2) {
  _inherits(_class3, _identity2);
  var _super2 = _createSuper(_class3);
  function _class3() {
    var _this3;
    _classCallCheck(this, _class3);
    (_this3 = _super2.call(this, _Rule), _defineProperty(_assertThisInitialized(_this3), "propTypes", {
      id: _propTypes["default"].string.isRequired,
      groupId: _propTypes["default"].string,
      selectedField: _propTypes["default"].string,
      selectedOperator: _propTypes["default"].string,
      operatorOptions: _propTypes["default"].object,
      config: _propTypes["default"].object.isRequired,
      value: _propTypes["default"].any,
      //depends on widget
      valueSrc: _propTypes["default"].any,
      asyncListValues: _propTypes["default"].array,
      isDraggingMe: _propTypes["default"].bool,
      isDraggingTempo: _propTypes["default"].bool,
      parentField: _propTypes["default"].string,
      //from RuleGroup
      valueError: _propTypes["default"].any,
      isLocked: _propTypes["default"].bool,
      isTrueLocked: _propTypes["default"].bool,
      //path: PropTypes.instanceOf(Immutable.List),
      //actions
      handleDraggerMouseDown: _propTypes["default"].func,
      setField: _propTypes["default"].func,
      setOperator: _propTypes["default"].func,
      setOperatorOption: _propTypes["default"].func,
      setLock: _propTypes["default"].func,
      removeSelf: _propTypes["default"].func,
      setValue: _propTypes["default"].func,
      setValueSrc: _propTypes["default"].func,
      reordableNodesCnt: _propTypes["default"].number
    })), _initClass();
    return _this3;
  }
  return _createClass(_class3);
}(_identity))();
var _default = _Rule;
exports["default"] = _default;