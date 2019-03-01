class Foo {
  constructor() {
    _foo.set(this, {
      writable: true,
      value: 0
    });
  }

  test(other) {
    var _other$obj;

    babelHelpers.classPrivateFieldSet(this, _foo, babelHelpers.classPrivateFieldGet(this, _foo) + 1);
    babelHelpers.classPrivateFieldSet(this, _foo, 2);
    babelHelpers.classPrivateFieldSet(_other$obj = other.obj, _foo, babelHelpers.classPrivateFieldGet(_other$obj, _foo) + 1);
    babelHelpers.classPrivateFieldSet(other.obj, _foo, 2);
  }

}

var _foo = new WeakMap();
