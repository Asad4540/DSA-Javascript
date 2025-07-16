let s = "2-5g-3-J", k = 2

var licenseKeyFormatting = function (s, k) {
    let temp = s.replaceAll("-", "").toUpperCase('').split('');
    for (i = temp.length - 1 - k; i >= 0; i -= k) {
        temp[i] = temp[i] + '-';
    }
    return result = temp.join('')
};

console.log(licenseKeyFormatting(s, k));
