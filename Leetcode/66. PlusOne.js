digits = [9,5];


var plusOne = function (digits) {
    result = digits.join('');
    let final = [];
    if (result >= 0) {
        result++;
        let str = result.toString();
        for (let i = 0; i < str.length; i++) {
            final.push(Number(str.charAt(i)));
        }
    }
    return final;

}
console.log(plusOne(digits));