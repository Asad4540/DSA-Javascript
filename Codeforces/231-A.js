"use strict";

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
let idx = 0;
let n = Number(input[idx++]);
let solved = 0;

for (let i = 0; i < n; i++) {
    const a = Number(input[idx++]);
    const b = Number(input[idx++]);
    const c = Number(input[idx++]);

    if (a + b + c >= 2) solved++;
}

console.log(solved);