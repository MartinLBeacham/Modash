//module referencing other modules in pack for ease of importing

const clamp = require("./clamp.js");
const fetchAPI = require("./fetchAPI.js");
const findKey = require("./findKey.js");
const has = require("./has.js");
const inRange = require("./inRange.js");
const invert = require("./invert.js");
const word = require("./word.js");
const pad = require("./pad.js");

module.exports = {
  clamp,
  fetchAPI,
  findKey,
  has,
  inRange,
  invert,
  word,
  pad,
};
