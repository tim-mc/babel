class Child extends Parent {
  constructor() {
    super();

    _scopedFunctionWithThis.set(this, {
      writable: true,
      value: () => {
        this.name = {};
      }
    });
  }

}

var _scopedFunctionWithThis = new WeakMap();
