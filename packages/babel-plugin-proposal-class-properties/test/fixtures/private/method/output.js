var Foo =
/*#__PURE__*/
function () {
  "use strict";

  function Foo(status) {
    babelHelpers.classCallCheck(this, Foo);

    _foo.set(this, {
      writable: true,
      value: "bar"
    });

    var getStatus = function getStatus() {
      return this.status;
    };

    _getStatus.set(this, getStatus);

    this.status = status;
  }

  babelHelpers.createClass(Foo, [{
    key: "getCurrentStatus",
    value: function getCurrentStatus() {
      return babelHelpers.classPrivateMethodGet(this, _getStatus).call(this);
    }
  }, {
    key: "setCurrentStatus",
    value: function setCurrentStatus(newStatus) {
      this.status = newStatus;
    }
  }, {
    key: "getFakeStatus",
    value: function getFakeStatus(fakeStatus) {
      var getStatus = babelHelpers.classPrivateMethodGet(this, _getStatus);
      return function () {
        return getStatus.call({
          status: fakeStatus
        });
      };
    }
  }, {
    key: "getFakeStatusFunc",
    value: function getFakeStatusFunc() {
      return {
        status: 'fake-status',
        getFakeStatus: babelHelpers.classPrivateMethodGet(this, _getStatus)
      };
    }
  }]);
  return Foo;
}();

var _foo = new WeakMap();

var _getStatus = new WeakMap();
