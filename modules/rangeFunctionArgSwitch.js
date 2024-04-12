/*
    Handles when only two arguments are entered for functions that handle ranges.
    Where the second argument is negative, it assumes the user intended a range between 0 and the negative number.
    To do so, start stays as the negative number and end assigned zero.
    Also switches start and end where start > end
  */
module.exports = function rangeFunctionArgSwitch(start, end) {
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
};
