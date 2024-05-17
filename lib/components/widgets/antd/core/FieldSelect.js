"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _domUtils = require("../../../../utils/domUtils");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Option = _antd.Select.Option,
  OptGroup = _antd.Select.OptGroup;
var FieldSelect = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function FieldSelect() {
    var _this;
    (0, _classCallCheck2["default"])(this, FieldSelect);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, FieldSelect, [].concat(args));
    _this.onChange = function (key) {
      _this.props.setField(key);
    };
    _this.filterOption = function (input, option) {
      var dataForFilter = option;
      var keysForFilter = ["title", "value", "grouplabel", "label"];
      var valueForFilter = keysForFilter.map(function (k) {
        return typeof dataForFilter[k] == "string" ? dataForFilter[k] : "";
      }).join("\0");
      return valueForFilter.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    return _this;
  }
  (0, _inherits2["default"])(FieldSelect, _PureComponent);
  return (0, _createClass2["default"])(FieldSelect, [{
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
      var res = /*#__PURE__*/_react["default"].createElement(_antd.Select, (0, _extends2["default"])({
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
          return [].concat(gr, (0, _toConsumableArray2["default"])(list));
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
}(_react.PureComponent);
FieldSelect.propTypes = {
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
};