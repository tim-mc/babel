class Foo {
  constructor() {
    babelHelpers.defineProperty(this, "foo", function () {
      return this;
    });
  }

  test(other) {
    this.foo();
    other.obj.foo();
  }

}
