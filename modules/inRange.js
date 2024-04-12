const rangeFunctionArgSwitch = require("./rangeFunctionArgSwitch.js");
/*
  Input handler function for inRange.  Checks to see if start was specified and assigns proper values to start and end accordingly.
  Calls baseInRange for functional code.
  */
function inRange(number, start, end) {
  if (typeof number !== "number") {
    console.log("Please enter a number.");
    return undefined;
  }

  if (start === undefined) {
    console.log("Please enter a number for end");
    return undefined;
  }

  [start, end] = rangeFunctionArgSwitch(start, end);

  if (start === end) {
    console.log("start and end cannot be the same value!");
    return undefined;
  }

  return baseInRange(number, start, end);
}
/*
  Functional code for inRange function.
  Checks to see whether number is within range specified.
  */
function baseInRange(number, start = 0, end) {
  return number >= start && number < end ? true : false;
}

module.exports = inRange;
