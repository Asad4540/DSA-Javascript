input = "hello"
input2 = "madam"

function palindrome_check(input) {
    palindrome = input.split('').reverse().join('');
    if (input == palindrome) {
        console.log("true");
    }
    else {
        console.log('false');
    }

}

(palindrome_check(input));
(palindrome_check(input2));




