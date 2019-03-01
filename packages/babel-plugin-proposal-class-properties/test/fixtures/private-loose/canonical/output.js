class Point {
  constructor(_x2 = 0, _y2 = 0) {
    Object.defineProperty(this, _x, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _y, {
      writable: true,
      value: void 0
    });
    babelHelpers.classPrivateFieldLooseBase(this, _x)[_x] = +_x2;
    babelHelpers.classPrivateFieldLooseBase(this, _y)[_y] = +_y2;
  }

  get x() {
    return babelHelpers.classPrivateFieldLooseBase(this, _x)[_x];
  }

  set x(value) {
    babelHelpers.classPrivateFieldLooseBase(this, _x)[_x] = +value;
  }

  get y() {
    return babelHelpers.classPrivateFieldLooseBase(this, _y)[_y];
  }

  set y(value) {
    babelHelpers.classPrivateFieldLooseBase(this, _y)[_y] = +value;
  }

  equals(p) {
    return babelHelpers.classPrivateFieldLooseBase(this, _x)[_x] === babelHelpers.classPrivateFieldLooseBase(p, _x)[_x] && babelHelpers.classPrivateFieldLooseBase(this, _y)[_y] === babelHelpers.classPrivateFieldLooseBase(p, _y)[_y];
  }

  toString() {
    return `Point<${babelHelpers.classPrivateFieldLooseBase(this, _x)[_x]},${babelHelpers.classPrivateFieldLooseBase(this, _y)[_y]}>`;
  }

}

var _x = babelHelpers.classPrivateFieldLooseKey("x");

var _y = babelHelpers.classPrivateFieldLooseKey("y");
