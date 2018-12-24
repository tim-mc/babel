class Foo {
  #privateField = "top secret string";

  constructor() {
    this.publicField = "not secret string";
  }

  get #privateFieldValue() {
    return this.#privateField;
  }

  set #privateFieldValue(newValue) {
    this.#privateField = newValue;
  }

  publicGetPrivateField() {
    return this.#privateFieldValue;
  }

  publicSetPrivateField(newValue) {
    this.#privateFieldValue = newValue;
  }

  get publicFieldValue() {
    return this.publicField;
  }

  set publicFieldValue(newValue) {
    this.publicField = newValue;
  }

  testUpdates() {
    this.#privateField = 0;
    this.publicField = 0;
    this.#privateFieldValue = this.#privateFieldValue++;
    this.publicFieldValue = this.publicFieldValue++;
    expect(this.#privateField).toEqual(this.publicField);

    this.#privateFieldValue = ++this.#privateFieldValue;
    this.publicFieldValue = ++this.publicFieldValue;
    expect(this.#privateField).toEqual(this.publicField);

    this.#privateFieldValue += 1;
    this.publicFieldValue += 1;
    expect(this.#privateField).toEqual(this.publicField);
  }
}


const foo = new Foo();

expect(foo.publicGetPrivateField()).toEqual("top secret string");

foo.publicSetPrivateField("new secret string");
expect(foo.publicGetPrivateField()).toEqual("new secret string");

foo.testUpdates();
