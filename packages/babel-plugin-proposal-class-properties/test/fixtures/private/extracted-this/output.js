var foo = "bar";

class Foo {
  constructor(_foo) {
    _bar.set(this, {
      writable: true,
      value: this
    });

    _baz.set(this, {
      writable: true,
      value: foo
    });
  }

}

var _bar = new WeakMap();

var _baz = new WeakMap();
