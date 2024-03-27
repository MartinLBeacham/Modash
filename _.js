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

    if (end === undefined) {
      end = start;
      start = 0;
    }

    if (typeof number !== "number") {
      console.log("Please enter a number.");
      return undefined;
    }

    return this.trueClamp(number, start, end);
  },
  /*
  Functional code for clamp function.  Checks to see whether number is within range specified.  If not, it clamps the number.  Then returns the clamped number accordingly.
  */
  trueClamp(number, start = 0, end) {
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

console.log(_.clamp(10, 5));

// Do not write or modify code below this line.
module.exports = _;
