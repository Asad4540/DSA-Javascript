

var possibleStringCount = function (word) {
    n = word.length;
    counter = n;
    for (i = 1; i < n; i++) {
        if (word[i] !== word[i - 1]) {
            counter--;
        }
    }
    return counter;

};

console.log(possibleStringCount("abcd")+"\n" +possibleStringCount("abc"));