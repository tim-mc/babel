class C {
  constructor() {
    babelHelpers.defineProperty(this, "y", babelHelpers.classPrivateFieldGet(this, _x));

    _x.set(this, {
      writable: true,
      value: void 0
    });
  }

}

var _x = new WeakMap();

expect(() => {
  new C();
}).toThrow();
