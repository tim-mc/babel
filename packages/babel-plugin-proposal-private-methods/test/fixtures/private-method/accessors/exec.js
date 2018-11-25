class Foo {
  #privateField = "top secret string";

  get #privateGetter() {
    return this.#privateField;
  }

  set #privateSetter(newSecretString) {
    this.#privateField = newSecretString;
  }

  getPrivateField() {
    return this.#privateGetter;
  }

  setPrivateField(newSecretString) {
    this.#privateSetter = newSecretString;
  }
}

const foo = new Foo();
expect(foo.getPrivateField()).toEqual("top secret string");
foo.setPrivateField("new secret string");
expect(foo.getPrivateField()).toEqual("new secret string");