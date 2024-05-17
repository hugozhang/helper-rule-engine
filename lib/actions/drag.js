"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDragStart = exports.setDragProgress = exports.setDragEnd = void 0;
var constants = _interopRequireWildcard(require("../constants"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * @param {Object} mousePos
 * @param {Object} dragging
 */
var setDragProgress = exports.setDragProgress = function setDragProgress(mousePos, dragging) {
  return {
    type: constants.SET_DRAG_PROGRESS,
    mousePos: mousePos,
    dragging: dragging
  };
};

/**
 * @param {Object} dragStart
 * @param {Object} dragging
 * @param {Object} mousePos
 */
var setDragStart = exports.setDragStart = function setDragStart(dragStart, dragging, mousePos) {
  return {
    type: constants.SET_DRAG_START,
    dragStart: dragStart,
    dragging: dragging,
    mousePos: mousePos
  };
};

/**
 *
 */
var setDragEnd = exports.setDragEnd = function setDragEnd() {
  return {
    type: constants.SET_DRAG_END
  };
};