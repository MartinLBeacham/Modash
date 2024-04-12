/*
  Input handler function for has.  Checks to see if arguments are of the correct type.
  Calls baseHas for functional code.
  */
function has(object, path) {
  if (typeof path === "string") {
    path = path.split(".");
  } else if (!Array.isArray(path)) {
    console.log("Path must be an array or string.");
    return undefined;
  }

  return baseHas(object, path);
}
/*
  Functional code for has function.
  Looks through a nested object to determine whether the provided path exists in that object.
  */
function baseHas(object, path) {
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
}

module.exports = has;
