var exfiltrated;

var privateMethod = function privateMethod() {};

var Foo = function Foo() {
  "use strict";

  babelHelpers.classCallCheck(this, Foo);

  _privateMethod.add(this);

  if (exfiltrated === undefined) {
    exfiltrated = babelHelpers.classPrivateMethodGet(this, _privateMethod);
  }
};

var _privateMethod = new WeakSet();
