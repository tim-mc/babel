class Foo {
  constructor() {
    _foo.set(this, {
      writable: true,
      value: function () {
        return this;
      }
    });
  }

  test(other) {
    var _other$obj;

    babelHelpers.classPrivateFieldGet(this, _foo).call(this);
    babelHelpers.classPrivateFieldGet(_other$obj = other.obj, _foo).call(_other$obj);
  }

}

var _foo = new WeakMap();
