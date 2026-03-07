"use strict";

const fs = require("fs");
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let ptr = 0;
const next = () => input[ptr++];

const q = parseInt(next());
const ops = [];
for (let i = 0; i < q; i++) {
    ops.push(next().split(' ').map(Number));
}

const remap = new Map();
const result = [];

for (let i = q - 1; i >= 0; i--) {
    const op = ops[i];
    if (op[0] === 1) {
        const x = op[1];
        result.push(remap.get(x) ?? x);
    } else {
        const x = op[1], y = op[2];
        const dest = x + y;
        remap.set(x, remap.get(dest) ?? dest);
    }
}

result.reverse();
console.log(result.join(' '));