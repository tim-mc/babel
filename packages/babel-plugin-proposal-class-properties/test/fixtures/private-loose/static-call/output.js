class Foo {
  test(x) {
    return babelHelpers.classPrivateFieldLooseBase(Foo, _foo)[_foo](x);
  }

}

var _foo = babelHelpers.classPrivateFieldLooseKey("foo");

Object.defineProperty(Foo, _foo, {
  writable: true,
  value: function (x) {
    return x;
  }
});
