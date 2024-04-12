/*
  Input handler function for pad.  Checks to see if string was specified and
  that arguments are of the correct type.
  Calls basePad for functional code.
  */
function pad(string, length = 0, chars = " ") {
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
}
/*
  Functional code for pad function.
  If the provided string is less than the provided length, then it pads it evenly on both sides
  with the provided padding chars, if it cannot pad evenly, the right side is favored.
  */
function basePad(string, length, chars) {
  let originalLength = string.length;

  if (originalLength >= length) {
    return string;
  }

  const totalPaddingLength = length - originalLength;
  const rightLength = Math.ceil((totalPaddingLength % (2 * chars.length)) / 2);
  const leftLength = Math.floor((totalPaddingLength % (2 * chars.length)) / 2);

  const sidePaddingMultiple = Math.floor(
    totalPaddingLength / (2 * chars.length),
  );

  let rightPadding =
    chars.repeat(sidePaddingMultiple) + chars.slice(0, rightLength);
  let leftPadding =
    chars.repeat(sidePaddingMultiple) + chars.slice(0, leftLength);

  return leftPadding + string + rightPadding;
}

module.exports = pad;
