let nums = [1,3,2,2,5,2,3,7];

var findLHS = function (nums) {
    nums.sort((a, b) => a - b);
    let j = 0, maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] - nums[j] > 1) j++;
        if (nums[i] - nums[j] === 1) {
            maxLength = Math.max(maxLength, i - j + 1);
        }
    }
    return maxLength;
};

console.log(findLHS(nums));