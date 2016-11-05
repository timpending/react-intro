import Cat from './cats';

const Human = require('./human.js');


const tim = new Human('Tim');
console.log(tim.makeNoise());
const mittens = new Cat('Mittens');
console.log(mittens.meow());
