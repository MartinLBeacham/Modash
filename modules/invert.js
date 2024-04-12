/*
  Input handler function for invert.  Checks to see if arguments are of the correct type.
  Calls baseInvert for functional code.
  */
function invert(object) {
  if (typeof object !== "object") {
    console.log("The argument for object must be an Object!");
    return object;
  }
  return baseInvert(object);
}
/*
  Functional code for invert function.
  Inverts the key:value pairs so that the value is the key and the key is the value.
  key:value --> value:key
  */
function baseInvert(object) {
  returnObject = {};
  for (key in object) {
    returnObject[object[key]] = key;
  }
  return returnObject;
}

module.exports = invert;
