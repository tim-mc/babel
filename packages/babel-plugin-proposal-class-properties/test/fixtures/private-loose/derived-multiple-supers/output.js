class Foo extends Bar {
  constructor() {
    if (condition) {
      super();
      Object.defineProperty(this, _bar, {
        writable: true,
        value: "foo"
      });
    } else {
      super();
      Object.defineProperty(this, _bar, {
        writable: true,
        value: "foo"
      });
    }
  }

}

var _bar = babelHelpers.classPrivateFieldLooseKey("bar");
