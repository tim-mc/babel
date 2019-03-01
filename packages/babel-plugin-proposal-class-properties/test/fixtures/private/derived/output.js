class Foo {
  constructor() {
    _prop.set(this, {
      writable: true,
      value: "foo"
    });
  }

}

var _prop = new WeakMap();

class Bar extends Foo {
  constructor(...args) {
    super(...args);

    _prop2.set(this, {
      writable: true,
      value: "bar"
    });
  }

}

var _prop2 = new WeakMap();
