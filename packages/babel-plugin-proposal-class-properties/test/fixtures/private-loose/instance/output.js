class Foo {
  constructor() {
    Object.defineProperty(this, _bar, {
      writable: true,
      value: "foo"
    });
  }

}

var _bar = babelHelpers.classPrivateFieldLooseKey("bar");
