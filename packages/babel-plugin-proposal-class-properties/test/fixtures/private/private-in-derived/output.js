class Outer {
  constructor() {
    _outer.set(this, {
      writable: true,
      value: void 0
    });

    class Test extends babelHelpers.classPrivateFieldGet(this, _outer) {}
  }

}

var _outer = new WeakMap();
