const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

let n = Number(input[0]);
let temp = input[1];
let res = 0;

for (let i = 1; i <= n; i++) {
    if (temp[i] === temp[i - 1]) {
        res++;
    }
}

console.log(res);