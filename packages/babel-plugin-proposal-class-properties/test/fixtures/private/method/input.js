class Foo {
  #foo = "bar"

  constructor(status) {
      this.status = status;
  }

  #getStatus() {
      return this.status;
  }

  getCurrentStatus() {
      return this.#getStatus();
  }

  setCurrentStatus(newStatus) {
      this.status = newStatus;
  }

  getFakeStatus(fakeStatus) {
      const getStatus = this.#getStatus;
      return function() {
          return getStatus.call({ status: fakeStatus });
      };
  }

  getFakeStatusFunc() {
      return {
          status: 'fake-status',
          getFakeStatus: this.#getStatus,
      };
  }
}