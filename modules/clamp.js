const rangeFunctionArgSwitch = require("./rangeFunctionArgSwitch.js");

/*
  Input handler function for clamp.  Checks to see if start was specified and assigns proper values to start and end accordingly.
  Calls trueClamp for functional code.
  */
function clamp(number, start, end) {
  if (typeof number !== "number") {
    console.log("Please enter a number.");
    return undefined;
  }

  if (start === undefined) {
    console.log("Please enter a number for end");
    return undefined;
  }

  [start, end] = rangeFunctionArgSwitch(start, end);

  return baseClamp(number, start, end);
}
/*
  Functional code for clamp function.  Checks to see whether number is within range specified.
  If not, it clamps the number.  Then returns the clamped number accordingly.
  */
function baseClamp(number, start = 0, end) {
  if (number >= start) {
    if (number <= end) {
      return number;
    } else {
      return end;
    }
  } else {
    return start;
  }
}
module.exports = clamp;
