"use strict";

const fs = require("fs");
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let line = 0;
const t = parseInt(input[line++]);
const out = [];

for (let test = 0; test < t; test++) {
    const [n, q] = input[line++].split(' ').map(Number);
    const a = input[line++].split(' ').map(s => BigInt(s));
    const ops = [];
    const xSet = new Set();
    for (let i = 0; i < q; i++) {
        const parts = input[line++].split(' ');
        const idx = parseInt(parts[0]);
        const x = BigInt(parts[1]);
        const y = BigInt(parts[2]);
        ops.push([idx, x, y]);
        xSet.add(x);
    }

    const xToDivs = new Map();
    for (let x of xSet) {
        const num = Number(x);
        const divs = [];
        const limit = Math.floor(Math.sqrt(num));
        for (let d = 1; d <= limit; d++) {
            if (num % d === 0) {
                divs.push(BigInt(d));
                const other = num / d;
                if (other !== d) divs.push(BigInt(other));
            }
        }
        xToDivs.set(x, divs);
    }

    class Node {
        constructor(key) {
            this.key = key;
            this.prio = Math.random();
            this.left = null;
            this.right = null;
        }
    }

    function split(root, key) {
        if (!root) return [null, null];
        if (root.key < key) {
            const [l, r] = split(root.right, key);
            root.right = l;
            return [root, r];
        } else {
            const [l, r] = split(root.left, key);
            root.left = r;
            return [l, root];
        }
    }

    function merge(left, right) {
        if (!left) return right;
        if (!right) return left;
        if (left.prio > right.prio) {
            left.right = merge(left.right, right);
            return left;
        } else {
            right.left = merge(left, right.left);
            return right;
        }
    }

    function insert(root, node) {
        if (!root) return node;
        if (node.prio > root.prio) {
            const [l, r] = split(root, node.key);
            node.left = l;
            node.right = r;
            return node;
        } else if (node.key < root.key) {
            root.left = insert(root.left, node);
            return root;
        } else {
            root.right = insert(root.right, node);
            return root;
        }
    }

    const valTree = new Map();
    for (let i = 1; i <= n; i++) {
        const v = a[i - 1];
        let root = valTree.get(v) || null;
        root = insert(root, new Node(i));
        valTree.set(v, root);
    }

    for (let [idx, x, y] of ops) {
        if (y === 1n) continue;
        const divs = xToDivs.get(x);
        if (!divs) continue;
        const toMove = []; 

        for (let i = 0; i < divs.length; i++) {
            const d = divs[i];
            const root = valTree.get(d);
            if (!root) continue;
            const [left, right] = split(root, idx);
            valTree.set(d, left);
            if (!right) continue;

            const stack = [];
            let curr = right;
            while (curr || stack.length) {
                while (curr) {
                    stack.push(curr);
                    curr = curr.left;
                }
                curr = stack.pop();
                toMove.push(curr);
                curr = curr.right;
            }
        }

        for (let node of toMove) {
            const i = node.key;
            const oldVal = a[i - 1];
            const newVal = oldVal * y;
            a[i - 1] = newVal;
            node.left = null;
            node.right = null;
            let newRoot = valTree.get(newVal) || null;
            newRoot = insert(newRoot, node);
            valTree.set(newVal, newRoot);
        }
    }

    out.push(a.map(v => v.toString()).join(' '));
}

console.log(out.join('\n'));