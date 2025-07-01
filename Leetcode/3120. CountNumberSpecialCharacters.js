let word = "aaAbcBC";

var numberOfSpecialChar = function (word) {
    let lowercaseSet = new Set();
    let uppercaseSet = new Set();

    for (let char of word) {
        if (char >= 'a' && char <= 'z') {
            lowercaseSet.add(char);
        } else if (char >= 'A' && char <= 'Z') {
            uppercaseSet.add(char);
        }
    }

    let counter = 0;
    for (let ch of lowercaseSet) {
        if (uppercaseSet.has(ch.toUpperCase())) {
            counter++;
        }
    }

    return counter;
};



console.log(numberOfSpecialChar(word));