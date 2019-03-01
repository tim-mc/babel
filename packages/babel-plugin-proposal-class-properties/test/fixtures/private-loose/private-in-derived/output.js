class Outer {
  constructor() {
    Object.defineProperty(this, _outer, {
      writable: true,
      value: void 0
    });

    class Test extends babelHelpers.classPrivateFieldLooseBase(this, _outer)[_outer] {}
  }

}

var _outer = babelHelpers.classPrivateFieldLooseKey("outer");
