var exfiltrated;

var Foo = function Foo() {
  "use strict";

  babelHelpers.classCallCheck(this, Foo);

  var privateMethod = function privateMethod() {};

  _privateMethod.set(this, privateMethod);

  if (exfiltrated === undefined) {
    exfiltrated = babelHelpers.classPrivateMethodGet(this, _privateMethod);
  }
};

var _privateMethod = new WeakMap();
