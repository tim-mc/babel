class Foo {
  constructor() {
    Object.defineProperty(this, _foo, {
      writable: true,
      value: function () {
        return this;
      }
    });
  }

  test(other) {
    babelHelpers.classPrivateFieldLooseBase(this, _foo)[_foo]();

    babelHelpers.classPrivateFieldLooseBase(other.obj, _foo)[_foo]();
  }

}

var _foo = babelHelpers.classPrivateFieldLooseKey("foo");
