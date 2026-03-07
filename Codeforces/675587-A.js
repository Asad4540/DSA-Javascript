"use strict";


const fs = require("fs");
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let t = parseInt(input[0]);
let lineIndex = 1;
let results = [];

for (let testCase = 0; testCase < t; testCase++) {
    const n = parseInt(input[lineIndex++]);
    const arr = input[lineIndex++].split(' ').map(Number);

    let totalXOR = 0;
    for (let i = 0; i < n; i++) {
        totalXOR ^= arr[i];
    }

    if (totalXOR === 0) {
        results.push("YES");
        continue;
    }

    if (n === 1) {
        results.push("YES");
        continue;
    }

    if (arr.includes(totalXOR)) {
        results.push("YES");
    } else {
        results.push("NO");
    }
}

console.log(results.join('\n'));