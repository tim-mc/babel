class Point {
  constructor(_x2 = 0, _y2 = 0) {
    _x.set(this, {
      writable: true,
      value: void 0
    });

    _y.set(this, {
      writable: true,
      value: void 0
    });

    babelHelpers.classPrivateFieldSet(this, _x, +_x2);
    babelHelpers.classPrivateFieldSet(this, _y, +_y2);
  }

  get x() {
    return babelHelpers.classPrivateFieldGet(this, _x);
  }

  set x(value) {
    babelHelpers.classPrivateFieldSet(this, _x, +value);
  }

  get y() {
    return babelHelpers.classPrivateFieldGet(this, _y);
  }

  set y(value) {
    babelHelpers.classPrivateFieldSet(this, _y, +value);
  }

  equals(p) {
    return babelHelpers.classPrivateFieldGet(this, _x) === babelHelpers.classPrivateFieldGet(p, _x) && babelHelpers.classPrivateFieldGet(this, _y) === babelHelpers.classPrivateFieldGet(p, _y);
  }

  toString() {
    return `Point<${babelHelpers.classPrivateFieldGet(this, _x)},${babelHelpers.classPrivateFieldGet(this, _y)}>`;
  }

}

var _x = new WeakMap();

var _y = new WeakMap();
