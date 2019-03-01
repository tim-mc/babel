class Foo {
  test(x) {
    return babelHelpers.classStaticPrivateFieldSpecGet(Foo, Foo, _foo).call(Foo, x);
  }

}

var _foo = {
  writable: true,
  value: function (x) {
    return x;
  }
};
