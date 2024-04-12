/*
  Input handler function for words.  Checks to see if arguments were specified and are of the correct type.
  Generates RegEx pattern for functional code.
  Calls baseWords for functional code.
  */
function words(string, pattern) {
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
}
/*
  Functional code for words function.
  Breaks up a string into an array, based on a separator provided.
  */
function baseWords(string, pattern) {
  if (pattern === undefined) {
    return string.split(" ");
  } else {
    return string.split(pattern);
  }
}

module.exports = words;
