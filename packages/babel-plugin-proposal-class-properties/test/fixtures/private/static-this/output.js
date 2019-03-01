class A {}

var _self = {
  writable: true,
  value: A
};
var _getA = {
  writable: true,
  value: () => A
};
