var foo = "bar";

class Foo {
  constructor(_foo) {
    Object.defineProperty(this, _bar, {
      writable: true,
      value: this
    });
    Object.defineProperty(this, _baz, {
      writable: true,
      value: foo
    });
  }

}

var _bar = babelHelpers.classPrivateFieldLooseKey("bar");

var _baz = babelHelpers.classPrivateFieldLooseKey("baz");
