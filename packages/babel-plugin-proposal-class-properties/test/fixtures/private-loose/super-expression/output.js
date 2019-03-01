class Foo extends Bar {
  constructor() {
    var _temp;

    foo((_temp = super(), Object.defineProperty(this, _bar, {
      writable: true,
      value: "foo"
    }), _temp));
  }

}

var _bar = babelHelpers.classPrivateFieldLooseKey("bar");
