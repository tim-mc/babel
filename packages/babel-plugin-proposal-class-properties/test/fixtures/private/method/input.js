class Foo {
  #status = 'pre-init'

  constructor(status) {
    this.#status = status
  }

  #getStatus() {
    return this.#status;
  }

  getCurrentStatus() {
    return this.#getStatus();
  }

  getFakeStatus(fakeStatus) {
    this.#getStatus();
    const getStatus = this.#getStatus;
    (function () {
      getStatus.call({ status: fakeStatus });
    })();
  }

  getFakeStatusFunc() {
    return {
      status: 'fake-status',
      getFakeStatus: this.#getStatus,
    }
  }
}