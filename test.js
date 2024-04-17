//const _ = require("./_.js");

const _ = require("./modules/Modash.js");

console.log("should be true;", _.inRange(3, 2, 4));

console.log("should be true;", _.inRange(4, 8));

console.log("should be false;", _.inRange(4, 2));
