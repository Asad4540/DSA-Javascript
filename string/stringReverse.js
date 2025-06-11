let input = "hello moto"

function string_rev(str) {
    result = str.split('').reverse().join('');
    console.log(result);

}
string_rev(input);

// ----------------------------------------------------------

let reversed = ""
for (i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
}

console.log(reversed);

// ----------------------------------------------------------

function str_rev(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
}

str_rev(input);



