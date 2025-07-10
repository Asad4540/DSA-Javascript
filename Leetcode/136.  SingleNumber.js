nums = [1,1,2,2,3,4,4,5]

function Single(num) {
    result = [];
    input = num.sort((a, b) => a - b);
    for (i = 1; i < input.length-1; i++) {
        if (input[i-1] !== input[i] && input[i+1] !== input[i]  ) {
            result.push(input[i]);
        }
    }
    return result;
    // console.log(input);
}


console.log(Single(nums));