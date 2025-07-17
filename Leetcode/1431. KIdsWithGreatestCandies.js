candies = [4, 2, 1, 1, 2], extraCandies = 1;

var kidsWithCandies = function (candies, extraCandies) {
    let max = 0; let result = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};


console.log(kidsWithCandies(candies, extraCandies));