/*
_ object contains the module's functions.
Methods whose names start with 'base' contain the functional logic.
Methods without 'base' contain the user input handling logic.
*/
const _ = {
  /*
  Input handler function.  Checks to see if start was specified and assigns proper values to start and end accordingly.
  Calls trueClamp for functional code.
  */
  clamp(number, start, end) {
    if (start === undefined) {
      console.log("Please enter a number for end");
      return undefined;
    }
    /*
    Handles when only two arguments are entered.
    Where the second argument is negative, it assumes the user intended to clamp between 0 and the negative number.
    To do so, start stays as the negative number and end assigned zero.
    */
    if (end === undefined) {
      if (start < 0) {
        end = 0;
      } else {
        end = start;
        start = 0;
      }
    }

    if (typeof number !== "number") {
      console.log("Please enter a number.");
      return undefined;
    }

    return this.baseClamp(number, start, end);
  },
  /*
  Functional code for clamp function.  Checks to see whether number is within range specified.
  If not, it clamps the number.  Then returns the clamped number accordingly.
  */
  baseClamp(number, start = 0, end) {
    if (number >= start) {
      if (number <= end) {
        return number;
      } else {
        return end;
      }
    } else {
      return start;
    }
  },
};

// Exporting _ object.
module.exports = _;
