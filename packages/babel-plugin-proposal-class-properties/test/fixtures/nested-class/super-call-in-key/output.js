"use strict";

class Hello {
  constructor() {
    return {
      toString() {
        return 'hello';
      }

    };
  }

}

class Outer extends Hello {
  constructor() {
    var _super = super();

    class Inner {
      constructor() {
        babelHelpers.defineProperty(this, _super, "hello");
      }

    }

    return new Inner();
  }

}

expect(new Outer().hello).toBe('hello');
