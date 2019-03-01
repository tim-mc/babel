class Foo {
  constructor() {
    babelHelpers.defineProperty(this, "foo", 0);
  }

  test(other) {
    this.foo++;
    ++this.foo;
    other.obj.foo++;
    ++other.obj.foo;
  }

}
