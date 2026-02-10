const fs = require("fs");
let set = new Set(fs.readFileSync(0, "utf-8").trim());

if(set.size % 2 === 0) console.log('CHAT WITH HER!');
else console.log("IGNORE HIM!");