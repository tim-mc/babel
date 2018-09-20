// class Foo {
//   #foo = 0;
//   constructor() {
//     this.publicField = this.#privateMethod();
//   }

//   test(other) {
//     this.#foo += 1;
//     this.#foo = 2;
//     other.obj.#foo += 1;
//     other.obj.#foo = 2;
//   }

//   #privateMethod() {
//     return 42;
//   }
// }

// expect((new Foo).publicField).toEqual(42);
