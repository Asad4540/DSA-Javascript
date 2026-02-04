"use strict"

const fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);


let idx = 0;
let res = 0;
let n = Number(input[idx++]);

for (let i = 1; i <= n; i++) {
    if (input[i] == "X++" || input[i] == "++X") {
        res += 1;
    }
    else res -= 1;
}

console.log(res)