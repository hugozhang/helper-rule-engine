"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _domUtils = require("../../../../utils/domUtils");
var _stuff = require("../../../../utils/stuff");
var _reactUtils = require("../../../../utils/reactUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var TreeSelectWidget = exports["default"] = /*#__PURE__*/function (_PureComponent) {
  function TreeSelectWidget(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TreeSelectWidget);
    _this = _callSuper(this, TreeSelectWidget, [props]);
    _this.handleChange = function (val) {
      if (!_this.props.treeMultiple) {
        _this.props.setValue(val);
        return;
      }
      if (val && !val.length) {
        _this.props.setValue(undefined); //not allow []
        return;
      }
      if ((0, _typeof2["default"])(val[0]) == "object" && val[0].value !== undefined) {
        //`treeCheckStrictly` is on
        val = val.map(function (v) {
          return v.value;
        });
      }
      _this.props.setValue(val);
    };
    _this.filterTreeNode = function (input, option) {
      var dataForFilter = option.title;
      return dataForFilter.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    (0, _reactUtils.useOnPropsChanged)(_this);
    _this.onPropsChanged(props);
    return _this;
  }
  (0, _inherits2["default"])(TreeSelectWidget, _PureComponent);
  return (0, _createClass2["default"])(TreeSelectWidget, [{
    key: "onPropsChanged",
    value: function onPropsChanged(props) {
      var listValues = props.listValues,
        treeMultiple = props.treeMultiple;
      var optionsMaxWidth = 0;
      var initialOffset = treeMultiple ? 24 + 22 : 24; // arrow + checkbox for leftmost item
      var offset = 20;
      var padding = 5 * 2;
      (0, _stuff.mapListValues)(listValues, function (_ref) {
        var title = _ref.title,
          value = _ref.value,
          path = _ref.path;
        optionsMaxWidth = Math.max(optionsMaxWidth, (0, _domUtils.calcTextWidth)(title, null) + padding + (path ? path.length : 0) * offset + initialOffset);
      });
      this.optionsMaxWidth = optionsMaxWidth;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        config = _this$props.config,
        placeholder = _this$props.placeholder,
        _this$props$customPro = _this$props.customProps,
        customProps = _this$props$customPro === void 0 ? {} : _this$props$customPro,
        value = _this$props.value,
        treeMultiple = _this$props.treeMultiple,
        listValues = _this$props.listValues,
        treeExpandAll = _this$props.treeExpandAll,
        readonly = _this$props.readonly;
      var treeCheckStrictly = customProps.treeCheckStrictly || false;
      var renderSize = config.settings.renderSize;
      var placeholderWidth = (0, _domUtils.calcTextWidth)(placeholder) + 6;
      var aValue = value != undefined ? value : undefined;
      if (treeCheckStrictly && aValue !== undefined) {
        if (treeMultiple) {
          aValue = aValue.map(function (v) {
            return {
              value: v,
              label: (0, _stuff.getTitleInListValues)(listValues, v)
            };
          });
        }
      }
      var width = aValue ? null : placeholderWidth + _domUtils.SELECT_WIDTH_OFFSET_RIGHT;
      var dropdownMinWidth = 100;
      var dropdownMaxWidth = 800;
      var useAutoWidth = true; //tip: "auto" is good, but width will jump on expand/collapse
      var dropdownWidth = Math.max(dropdownMinWidth, Math.min(dropdownMaxWidth, this.optionsMaxWidth));
      return /*#__PURE__*/_react["default"].createElement(_antd.TreeSelect, (0, _extends2["default"])({
        disabled: readonly,
        style: {
          minWidth: width,
          width: width
        },
        dropdownStyle: {
          width: useAutoWidth ? "auto" : dropdownWidth + 10,
          paddingRight: "10px"
        },
        multiple: treeMultiple,
        treeCheckable: treeMultiple,
        key: "widget-treeselect",
        dropdownMatchSelectWidth: false,
        placeholder: placeholder,
        size: renderSize,
        treeData: listValues,
        treeDataSimpleMode: _stuff.defaultTreeDataMap,
        filterTreeNode: this.filterTreeNode,
        value: aValue,
        onChange: this.handleChange,
        treeDefaultExpandAll: treeExpandAll
      }, customProps));
    }
  }]);
}(_react.PureComponent);
TreeSelectWidget.propTypes = {
  setValue: _propTypes["default"].func.isRequired,
  config: _propTypes["default"].object.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  field: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  customProps: _propTypes["default"].object,
  fieldDefinition: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  treeMultiple: _propTypes["default"].bool,
  // from fieldSettings:
  listValues: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array])
};