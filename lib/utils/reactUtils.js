"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOnPropsChanged = exports.pureShouldComponentUpdate = exports.liteShouldComponentUpdate = exports.isUsingLegacyReactDomRender = exports.bindActionCreators = void 0;
var _react = _interopRequireDefault(require("react"));
var _mapValues = _interopRequireDefault(require("lodash/mapValues"));
var _stuff = require("./stuff");
var getReactContainerType = function getReactContainerType(el) {
  if (el._reactRootContainer) {
    return "root";
  }
  if (Object.getOwnPropertyNames(el).filter(function (k) {
    return k.startsWith("__reactContainer");
  }).length > 0) {
    return "container";
  }
  return undefined;
};
var getReactRootNodeType = function getReactRootNodeType(node) {
  if (!node) {
    return undefined;
  }
  var type = getReactContainerType(node);
  if (type !== undefined) {
    return type;
  } else {
    return getReactRootNodeType(node.parentNode);
  }
};
var isUsingLegacyReactDomRender = exports.isUsingLegacyReactDomRender = function isUsingLegacyReactDomRender(node) {
  return getReactRootNodeType(node) === "root";
};
var liteShouldComponentUpdate = exports.liteShouldComponentUpdate = function liteShouldComponentUpdate(self, config) {
  return function (nextProps, nextState) {
    var prevProps = self.props;
    var prevState = self.state;
    var should = nextProps != prevProps || nextState != prevState;
    if (should) {
      if (prevState == nextState && prevProps != nextProps) {
        var chs = [];
        for (var k in nextProps) {
          var changed = nextProps[k] != prevProps[k];
          if (changed) {
            if (config[k] == "ignore") changed = false;else if (config[k] == "shallow_deep") changed = !(0, _stuff.shallowEqual)(nextProps[k], prevProps[k], true);else if (config[k] == "shallow") changed = !(0, _stuff.shallowEqual)(nextProps[k], prevProps[k]);else if (typeof config[k] == "function") changed = config[k](nextProps[k], prevProps[k], nextState);
          }
          if (changed) chs.push(k);
        }
        if (!chs.length) should = false;
      }
    }
    return should;
  };
};
var pureShouldComponentUpdate = exports.pureShouldComponentUpdate = function pureShouldComponentUpdate(self) {
  return function (nextProps, nextState) {
    return !(0, _stuff.shallowEqual)(self.props, nextProps) || !(0, _stuff.shallowEqual)(self.state, nextState);
  };
};
var canUseUnsafe = function canUseUnsafe() {
  var v = _react["default"].version.split(".").map(parseInt.bind(null, 10));
  return v[0] == 16 && v[1] >= 3 || v[0] > 16;
};
var useOnPropsChanged = exports.useOnPropsChanged = function useOnPropsChanged(obj) {
  if (canUseUnsafe) {
    obj.UNSAFE_componentWillReceiveProps = function (nextProps) {
      obj.onPropsChanged(nextProps);
    };
  } else {
    obj.componentWillReceiveProps = function (nextProps) {
      obj.onPropsChanged(nextProps);
    };
  }
};
var bindActionCreators = exports.bindActionCreators = function bindActionCreators(actionCreators, config, dispatch) {
  return (0, _mapValues["default"])(actionCreators, function (actionCreator) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return dispatch(actionCreator.apply(void 0, [config].concat(args)));
    };
  });
};