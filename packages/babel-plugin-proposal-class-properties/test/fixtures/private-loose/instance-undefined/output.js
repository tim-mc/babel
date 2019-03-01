class Foo {
  constructor() {
    Object.defineProperty(this, _bar, {
      writable: true,
      value: void 0
    });
  }

}

var _bar = babelHelpers.classPrivateFieldLooseKey("bar");
