var exfiltrated;

var _privateMethod2 = function _privateMethod2() {};

var Foo = function Foo() {
  "use strict";

  babelHelpers.classCallCheck(this, Foo);

  _privateMethod.add(this);

  if (exfiltrated === undefined) {
    exfiltrated = babelHelpers.classPrivateMethodGet(this, _privateMethod, _privateMethod2);
  }
};

var _privateMethod = new WeakSet();
