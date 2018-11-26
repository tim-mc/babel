var Foo =
/*#__PURE__*/
function () {
  "use strict";

  function Foo() {
    babelHelpers.classCallCheck(this, Foo);
    Object.defineProperty(this, _privateField, {
      writable: true,
      value: "top secret string"
    });
    Object.defineProperty(this, _get_privateGetter, {
      value: _get_privateGetter2
    });
    Object.defineProperty(this, _set_privateSetter, {
      value: _set_privateSetter2
    });
  }

  babelHelpers.createClass(Foo, [{
    key: "getPrivateField",
    value: function getPrivateField() {
      return babelHelpers.classPrivateFieldLooseBase(this, _get_privateGetter)[_get_privateGetter].call(this);
    }
  }, {
    key: "setPrivateField",
    value: function setPrivateField(newSecretString) {
      babelHelpers.classPrivateFieldLooseBase(this, _set_privateSetter)[_set_privateSetter].call(this, newSecretString);
    }
  }]);
  return Foo;
}();

var _privateField = babelHelpers.classPrivateFieldLooseKey("privateField");

var _get_privateGetter = babelHelpers.classPrivateFieldLooseKey("privateGetter");

var _set_privateSetter = babelHelpers.classPrivateFieldLooseKey("privateSetter");

var _get_privateGetter2 = function _get_privateGetter2() {
  return babelHelpers.classPrivateFieldLooseBase(this, _privateField)[_privateField];
};

var _set_privateSetter2 = function _set_privateSetter2(newSecretString) {
  babelHelpers.classPrivateFieldLooseBase(this, _privateField)[_privateField] = newSecretString;
};
