input = "Hello World";

function ReverseWords(str) {
    
    let SplittedArray = str.split(' ');
    let ReversedArray = SplittedArray.map(elem => elem.split('').reverse().join(''));
    console.log(ReversedArray.join(" "));
}

ReverseWords(input);

