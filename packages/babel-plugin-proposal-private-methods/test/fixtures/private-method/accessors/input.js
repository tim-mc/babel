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
