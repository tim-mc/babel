class Foo extends Bar {
  constructor() {
    if (condition) {
      super();
      babelHelpers.defineProperty(this, "bar", "foo");
    } else {
      super();
      babelHelpers.defineProperty(this, "bar", "foo");
    }
  }

}
