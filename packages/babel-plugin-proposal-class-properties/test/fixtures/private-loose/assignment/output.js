class Foo {
  constructor() {
    Object.defineProperty(this, _foo, {
      writable: true,
      value: 0
    });
  }

  test(other) {
    babelHelpers.classPrivateFieldLooseBase(this, _foo)[_foo] += 1;
    babelHelpers.classPrivateFieldLooseBase(this, _foo)[_foo] = 2;
    babelHelpers.classPrivateFieldLooseBase(other.obj, _foo)[_foo] += 1;
    babelHelpers.classPrivateFieldLooseBase(other.obj, _foo)[_foo] = 2;
  }

}

var _foo = babelHelpers.classPrivateFieldLooseKey("foo");
