var Foo =
/*#__PURE__*/
function () {
  "use strict";

  function Foo() {
    babelHelpers.classCallCheck(this, Foo);

    _privateField.set(this, {
      writable: true,
      value: "top secret string"
    });

    _get_privateGetter.add(this);

    _set_privateSetter.add(this);
  }

  babelHelpers.createClass(Foo, [{
    key: "getPrivateField",
    value: function getPrivateField() {
      return babelHelpers.classPrivateMethodGet(this, _get_privateGetter, _get_privateGetter2).call(this);
    }
  }, {
    key: "setPrivateField",
    value: function setPrivateField(newSecretString) {
      babelHelpers.classPrivateMethodGet(this, _set_privateSetter, _set_privateSetter2).call(this, newSecretString);
    }
  }]);
  return Foo;
}();

var _privateField = new WeakMap();

var _get_privateGetter = new WeakSet();

var _set_privateSetter = new WeakSet();

var _get_privateGetter2 = function _get_privateGetter2() {
  return babelHelpers.classPrivateFieldGet(this, _privateField);
};

var _set_privateSetter2 = function _set_privateSetter2(newSecretString) {
  babelHelpers.classPrivateFieldSet(this, _privateField, newSecretString);
};
