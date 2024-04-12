/*
_ object contains the module's functions.
Methods whose names start with 'base' contain the functional logic.
Methods without 'base' contain the user input handling logic.
*/

const _ = {
  /*
  Input handler function for words.  Checks to see if arguments were specified and are of the correct type.
  Generates RegEx pattern for functional code.
  Calls baseWords for functional code.
  */
  words(string, pattern) {
    if (typeof string !== "string") {
      console.log("Please enter string values for string.");
      return undefined;
    }

    if (pattern !== undefined && typeof pattern !== "string") {
      console.log("Please enter string values for pattern.");
      return undefined;
    }

    const regExInput = pattern === undefined ? undefined : new RegExp(pattern);

    return baseWords(string, regExInput);
  },
  /*
  Functional code for words function.
  Breaks up a string into an array, based on a separator provided.
  */
  baseWords(string, pattern) {
    if (pattern === undefined) {
      return string.split(" ");
    } else {
      return string.split(pattern);
    }
  },
  /*
  Input handler function for pad.  Checks to see if string was specified and
  that arguments are of the correct type.
  Calls basePad for functional code.
  */
  pad(string, length = 0, chars = " ") {
    if (string === undefined) {
      return "";
    }

    if (typeof chars === "number" && typeof length === "string") {
      let temp = chars;
      chars = length;
      length = temp;
    }

    if (length < 0) {
      console.log("Only enter positive numbers for length.");
      return undefined;
    }

    return basePad(string, length, chars);
  },
  /*
  Functional code for pad function.
  If the provided string is less than the provided length, then it pads it evenly on both sides
  with the provided padding chars, if it cannot pad evenly, the right side is favored.
  */
  basePad(string, length, chars) {
    let originalLength = string.length;

    if (originalLength >= length) {
      return string;
    }

    const totalPaddingLength = length - originalLength;
    const rightLength = Math.ceil(
      (totalPaddingLength % (2 * chars.length)) / 2,
    );
    const leftLength = Math.floor(
      (totalPaddingLength % (2 * chars.length)) / 2,
    );

    const sidePaddingMultiple = Math.floor(
      totalPaddingLength / (2 * chars.length),
    );

    let rightPadding =
      chars.repeat(sidePaddingMultiple) + chars.slice(0, rightLength);
    let leftPadding =
      chars.repeat(sidePaddingMultiple) + chars.slice(0, leftLength);

    return leftPadding + string + rightPadding;
  },
  /*
  Input handler function for has.  Checks to see if arguments are of the correct type.
  Calls baseHas for functional code.
  */
  has(object, path) {
    if (typeof path === "string") {
      path = path.split(".");
    } else if (!Array.isArray(path)) {
      console.log("Path must be an array or string.");
      return undefined;
    }

    return baseHas(object, path);
  },
  /*
  Functional code for has function.
  Looks through a nested object to determine whether the provided path exists in that object.
  */
  baseHas(object, path) {
    if (Object.hasOwn(object, path[0])) {
      if (path.length === 1) {
        return true;
      } else {
        object = object[path[0]];
        return baseHas(object, path.slice(1, path.length));
      }
    } else {
      return false;
    }
  },
};

// Exporting _ wrapper object.
module.exports = _;
