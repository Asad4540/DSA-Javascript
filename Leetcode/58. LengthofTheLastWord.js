s = "   fly me   to   the moon  "

var lengthofLastWord = function (s) {
    result = []
    let a = s.trim('').split(' ');
    result.push(a[a.length - 1])
    let final = result.join('')
    let count = final.length;
    return count;
}

console.log(lengthofLastWord(s));