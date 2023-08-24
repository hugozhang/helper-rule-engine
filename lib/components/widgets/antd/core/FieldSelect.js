"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _domUtils = require("../../../../utils/domUtils");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var Option = _antd.Select.Option,
  OptGroup = _antd.Select.OptGroup;
var FieldSelect = /*#__PURE__*/function (_PureComponent) {
  _inherits(FieldSelect, _PureComponent);
  var _super = _createSuper(FieldSelect);
  function FieldSelect() {
    var _this;
    _classCallCheck(this, FieldSelect);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onChange", function (key) {
      _this.props.setField(key);
    });
    _defineProperty(_assertThisInitialized(_this), "filterOption", function (input, option) {
      var dataForFilter = option;
      var keysForFilter = ["title", "value", "grouplabel", "label"];
      var valueForFilter = keysForFilter.map(function (k) {
        return typeof dataForFilter[k] == "string" ? dataForFilter[k] : "";
      }).join("\0");
      return valueForFilter.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    });
    return _this;
  }
  _createClass(FieldSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        customProps = _this$props.customProps,
        items = _this$props.items,
        placeholder = _this$props.placeholder,
        selectedKey = _this$props.selectedKey,
        selectedLabel = _this$props.selectedLabel,
        selectedOpts = _this$props.selectedOpts,
        selectedAltLabel = _this$props.selectedAltLabel,
        selectedFullLabel = _this$props.selectedFullLabel,
        readonly = _this$props.readonly;
      var _ref = customProps || {},
        showSearch = _ref.showSearch;
      var selectText = selectedLabel || placeholder;
      var selectWidth = (0, _domUtils.calcTextWidth)(selectText);
      var isFieldSelected = !!selectedKey;
      var dropdownPlacement = config.settings.dropdownPlacement;
      var dropdownAlign = dropdownPlacement ? _domUtils.BUILT_IN_PLACEMENTS[dropdownPlacement] : undefined;
      var width = isFieldSelected && !showSearch ? null : selectWidth + _domUtils.SELECT_WIDTH_OFFSET_RIGHT;
      var tooltipText = selectedAltLabel || selectedFullLabel;
      if (tooltipText == selectedLabel) tooltipText = null;
      var fieldSelectItems = this.renderSelectItems(items);
      var res = /*#__PURE__*/_react["default"].createElement(_antd.Select, _extends({
        dropdownAlign: dropdownAlign,
        dropdownMatchSelectWidth: false,
        style: {
          width: width
        },
        placeholder: placeholder,
        size: config.settings.renderSize,
        onChange: this.onChange,
        value: selectedKey || undefined,
        filterOption: this.filterOption,
        disabled: readonly
      }, customProps), fieldSelectItems);
      if (tooltipText && !selectedOpts.tooltip) {
        res = /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
          title: tooltipText
        }, res);
      }
      return res;
    }
  }, {
    key: "renderSelectItems",
    value: function renderSelectItems(fields) {
      var _this2 = this;
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return fields.map(function (field) {
        var items = field.items,
          key = field.key,
          path = field.path,
          label = field.label,
          fullLabel = field.fullLabel,
          altLabel = field.altLabel,
          tooltip = field.tooltip,
          grouplabel = field.grouplabel,
          disabled = field.disabled;
        var groupPrefix = level > 0 ? "\xA0\xA0".repeat(level) : "";
        var prefix = level > 1 ? "\xA0\xA0".repeat(level - 1) : "";
        var pathKey = path || key;
        if (items) {
          var simpleItems = items.filter(function (it) {
            return !it.items;
          });
          var complexItems = items.filter(function (it) {
            return !!it.items;
          });
          var gr = simpleItems.length ? [/*#__PURE__*/_react["default"].createElement(OptGroup, {
            key: pathKey,
            label: groupPrefix + label
          }, _this2.renderSelectItems(simpleItems, level + 1))] : [];
          var list = complexItems.length ? _this2.renderSelectItems(complexItems, level + 1) : [];
          return [].concat(gr, _toConsumableArray(list));
        } else {
          var option = tooltip ? /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
            title: tooltip
          }, prefix + label) : prefix + label;
          return /*#__PURE__*/_react["default"].createElement(Option, {
            key: pathKey,
            value: pathKey,
            title: altLabel,
            grouplabel: grouplabel,
            label: label,
            disabled: disabled
          }, option);
        }
      }).flat(Infinity);
    }
  }]);
  return FieldSelect;
}(_react.PureComponent);
exports["default"] = FieldSelect;
_defineProperty(FieldSelect, "propTypes", {
  config: _propTypes["default"].object.isRequired,
  customProps: _propTypes["default"].object,
  items: _propTypes["default"].array.isRequired,
  placeholder: _propTypes["default"].string,
  selectedKey: _propTypes["default"].string,
  selectedKeys: _propTypes["default"].array,
  selectedPath: _propTypes["default"].array,
  selectedLabel: _propTypes["default"].string,
  selectedAltLabel: _propTypes["default"].string,
  selectedFullLabel: _propTypes["default"].string,
  selectedOpts: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  //actions
  setField: _propTypes["default"].func.isRequired
});