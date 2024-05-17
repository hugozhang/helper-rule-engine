"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _omit = _interopRequireDefault(require("lodash/omit"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Autocomplete = _interopRequireWildcard(require("@mui/material/Autocomplete"));
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
var _Chip = _interopRequireDefault(require("@mui/material/Chip"));
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _CheckBoxOutlineBlank = _interopRequireDefault(require("@mui/icons-material/CheckBoxOutlineBlank"));
var _CheckBox = _interopRequireDefault(require("@mui/icons-material/CheckBox"));
var _useListValuesAutocomplete = _interopRequireDefault(require("../../../../hooks/useListValuesAutocomplete"));
var _excluded = ["width", "showCheckboxes"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var nonCheckedIcon = /*#__PURE__*/_react["default"].createElement(_CheckBoxOutlineBlank["default"], {
  fontSize: "small"
});
var checkedIcon = /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
  fontSize: "small"
});
var defaultFilterOptions = (0, _Autocomplete.createFilterOptions)();
var emptyArray = [];
var _default = exports["default"] = function _default(props) {
  var allowCustomValues = props.allowCustomValues,
    multiple = props.multiple,
    selectedValue = props.value,
    customProps = props.customProps,
    readonly = props.readonly,
    config = props.config,
    groupBy = props.groupBy,
    filterOptionsConfig = props.filterOptionsConfig;
  var filterOptionsFn = filterOptionsConfig ? (0, _Autocomplete.createFilterOptions)(filterOptionsConfig) : defaultFilterOptions;

  // hook
  var _useListValuesAutocom = (0, _useListValuesAutocomplete["default"])(props, {
      debounceTimeout: 100,
      multiple: multiple
    }),
    open = _useListValuesAutocom.open,
    onOpen = _useListValuesAutocom.onOpen,
    onClose = _useListValuesAutocom.onClose,
    onChange = _useListValuesAutocom.onChange,
    onInputChange = _useListValuesAutocom.onInputChange,
    inputValue = _useListValuesAutocom.inputValue,
    options = _useListValuesAutocom.options,
    isInitialLoading = _useListValuesAutocom.isInitialLoading,
    isLoading = _useListValuesAutocom.isLoading,
    aPlaceholder = _useListValuesAutocom.aPlaceholder,
    extendOptions = _useListValuesAutocom.extendOptions,
    getOptionSelected = _useListValuesAutocom.getOptionSelected,
    getOptionDisabled = _useListValuesAutocom.getOptionDisabled,
    getOptionLabel = _useListValuesAutocom.getOptionLabel;

  // setings
  var _config$settings = config.settings,
    defaultSelectWidth = _config$settings.defaultSelectWidth,
    defaultSearchWidth = _config$settings.defaultSearchWidth;
  var _ref = customProps || {},
    width = _ref.width,
    showCheckboxes = _ref.showCheckboxes,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var customInputProps = rest.input || {};
  var inputWidth = customInputProps.width || defaultSearchWidth; // todo: use as min-width for Autocomplete comp
  customInputProps = (0, _omit["default"])(customInputProps, ["width"]);
  var customAutocompleteProps = (0, _omit["default"])(rest, ["showSearch", "showCheckboxes"]);
  var fullWidth = true;
  var minWidth = width || defaultSelectWidth;
  var style = {
    width: multiple ? undefined : minWidth,
    minWidth: minWidth
  };
  var placeholder = !readonly ? aPlaceholder : "";
  var hasValue = selectedValue != null;
  // should be simple value to prevent re-render!s
  var value = hasValue ? selectedValue : multiple ? emptyArray : null;
  var filterOptions = function filterOptions(options, params) {
    var filtered = filterOptionsFn(options, params);
    var extended = extendOptions(filtered);
    return extended;
  };

  // render
  var renderInput = function renderInput(params) {
    return /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({
      variant: "standard"
    }, params, {
      InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
        readOnly: readonly,
        endAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isLoading ? /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
          color: "inherit",
          size: 20
        }) : null, params.InputProps.endAdornment)
      }),
      disabled: readonly,
      placeholder: placeholder
      //onChange={onInputChange}
    }, customInputProps));
  };
  var renderTags = function renderTags(value, getTagProps) {
    return value.map(function (option, index) {
      return /*#__PURE__*/_react["default"].createElement(_Chip["default"], (0, _extends2["default"])({
        key: index,
        label: getOptionLabel(option)
      }, getTagProps({
        index: index
      })));
    });
  };
  var isOptionEqualToValue = function isOptionEqualToValue(option, value) {
    return (option === null || option === void 0 ? void 0 : option.value) == value;
  };
  var renderOption = function renderOption(props, option) {
    var title = option.title,
      renderTitle = option.renderTitle,
      value = option.value;
    var selected = (selectedValue || []).includes(value);
    if (option.specialValue) {
      return /*#__PURE__*/_react["default"].createElement("div", props, renderTitle || title);
    } else if (multiple && showCheckboxes != false) {
      return /*#__PURE__*/_react["default"].createElement("div", props, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        icon: nonCheckedIcon,
        checkedIcon: checkedIcon,
        style: {
          marginRight: 8
        },
        checked: selected
      }), title);
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", props, renderTitle || title);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: fullWidth
  }, /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], (0, _extends2["default"])({
    disableCloseOnSelect: multiple,
    fullWidth: fullWidth,
    multiple: multiple,
    style: style,
    freeSolo: allowCustomValues,
    loading: isInitialLoading,
    open: open,
    onOpen: onOpen,
    onClose: onClose,
    inputValue: inputValue,
    onInputChange: onInputChange,
    label: placeholder,
    onChange: onChange,
    value: value,
    disabled: readonly,
    readOnly: readonly,
    options: options,
    groupBy: groupBy,
    getOptionLabel: getOptionLabel,
    getOptionDisabled: getOptionDisabled,
    renderInput: renderInput
    //renderTags={renderTags}
    ,
    renderOption: renderOption,
    filterOptions: filterOptions,
    isOptionEqualToValue: isOptionEqualToValue,
    size: "small"
  }, customAutocompleteProps)));
};