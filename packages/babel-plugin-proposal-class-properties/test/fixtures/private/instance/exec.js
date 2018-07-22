class Foo {
  #bar = "foo";

  constructor(status) {
    this.status = status;
  }

  test() {
    return this.#bar;
  }

  update() {
    this.#bar++;
  }

  set(val) {
    this.#bar = val;
  }

  static test(foo) {
    return foo.#bar;
  }

  static update(foo) {
    foo.#bar **= 2;
  }

  #getStatus() {
    debugger;
    return this.status;
  }

  getCurrentStatus() {
    return this.#getStatus();
  }

  getFakeStatus(fakeStatus) {
    const getStatus = this.#getStatus;
    return (function () {
      debugger;
      return getStatus.call({ status: fakeStatus });
    })();
  }

  getFakeStatusFunc() {
    return {
      status: 'fromFakeFunc',
      getFakeStatus: this.#getStatus,
    }
  }
}

const f = new Foo('inactive');
expect(f.test()).toBe("foo");
expect(Foo.test(f)).toBe("foo");
expect("bar" in f).toBe(false);

f.set(1);
expect(f.test()).toBe(1);
f.update();
expect(Foo.test(f)).toBe(2);
Foo.update(f);
expect(f.test()).toBe(4);

expect(f.getCurrentStatus()).toBe('inactive');
expect(f.getFakeStatus('fake')).toBe('fake');
expect(f.getFakeStatusFunc().getFakeStatus()).toBe('fromFakeFunc');
