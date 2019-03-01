var foo = "foo";

var bar = () => {};

var four = 4;

var _one = one();

var _ref = 2 * four + seven;

var _undefined = undefined;

var _computed = computed();

var _computed2 = computed();

var _ref2 = "test" + one;

var _ref3 = /regex/;
var _baz = baz;
var _ref4 = `template${expression}`;

class MyClass {
  constructor() {
    babelHelpers.defineProperty(this, null, "null");
    babelHelpers.defineProperty(this, _undefined, "undefined");
    babelHelpers.defineProperty(this, void 0, "void 0");
    babelHelpers.defineProperty(this, _ref3, "regex");
    babelHelpers.defineProperty(this, foo, "foo");
    babelHelpers.defineProperty(this, bar, "bar");
    babelHelpers.defineProperty(this, _baz, "baz");
    babelHelpers.defineProperty(this, `template`, "template");
    babelHelpers.defineProperty(this, _ref4, "template-with-expression");
  }

  get ["whatever"]() {}

  set ["whatever"](value) {}

  get [_computed]() {}

  set [_computed2](value) {}

  [_ref2]() {}

  static [10]() {}

}

babelHelpers.defineProperty(MyClass, _one, "test");
babelHelpers.defineProperty(MyClass, 2 * 4 + 7, "247");
babelHelpers.defineProperty(MyClass, 2 * four + 7, "247");
babelHelpers.defineProperty(MyClass, _ref, "247");
