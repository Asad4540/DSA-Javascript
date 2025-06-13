input = "Welcome to Web Development";

function longestWord(sentence) {
    let words = sentence.split(' ');
    return words.reduce((longest, word) =>
        word.length > longest.length ? word : longest
    );
}
console.log(longestWord(input));