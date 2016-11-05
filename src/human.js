class Human {
  constructor(name) {
    this.name = name;
  }
  makeNoise() {
    return `${this.name} says "Seize the Carp."`;
  }
}

module.exports = Human;
