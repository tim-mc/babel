class Foo extends Bar {
  constructor() {
    super();

    _bar.set(this, {
      writable: true,
      value: "foo"
    });
  }

}

var _bar = new WeakMap();
