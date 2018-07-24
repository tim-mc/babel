var Foo =
/*#__PURE__*/
function () {
  "use strict";

  function Foo(_status2) {
    babelHelpers.classCallCheck(this, Foo);

    _status.set(this, 'pre-init');

    var getStatus = function getStatus() {
      return babelHelpers.classPrivateFieldGet(this, _status);
    }.bind(this);

    _getStatus.set(this, getStatus);

    babelHelpers.classPrivateFieldSet(this, _status, _status2);
  }

  babelHelpers.createClass(Foo, [{
    key: "getCurrentStatus",
    value: function getCurrentStatus() {
      return babelHelpers.classPrivateFieldGet(this, _getStatus).call(this);
    }
  }, {
    key: "getFakeStatus",
    value: function getFakeStatus(fakeStatus) {
      babelHelpers.classPrivateFieldGet(this, _getStatus).call(this);
      var getStatus = babelHelpers.classPrivateFieldGet(this, _getStatus);

      (function () {
        getStatus.call({
          status: fakeStatus
        });
      })();
    }
  }, {
    key: "getFakeStatusFunc",
    value: function getFakeStatusFunc() {
      return {
        status: 'fake-status',
        getFakeStatus: babelHelpers.classPrivateFieldGet(this, _getStatus)
      };
    }
  }]);
  return Foo;
}();

var _status = new WeakMap();

var _getStatus = new WeakMap();
