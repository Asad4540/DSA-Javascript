"use strict";

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    let temp = input[i];
    if (temp.length > 10) {
        console.log(temp[0] + (temp.length - 2) + temp[temp.length - 1]);
    } else {
        console.log(temp);
    }
}