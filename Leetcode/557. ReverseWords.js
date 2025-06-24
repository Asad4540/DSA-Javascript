input = "Hello world";

function reverseWords(str) {
    splittedArray = str.split(' ');
    ReversedArray = splittedArray.map(elem => elem.split('').reverse('').join(''));
    return ReversedArray.join(" ");

}

console.log(reverseWords(input));