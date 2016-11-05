'use strict';

var _cats = require('./cats');

var _cats2 = _interopRequireDefault(_cats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Human = require('./human.js');

var tim = new Human('Tim');
console.log(tim.makeNoise());
var mittens = new _cats2.default('Mittens');
console.log(mittens.meow());