# Changelog
- 5.4.2
  - Fix isNull roundtrip (PR #888) (issue #886)
- 5.4.1
  - Please migrate to new @react-awesome-query-builder/*
    See https://github.com/ukrbublik/react-awesome-query-builder#migration-to-600
- 5.4.0
  - Add `multiselect_contains` operator (PR #813) (issue #702)
- 5.3.2
  - Fix drag-n-drop issue in React 18 using `ReactDOM.createRoot()` (PR #815) (issue #792)
  - Type fix: add `id` for `JsonRule` (PR #799) (issue #791)
  - Type fix: Add typings for `groupOperators` (PR #798)
  - Fix: `not` operation at the root not detected when importing from SpEL (PR #767) (issue #766)
- 5.3.1
  - Support `@fortawesome/react-fontawesome 0.2.x` (issue #757)
  - Fix `loadFromSpel` for `select_not_equals` op (PR #761) (issue #704)
- 5.3.0
  - Added `renderItem` (PR #729)
- 5.2.1
  - Fix type applied to filter funcs as another func's arg value (PR #743) (issue #586)
  - Allow self nesting of functions with `allowSelfNesting` (PR #698)
  - ES: Fix `greater` op (PR #749) (issue #744)
  - ES: Fix NOT (PR #750) (issue #723)
- 5.2.0
  - ! Breaking change: `children1` is now array in result of `getTree()` to preserve items order (PR #672) (issues #589, #670)
    `Utils.getTree(tree, true, false)` will behave same as before this change.
  - Support React 18. Migrate to x-date-pickers. (PR #734) (issues #710, #732)
  - Add path property at `index.d.ts` (PR #671) (issue #669)
  - Fixed `getTotalRulesCountInTree()` == 1 (should be 0) for clear tree (PR #673) (issue #583)
  - Handle validation of bad multiselect value correctly (PR #733) (issue #674)
    Remove bad values from list, don't unset whole value.
    Added config `removeInvalidMultiSelectValuesOnLoad` (true by default, false for AntDesign)
  - Fix `loadFromSpel` for `select_equals` op (PR #740) (issue #704)
  - Fix `loadFromSpel` for `is_empty` and `is_not_empty` ops (PR #713) (issues #714, #699)
- 5.1.2
  - Added config `removeIncompleteRulesOnLoad` (default false) (PR #661) (issue #642)
  - Fix error when using same field for comparison as argument of function (PR #662) (issue #612)
  - Set missing `id` in `fixPathsInTree()` (PR #665) (issue #664)
  - Use func arg type in field selection (PR #666) (issue #615)
- 5.1.1
  - Fix value null instead of undefined in JSON (PR #657) (issue #653)
- 5.1.0
  - Use spel2js 0.2.8 instead of my branch (PR #638) (issues #634, #643, #654)
  - Add async load to antd (PR #640) (issues #616, #425)
  - Fix autocomplete (PRs #655, #641)
  - Fix setting defaultValue on set value src (PR #639) (issue #635)
  - Fix validation of multiselect func arg (PR #656) (issue #587)
- 5.0.0
  - Support of SpEL for import and export. See `loadFromSpel` and `spelFormat` in `Utils` (PR #613)
  - Added `excludeOperators` for type config (PR #613)
    See `excludeOperators: ["proximity"]` in demo
  - Changed export of `not_between` op for text format (`!(num >= 3 && num <= 4)` -> `(num < 3 || num > 4)`) (PR #613)
  - Rename `Like` -> `Contains`. Moved `is_empty`, `is_null` to end of operators list (PR #613)
  - Support MUI v5 (PR #628)
  - Upgraded to React 17. Moved from RHL to react-refresh. Converted demo app to FC. (PR #628)
  - Added `Utils._loadFromJsonLogic()` that returns `[tree, errors]` (issue #621)
- 4.10.0
  - Support Bootstrap (via `reactstrap`) (PR #604)
- 4.9.0
  - Added `is_null` and `is_not_null` operators (issue #494) (PR #522)
  - ! Breaking change for operators `is_empty` and `is_not_empty`. Left for text type only, for other types will be auto converted to `is_null`/`is_not_null`. Changed meaning of `is_empty` - now it's just strict comparing with empty string. Before change meaning was similar to `is_null` (and export to SQL was wrong because of non-existent operator `IS EMPTY`). (issue #494) (PR #573)
  - Fixed order of operators for field when merging operators from 2+ widgets (PR #573)
  - Added last param `fieldDef` for functions to format operators (PR #573)
  - Added `jsonLogic` to widget TS def (PR #572)
  - Export `TreeUtils` (PR #597)
- 4.8.0
  - Added read-only mode switch for rules and groups. See `showLock` and `canDeleteLocked` config options, custom JsonLogic op `locked`, `setLock` action, `lockLabel` and `lockedLabel`. Added Switch components, see `renderSwitch`. (issue #377) (PR #490)
  - Fixed issue with frozen config (`Object.freeze`) by using `clone` (issue #345) (PR #490)
  - Fix: Filter value sources for func args correctly. LHS field can be used as arg in RHS function. (PR #490)
  - MUI - Support showSearch (autocomplete) for field select widget (issue #479 #521) (PR #563)
  - AntDesign - Fix FieldSelect with 3+ level !struct nesting (issue #224) (PR #564)
- 4.7.2
  - Fixed import of rule_group with `not` (issue #548) (PR #559)
- 4.7.1
  - Fixed potential inconsistent order of fields (issue #335) (PR #553)
  - Bump `webpack-dev-server` from 3.11.2 to 4.4.0 (PR #540)
  - Change `FieldItems` type definition from map to array (issues #550, #363) (PR #551)
  - Spreading `customProps` to vanilla widgets (PR #546)
  - Fix for `allowCustomValues` (PR #545)
  - Use minimum `material-ui` version 4.12.3 and use new `createTheme` instead of deprecated `createMuiTheme` (issue #463) (PR #531)
- 4.7.0
  - Add explicit `not: false` in new group (issue #512)
  - Fix: don't automatically add one rule to query when it become empty when `canLeaveEmptyGroup=true` (issue #504)
  - Added config `forceShowConj` (issue #474)
  - Fixed import of complex hierarchy fields (combination of !group and !struct) from JsonLogic (issues #517, #333)
  - Fixed non-ordered map bug (issue #501)
- 4.6.0
  - Added `groupId` (id of the parent Item - Group, RuleGroup, RuleGroupExt etc) to field's, operartor's and widget's props (PR #510)
  - Fixed export to ES when group is empty (broken 'Clear' button in demo app) (PR #511)
  - Added 3rd param `actionMeta` to `onChange()` to get info about action (PR #445) (issue #351)
  - Added demo of using actions programmatically (see `run actions` in demo app) (PR #445)
  - Added config `shouldCreateEmptyGroup` (default `false`) (PR #445)
  - Now config `canLeaveEmptyGroup` is true by default (PR #445) (issue #504)
  - Breaking changes for format with `isForDisplay=true` - don't wrap strings with `"`, replace `==` with `=` (PR #518)
  - Fixed type definition for export utils - can return undefined (PR #516)
  - Fixed use of `hideOperator` (PR #523) (issue #292)
  - Documented `cancelText` (PR #524) (issue #520)
- 4.5.2
  - Added rule `id` to field's, operartor's and widget's props. Added config of the selected field to the operator props as `fieldConfig` (issue #502) (PR #503)
- 4.5.1
  - Fixed export of field name to ES (broken demo app)
- 4.5.0
  - Added basic support of export to ElasticSearch (PR #469)
  - Export all helper funcs from configUtils (PR #493)
  - Fixed bug with zero value in MaterialSelect (PR #392)
- 4.4.3
  - babel: use "@babel/plugin-transform-runtime" to avoid globally defined regenerator runtime (PR #480)
  - Fix export of not in some!group into JsonLogic (issue #476) (PR #484)
  - Fixed issue with default import/export in Vite build (PR #481)
- 4.4.2
  - Added support of autocomplete for multiselect widget in MUI (PR #475)
- 4.4.1
  - feat: possibility to add custom operators for groups (PR #462)
- 4.4.0
  - Added support of server-side load of values for `select` (MaterialUI only) (PR #471)
- 4.3.0
  - Improved function support
  - Functions used in examples now moved to `BasicFuncs` (exported with lib)
  - Added funcs `RELATIVE_DATETIME`, `NOW`, `UPPER`
  - Added option `showPrefix` for func args (false by default)
  - Added missing `mongoFormatValue` for all types in basic config (now dates are exported as `Date` objects)
- 4.2.0
  - Added `textarea` widget
- 4.1.1
  - Fix warning about showSearch in MUI theme
  - Fix incorrect override of vanilla button label (issue #347)
  - Fix display default conj (issue #426)
  - Don't wrap in MUI ThemeProvider if no theme or locale provided (issue #325)
  - Fix canLeaveEmptyGroup logic (issue #378)
- 4.1.0
  - Fixed lint errors in code
  - Reorganized files in `tests`
  - Updated packages
  - Now minimum supported NodeJs is 12.13
  - Added TSC linting
  - Now ESLint checks types in TS files
  - Added new scripts: `install-all`, `clean`, `reinstall`, `build-all`, `check-hot`, `tsc`, `eslint`, `smoke`, `resmoke`.
    Renamed `sandbox_ts` to `sandbox-ts`, `sandbox_js` to `sandbox-js`.
  - Fixed problems with VSCode's TSLint plugin
  - Moved from deprecated `prepublish` to `prepare` in `package.json`
- 4.0.4
  - Fixed issue #349 with drag-n-drop and office-ui-fabric-react
  - Fixed issue #413 with func arg with 1 value source which is not value
- 4.0.3
  - Fixed issue #386 with import select field from JsonLogic (reason: bug with func/field widget in getWidgetForFieldOp)
  - Fixed issue #387 with subgroups in Material UI
- 4.0.2
  - Fixed MaterialConfig import for TS projects (issue #368)
- 4.0.1
  - Added custom context to isolate Query Builder store (PR #350)
  - Added support for React 17 as a peer dependency
- 4.0.0
  - Removed setting `useGroupsAsArrays`.
    Instead added field config `mode` for type `!group` with values:
    `some` (default, corresponding useGroupsAsArrays = true),
    `array` (new, user can choose one of group operators),
    `struct` (obsolete, corresponding useGroupsAsArrays = false).
  - For type=`!group` and mode=`array`:
    - new field configs are available: `conjunctions`, `showNot`, `operators`, `defaultOperator`, `initialEmptyWhere`
    - you can use group operators `some`, `none`, `all` or operators with 1 integer opearnd (for count): `equal`, `not_equal`, `less`, `between`, ..
    - localization setting `addSubRuleLabel`
  - Removed obsolete setting `hideConjForOne`
  - (rare) Added field config `fieldName` to override field key for import/export
  - (rare) Added field config `jsonLogicVar` and settings `jsonLogic.groupVarKey`, `jsonLogic.altVarKey` to override JsonLogic var key if need
- 3.0.0
  - Added [Material-UI](https://material-ui.com) widgets
- 2.2.2
  - Fix issue #306: Wrong import from JsonLogic and export to MongoDb for negated single-item group
- 2.2.1
  - Fix issue #300: If using query builder inside a form element, buttons try to submit the form
- 2.2.0
  - Fixed issues #246 and #176 related to wrong export and import from JsonLogic for multi-nested group fields  
    Now `!group` fields are treated as arrays (added setting `useGroupsAsArrays` = true)
- 2.1.19
  - Fixed issue #252 ("Cannot update a component from inside the function body of a different component")
  - Issue #190: Fixed TS def for getTree/2 - added 2nd param light?
- 2.1.17
  - Dropped support of loading query in obsolete Immutable string format used in versions 0.\* (issue #254)
- 2.1.16
  - Fixed issues with export to Mongo and JsonLogic of queries with nested groups (#279, #279)
- 2.1.15
  - Fixed issue #276 with TS definitions
- 2.1.14
  - Require Node v10+ (for karma)
  - Fixed "SyntaxError Unexpected token '<'" in sandboxes
  - Fixed requirement of sass in sandboxes
  - Fixed eslint warnings in sandboxes
  - Improved Travis config: fixed ENOSPC, removed excess testing during install
- 2.1.12
  - Added sandbox with vanilla widgets and without TS
- 2.1.11
  - Minor fix for some/not JsonLogic operators can be potentially used for array types
- 2.1.10
  - Fixed issues #249, #246 regarding export/import from jsonLogic and groups
  - Fixed issue #272 with float numbers for vanilla widgets
- 2.1.8
  - Fixed issue #263
- 2.1.7
  - Fixed TS def for conjunctionOptions (#247)
- 2.1.6
  - Temporary disable AntDesign 4.5.0+ because of "Invalid hook call" problem
- 2.1.4
  - Fixed issue #249 with importing rules with group fields from JsonLogic format
- 2.1.3
  - Fixed issue #255 with reordering
- 2.1.2
  - Added config `maxNumberOfRules`
  - Bugfix: respect `maxNesting` and `canLeaveEmptyGroup` settings during drag-n-drop
  - Enabled ESLint for examples with TS
- 2.1.1
  - Fixed export of `not_like` op to JsonLogic
- 2.1.0
  - Added displaying of rule validation errors, see `showErrorMessage` in config.settings
  - Added `QbUtils.isValidTree()`
  - `validateValue` moved from widget settings to field's `fieldSettings`
  - Added ESLint (unused vars & props are off for now)
- 2.0.11
  - Added `starts_with`, `ends_with` operators for text type
- 2.0.10
  - Fixed bug with missing `funcs` in config
- 2.0.9
  - Fixed issues #215, #214, #208
  - Fixed `validateValue`
  - Simpler sandbox demo
- 2.0.8
  - Fixed issue #207
- 2.0.7
  - Added `canShortMongoQuery` to `config.settings`
- 2.0.6
  - Fixed issue #176
- 2.0.5
  - Fixed TS types. Updated sandbox to TS
- 2.0.4
  - Fixed import
- 2.0.2
  - Fix for TS
- 2.0.1
  - Fixed issues #187, #194, #182
- 2.0.0
  - Added `renderConjs`, `renderButton`, `renderButtonGroup`, `renderProvider`, `renderValueSources`, `renderConfirm`
  - Removed coupling with AntDesign. Now it should be possible to use another UI framework.
  - Added vanilla widgets. Added switcher between `antd` and `vanilla` in demo.
- 1.3.7
  - Fixed issue #168 with dot in field name
- 1.3.6
  - Added config options to disable inputs: `immutableFieldsMode`, `immutableOpsMode`, `immutableValuesMode`
- 1.3.5
  - Issue #158
- 1.3.3
  - Bugfix
- 1.3.2
  - Bugfix
- 1.3.1
  - Added `FieldTreeSelect`
- 1.3.0
  - Added support of `!group`
- 1.2.0
  - Added `treeselect` and `treemultiselect` types
  - Changed format of `listValues` from `{<value>: <title>}` to `[{value, title}]` (old is supported).
    Tree select also use `listValues`, format is compatible with simple select - `[{value, title, parent}]`
- 1.1.3
  - Fixed console warnings
  - Fixed dev hot reload: now state is preserving
  - Added render hoooks to `config.settings`: `renderBeforeWidget`, `renderAfterWidget`, `renderBeforeActions`, `renderAfterActions`
- 1.1.2
  - Added import from [JsonLogic](http://jsonlogic.com)
- 1.1.1
  - Optimized `$eq` and `$and` in MongoDb query export
  - Fixed error if query value is empty
  - Added API in readme
- 1.1.0
  - Added export to [JsonLogic](http://jsonlogic.com)
- 1.0.12
  - Added `sqlFormatFunc`, `mongoFormatFunc`, `renderBrackets`, `renderSeps` (for func), `funcs` (for field)
- 1.0.11
  - Added css-class `qb-lite` for query builder (see readme if you wanna use it)
- 1.0.10
  - Fix when using cascader for func selection
- 1.0.9
  - Allow group of functions (like with fields - `type == '!struct'` and `subfields`)
- 1.0.8
  - Added support for your custom functions as value source (args can be values/fields/funcs), see new section `funcs` in `config`
  - Improved Mongo format: now can compare with field & use funcs with help of `$expr`
  - (breaking) `mongoFormatOp` - inserted arg `useExpr` at 4th position
  - Added `hideForSelect`, `hideForCompare` for field config
- 1.0.7
  - Fixed Babel
- 1.0.6
  - Added TypeScript support (`examples` uses TS, `sandbox` uses JS)
  - Updated Babel, Webpack
  - For `field` widget slightly changed format of `formatValue()` and `sqlFormatValue()` functions - argument `rightFieldDef` is now last one
  - Added `defaultValue` in field config
  - All `fieldSettings` will be now passed to widget props
  - `listValues` and `allowCustomValues` moved inside `fieldSettings`
- 1.0.4
  - Added `QbUtils.sqlFormat()` (issue #29)
  - Added `like` and `not_like` operators
  - Added 2 params `string op, Object opDef` to end of `formatValue()`, `mongoFormatValue()`
- 1.0.3
  - Completely removed auto-loading of antd styles (issue #50)
- 1.0.2
  - Fixed bug with running examples app via react-scripts
- 1.0.1
  - Fixed bug with importing React
- 1.0.0
  - Don't include AntDesign styles automatically (issues #50, #93)
  - added: `allowCustomValues` (issue #88)
  - change: removed `renderFieldAndOpAsDropdown`, replaced by `renderField` (issue #109)
  - added `renderOperator` (issue #89)
  - change: query value now can be exported to JSON (instead of `Immutable.Map`), and loaded with `loadTree` (old format is supported) (issue #61)
  - added: `canRegroup`
  - rename: `readonlyMode` -> `immutableGroupsMode`
  - rename: `get_children` -> `renderBuilder`
  - removed: unused `<Preview />` component and `.query-preview` class
  - optimized renders & dragging