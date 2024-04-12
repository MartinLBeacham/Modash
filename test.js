//const _ = require("./_.js");

const inRange = require("./modules/inRange.js");
console.log("should be true;", inRange(3, 2, 4));

console.log("should be true;", inRange(4, 8));

console.log("should be false;", inRange(4, 2));
