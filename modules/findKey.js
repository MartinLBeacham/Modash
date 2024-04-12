/*
  Input handler function for findKey. 
  Calls baseFindKey for functional code.
  */

function findKey(object, predicate) {
  return baseFindKey(object, predicate);
}
/*
  Functional code for findKey function.
  Takes an object as object and some search logic as predicate
  Currently predicate can either be a callback function or an array
  */
function baseFindKey(object, predicate) {
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
}

module.exports = findKey;
