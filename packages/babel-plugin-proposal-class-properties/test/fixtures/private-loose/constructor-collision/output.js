var foo = "bar";

class Foo {
  constructor() {
    Object.defineProperty(this, _bar, {
      writable: true,
      value: foo
    });
    var _foo = "foo";
  }

}

var _bar = babelHelpers.classPrivateFieldLooseKey("bar");
