input = "A man, a plan, a canal: Panama"

function isPalindrome(s) {
    let i = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (i === i.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }

}

console.log(isPalindrome(input));

