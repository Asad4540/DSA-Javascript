let input = "hello world from js";
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
    console.log(result);
}

VowelsRemover(input);