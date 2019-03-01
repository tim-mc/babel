class A {
  foo() {
    return "bar";
  }

}

class B extends A {
  constructor(...args) {
    super(...args);

    _foo.set(this, {
      writable: true,
      value: super.foo()
    });
  }

}

var _foo = new WeakMap();
