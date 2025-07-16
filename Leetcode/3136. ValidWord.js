input = "$Ya$";

var isValid = function (word) {
    let vowels = "aeiouAEIOU", hasVowel = false; hasConsonant = false;
    let consonants = "bcdfghjklmnpqrstvqxyzBCDFGHJKLMNPQRSTVWXYZ"
    if (word.length < 3) return false;
    for (let i = 0; i < word.length; i++) {
        let ch = word[i];
        if (!/[a-zA-Z0-9]/.test(ch)) return false;
        if (vowels.includes(ch)) hasVowel = true;
        else if (consonants.includes(ch)) hasConsonant = true;
    }
    if (hasVowel && hasConsonant) return true;
    return false;
};


console.log(isValid(input));