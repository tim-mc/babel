class Foo {
  #bar = "foo";

  constructor(opts) {
    this.opts = opts;
  }

  #getOptions() {
    return this.opts;
  }

  getCurrentOptions() {
    return this.#getOptions();
  }

  getFakeOptions() {
    this.#getOptions();
    const getOptions = this.#getOptions;
    (function () {
      getOptions.call({ opts: { isFake: true } });
    })();
  }

  getFakeOptionsFunc() {
    return {
      opts: {
        stillFake: true,
      },
      getFakeOptions: this.#getOptions,
    }
  }
}
