class Foo {
  constructor() {
    _bar.set(this, {
      writable: true,
      value: "foo"
    });
  }

}

var _bar = new WeakMap();
