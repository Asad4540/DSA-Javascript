s = "leeetcode"

var makeFancyString = function (s) {
    result = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i - 1] && s[i] !== s[i + 1]) {
            result.push(s[i]);
        }
    }
    return result.join('');
};

console.log(makeFancyString(s))