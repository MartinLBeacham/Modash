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
        return this.baseHas(object, path.slice(1, path.length));
      }
    } else {
      return false;
    }
  },
  /*
  Input handler function for invert.  Checks to see if arguments are of the correct type.
  Calls baseInvert for functional code.
  */
  invert(object) {
    if (typeof object !== "object") {
      console.log("The argument for object must be an Object!");
      return object;
    }
    return this.baseInvert(object);
  },
  /*
  Functional code for invert function.
  Inverts the key:value pairs so that the value is the key and the key is the value.
  key:value --> value:key
  */
  baseInvert(object) {
    returnObject = {};
    for (key in object) {
      returnObject[object[key]] = key;
    }
    return returnObject;
  },
  /*
  Input handler function for findKey. 
  Calls baseFindKey for functional code.
  */
  findKey(object, predicate) {
    return this.baseFindKey(object, predicate);
  },
  /*
  Functional code for findKey function.
  Takes an object as object and some search logic as predicate
  Currently predicate can either be a callback function or an array
  */
  baseFindKey(object, predicate) {
    if (typeof predicate === "function") {
      //if predicate is a callback function
      for (key in object) {
        if (predicate(object[key])) {
          return key;
        }
      }
    } else {
      //if predicate is an array
      for (key in object) {
        if (object[key][predicate[0]] === predicate[1]) {
          return key;
        }
      }
      return undefined;
    }
  },

  fetchAPI() {
    if (typeof baseUrl !== string) {
      console.log("Please enter a string for baseUrl.");
      return undefined;
    }
    if (typeof endpoint !== string) {
      console.log("Please enter a string for endpoint.");
      return undefined;
    }
    if (typeof requestParams !== string) {
      console.log("Please enter a string for requestParams.");
      return undefined;
    }

    if (typeof method !== string) {
      console.log("Please enter a string for method.");
      return undefined;
    }
    if (typeof headers !== object) {
      console.log("Please enter a object for headers.");
      return undefined;
    }
    return base_fetchAPI(baseUrl, endpoint, requestParams, method, headers);
  },

  async base_fetchAPI(baseUrl, endpoint, requestParams, method, headers) {
    const urlToFetch = baseUrl + endpoint + requestParams;
    console.log(urlToFetch);
    try {
      const response = await fetch(urlToFetch, {
        method: "GET", // "POST" does not work
        cache: "no-cache",
        headers: headers ?? { "Content-Type": "application/json" },
      });
      if (response.ok) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

// Exporting _ wrapper object.
module.exports = _;
