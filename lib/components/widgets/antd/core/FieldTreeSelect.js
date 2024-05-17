"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _domUtils = require("../../../../utils/domUtils");
var _reactUtils = require("../../../../utils/reactUtils");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FieldTreeSelect = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function FieldTreeSelect(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FieldTreeSelect);
    _this = _callSuper(this, FieldTreeSelect, [props]);
    _this.onChange = function (key) {
      _this.props.setField(key);
    };
    _this.filterTreeNode = function (input, option) {
      var dataForFilter = option;
      var keysForFilter = ["title", "value", "label", "altLabel", "fullLabel"];
      var valueForFilter = keysForFilter.map(function (k) {
        return typeof dataForFilter[k] == "string" ? dataForFilter[k] : "";
      }).join("\0");
      return valueForFilter.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this.onPropsChanged(props);
    return _this;
  }
  (0, _inherits2["default"])(FieldTreeSelect, _PureComponent);
  return (0, _createClass2["default"])(FieldTreeSelect, [{
    key: "onPropsChanged",
    value: function onPropsChanged(props) {
      var items = props.items,
        fieldSeparator = props.config.settings.fieldSeparator;
      var optionsMaxWidth = 0;
      var initialOffset = 24; // arrow + checkbox for leftmost item
      var offset = 20;
      var padding = 5 * 2;
      this.treeData = this.getTreeData(items, function (_ref) {
        var label = _ref.label,
          path = _ref.path;
        optionsMaxWidth = Math.max(optionsMaxWidth, (0, _domUtils.calcTextWidth)(label, null) + padding + (path.split(fieldSeparator).length - 1) * offset + initialOffset);
      });
      this.optionsMaxWidth = optionsMaxWidth;
    }
  }, {
    key: "getTreeData",
    value: function getTreeData(fields) {
      var _this2 = this;
      var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return fields.map(function (field) {
        var items = field.items,
          key = field.key,
          path = field.path,
          label = field.label,
          fullLabel = field.fullLabel,
          altLabel = field.altLabel,
          tooltip = field.tooltip,
          disabled = field.disabled;
        if (fn) fn(field);
        var pathKey = path || key;
        var option = tooltip ? /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
          title: tooltip
        }, label) : label;
        if (items) {
          return {
            value: pathKey,
            title: option,
            children: _this2.getTreeData(items, fn),
            selectable: false,
            altLabel: altLabel,
            fullLabel: fullLabel,
            label: label,
            disabled: disabled
          };
        } else {
          return {
            value: pathKey,
            title: option,
            altLabel: altLabel,
            fullLabel: fullLabel,
            label: label,
            disabled: disabled
          };
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        _this$props$customPro = _this$props.customProps,
        customProps = _this$props$customPro === void 0 ? {} : _this$props$customPro,
        placeholder = _this$props.placeholder,
        selectedKey = _this$props.selectedKey,
        selectedLabel = _this$props.selectedLabel,
        selectedOpts = _this$props.selectedOpts,
        selectedAltLabel = _this$props.selectedAltLabel,
        selectedFullLabel = _this$props.selectedFullLabel,
        readonly = _this$props.readonly;
      var _config$settings = config.settings,
        renderSize = _config$settings.renderSize,
        fieldSeparator = _config$settings.fieldSeparator;
      var tooltipText = selectedAltLabel || selectedFullLabel;
      if (tooltipText == selectedLabel) tooltipText = null;
      var selectedPath = selectedKey ? selectedKey.split(fieldSeparator) : null;
      var treeDefaultExpandedKeys = selectedPath && selectedPath.length > 1 ? selectedPath.slice(0, -1).map(function (_key, i) {
        return selectedPath.slice(0, i + 1).join(fieldSeparator);
      }) : null;
      var placeholderWidth = (0, _domUtils.calcTextWidth)(placeholder) + 6;
      var isFieldSelected = !!selectedKey;
      var minWidth = placeholderWidth + _domUtils.SELECT_WIDTH_OFFSET_RIGHT;
      var dropdownMinWidth = 100;
      var dropdownMaxWidth = 800;
      var useAutoWidth = true; //tip: "auto" is good, but width will jump on expand/collapse
      var dropdownWidth = Math.max(dropdownMinWidth, Math.min(dropdownMaxWidth, this.optionsMaxWidth));
      var res = /*#__PURE__*/_react["default"].createElement(_antd.TreeSelect, (0, _extends2["default"])({
        onChange: this.onChange,
        value: selectedKey || undefined,
        style: {
          minWidth: minWidth,
          width: isFieldSelected ? null : minWidth
        },
        dropdownStyle: {
          width: useAutoWidth ? "auto" : dropdownWidth + 20,
          paddingRight: "10px"
        },
        multiple: false,
        treeCheckable: false,
        treeDataSimpleMode: false,
        treeData: this.treeData,
        size: renderSize,
        placeholder: placeholder,
        filterTreeNode: this.filterTreeNode,
        treeDefaultExpandedKeys: treeDefaultExpandedKeys,
        dropdownMatchSelectWidth: false,
        disabled: readonly
      }, customProps));
      if (tooltipText && !selectedOpts.tooltip) {
        res = /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
          title: tooltipText
        }, res);
      }
      return res;
    }
  }]);
}(_react.PureComponent);
FieldTreeSelect.propTypes = {
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