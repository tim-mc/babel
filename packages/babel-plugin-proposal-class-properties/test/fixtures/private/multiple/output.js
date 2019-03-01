class Foo {
  constructor() {
    _x.set(this, {
      writable: true,
      value: 0
    });

    _y.set(this, {
      writable: true,
      value: babelHelpers.classPrivateFieldGet(this, _x)
    });
  }

}

var _x = new WeakMap();

var _y = new WeakMap();
