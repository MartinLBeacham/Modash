/*
_ object contains the module's functions.
Methods whose names start with 'base' contain the functional logic.
Methods without 'base' contain the user input handling logic.
*/

const _ = {
  /*
    Handles when only two arguments are entered for functions that handle ranges.
    Where the second argument is negative, it assumes the user intended a range between 0 and the negative number.
    To do so, start stays as the negative number and end assigned zero.
    Also switches start and end where start > end
  */
  rangeFunctionArgSwitch(start, end) {
    if (end === undefined) {
      if (start < 0) {
        end = 0;
      } else {
        end = start;
        start = 0;
      }
    } else if (end < start) {
      let temp = end;
      end = start;
      start = temp;
    }
    return [start, end];
  },

  /*
  Input handler function for clamp.  Checks to see if start was specified and assigns proper values to start and end accordingly.
  Calls trueClamp for functional code.
  */
  clamp(number, start, end) {
    if (typeof number !== "number") {
      console.log("Please enter a number.");
      return undefined;
    }

    if (start === undefined) {
      console.log("Please enter a number for end");
      return undefined;
    }

    [start, end] = this.rangeFunctionArgSwitch(start, end);

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

  /*
  Input handler function for inRange.  Checks to see if start was specified and assigns proper values to start and end accordingly.
  Calls baseInRange for functional code.
  */
  inRange(number, start, end) {
    if (typeof number !== "number") {
      console.log("Please enter a number.");
      return undefined;
    }

    if (start === undefined) {
      console.log("Please enter a number for end");
      return undefined;
    }

    [start, end] = this.rangeFunctionArgSwitch(start, end);

    if (start === end) {
      console.log("start and end cannot be the same value!");
      return undefined;
    }

    return this.baseInRange(number, start, end);
  },
  /*
  Functional code for inRange function.
  Checks to see whether number is within range specified.
  */
  baseInRange(number, start = 0, end) {
    return number >= start && number < end ? true : false;
  },
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

    return this.baseWords(string, regExInput);
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

    return this.basePad(string, length, chars);
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
      (totalPaddingLength % (2 * chars.length)) / 2
    );
    const leftLength = Math.floor(
      (totalPaddingLength % (2 * chars.length)) / 2
    );

    const sidePaddingMultiple = Math.floor(
      totalPaddingLength / (2 * chars.length)
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
    if (typeof path === 'string') {
      path = path.split('.');
    }else if(!Array.isArray(path)){
      console.log("Path must be an array or string.")
      return undefined
    }

    return this.baseHas(object, path);
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
        return this.baseHas(object, path.slice(1,path.length));
      }
    }
    else {
      return false;
    }
  },
 /*
  Input handler function for invert.  Checks to see if arguments are of the correct type.
  Calls baseInvert for functional code.
  */
  invert(object){
    if(typeof object !== 'object'){
      console.log("The argument for object must be an Object!")
      return object
    }
    return this.baseInvert(object);
  },
  /*
  Functional code for invert function.
  Inverts the key:value pairs so that the value is the key and the key is the value.
  key:value --> value:key
  */
  baseInvert(object){

    returnObject={};
    for(key in object){
      returnObject[object[key]]=key;
    }
    return returnObject;
  },

};

// Exporting _ object.
module.exports = _;
