var foo = "bar";

class Foo {
  constructor(_foo) {
    babelHelpers.defineProperty(this, "bar", this);
    babelHelpers.defineProperty(this, "baz", foo);
  }

}
