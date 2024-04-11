const _ = require("./_.js");

let users = {
  meetu: { salary: 36000, active: true },
  teetu: { salary: 40000, active: false },
  seetu: { salary: 10000, active: true },
};

console.log(
  _.findKey(users, function (o) {
    return o.salary < 40000;
  }),
);
