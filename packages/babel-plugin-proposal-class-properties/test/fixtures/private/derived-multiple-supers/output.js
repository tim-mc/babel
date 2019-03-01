class Foo extends Bar {
  constructor() {
    if (condition) {
      super();

      _bar.set(this, {
        writable: true,
        value: "foo"
      });
    } else {
      super();

      _bar.set(this, {
        writable: true,
        value: "foo"
      });
    }
  }

}

var _bar = new WeakMap();
