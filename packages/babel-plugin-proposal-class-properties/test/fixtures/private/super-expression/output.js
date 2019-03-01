class Foo extends Bar {
  constructor() {
    var _temp;

    foo((_temp = super(), _bar.set(this, {
      writable: true,
      value: "foo"
    }), _temp));
  }

}

var _bar = new WeakMap();
