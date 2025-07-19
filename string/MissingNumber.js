input = [2, 5, 6, 7, 4, 1]

function MissingNumber(num) {
    temp = num.sort();
    for (let i = temp[0]; i < temp.length; i++) {
        if (!num.includes(i)) {
            console.log("missing no problem is done");
            return i;
        }
    }
}

console.log(MissingNumber(input));