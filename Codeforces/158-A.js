"use strict"

const fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

let n = Number(input[0]);
let targetIndex = Number(input[1]);
let target = Number(input[targetIndex + 1]);
let res = 0;

for (let i = 2; i < n + 2; i++) {
    if (Number(input[i]) >= target && Number(input[i]) > 0) {
        res++;
    }
    else break;
}

console.log(res);