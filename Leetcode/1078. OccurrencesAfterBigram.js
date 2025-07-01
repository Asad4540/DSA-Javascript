let text = "ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk", first = "lnlqhmaohv", second = "ypkk";

var findOcurrences = function (text, first, second) {
    let input = text.split(' ');

    let result = [];
    for (let i = 0; i < input.length; i++) {

        if (input[i] == first && input[i + 1] == second) {
            if (input[i + 2] == null) {
                break;
            }
            else {
                result.push((input[i + 2]));
            }
        }
    }
    return result;
};

console.log(findOcurrences(text, first, second))