function SubstringChecker(word, str) {
    for (let i = 0; i <= word.length - str.length; i++) {
        let match = true;

        for (let j = 0; j < str.length; j++) {
            if (word[i + j] !== str[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return true;
        }
    }

    return false;
}

// Test cases
console.log(SubstringChecker("hello", "lo")); // true
console.log(SubstringChecker("hello", "hi")); // false
