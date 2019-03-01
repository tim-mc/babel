var foo = "bar";

class Foo {
  constructor() {
    _bar.set(this, {
      writable: true,
      value: foo
    });

    var _foo = "foo";
  }

}

var _bar = new WeakMap();
