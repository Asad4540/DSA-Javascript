let words = "hello";
input = "lo";

function SubstringChecker(word, str) {
    let temp = "";
    counter = 0;
    for (i = str.length - 1; i >= 0; i--) {
        temp = word[word.length - str.length + i];
        if (temp !== str[i]) {
            counter++;
        }
    }
    if (counter > 0) {
       return false;
    }
    else {
        return true;

    }
}

console.log(SubstringChecker(words, input));