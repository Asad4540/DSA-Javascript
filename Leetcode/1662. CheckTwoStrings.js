word1 = ["abc", "d", "defg"];
word2 = ["abcd", "defg"]
word3 = ["abcd", "dfeg"]


var arrayStringsAreEqual = function (word1, word2) {
    return (word1.join('') == word2.join('') ? true : false);
};


console.log(arrayStringsAreEqual(word1, word2));
console.log(arrayStringsAreEqual(word3, word2));

