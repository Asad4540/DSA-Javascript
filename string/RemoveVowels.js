let input = "hello world from";
let vowels = ["a", "e", "i", "o", "u"];

function VowelsRemover(str) {
    temp = "";
    result = "";
    for (let i = 0; i < str.length; i++) {
        temp = str[i];
        if (!vowels.includes(temp)) {
            result += temp;
        }
    }
    return result;
}

console.log(VowelsRemover(input));