"use strict";

class Hello {
  toString() {
    return 'hello';
  }

}

class Outer extends Hello {
  constructor() {
    super();

    var _super$toString = super.toString();

    class Inner {
      constructor() {
        babelHelpers.defineProperty(this, _super$toString, 'hello');
      }

    }

    return new Inner();
  }

}

expect(new Outer().hello).toBe('hello');
