nums = [1, 4, 2, 4, 1]

function Single(num) {
    // input = num.sort((a, b) => a - b);
    // for (i = 0; i < input.length; i++) {
    //     if (input[i] !== input[i + 1] && input[i] !== input[i - 1]) {
    //         return (input[i]);
    //     }
    // }

    counter = 0;
    for (let i = 0; i < num.length; i++) {
        counter = counter ^ num[i];
    }
    return counter
}

console.log(Single(nums));
