digits = [9, 9];

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if (i == 0) {
            digits.unshift(1);
            return digits;
        }
    }
};

console.log(plusOne(digits));



// var plusOne = function (digits) {
//     result = digits.join('');
//     let final = [];
//     if (result >= 0) {
//         result++;
//         let str = result.toString();
//         for (let i = 0; i < str.length; i++) {
//             final.push(Number(str.charAt(i)));
//         }
//     }
//     return final;

// }