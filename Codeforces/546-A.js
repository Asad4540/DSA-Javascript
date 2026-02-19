const fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim('').split(' ');

let iteration = Number(input[0]);
let money = Number(input[1]);
let count = Number(input[2]);
let total = 0

for (let i = 0; i <= count; i++) {
    total += iteration * i;
}

if (money >= total) console.log(0);
else console.log(Math.abs(total - money));