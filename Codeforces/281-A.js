"use strict";

const fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split(/\+s/);

let temp = input[0];

console.log(temp[0].toUpperCase() + temp.slice(1, temp.length));