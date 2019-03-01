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
    this[null] = "null";
    this[_undefined] = "undefined";
    this[void 0] = "void 0";
    this[_ref3] = "regex";
    this[foo] = "foo";
    this[bar] = "bar";
    this[_baz] = "baz";
    this[`template`] = "template";
    this[_ref4] = "template-with-expression";
  }

  get ["whatever"]() {}

  set ["whatever"](value) {}

  get [_computed]() {}

  set [_computed2](value) {}

  [_ref2]() {}

  static [10]() {}

}

MyClass[_one] = "test";
MyClass[2 * 4 + 7] = "247";
MyClass[2 * four + 7] = "247";
MyClass[_ref] = "247";
