class Cat {
  constructor(name) {
    this.name = name;
  }
  meow() {
    return `Meow meow meow, I'm ${this.name}. Do you like my hat?`;
  }
}

module.exports = Cat;
