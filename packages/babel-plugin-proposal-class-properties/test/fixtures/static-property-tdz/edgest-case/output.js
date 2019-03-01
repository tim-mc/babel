function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classNameTDZError(name) { throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys."); }

var _x$x = {
  x: (_classNameTDZError("A"), A) || 0
}.x;

class A {}

_defineProperty(A, _x$x, void 0);
