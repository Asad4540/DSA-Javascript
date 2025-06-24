nums = [3, 4, 9, 1, 3, 9, 5];
key = 9;
k = 1;

function FindKDistance(nums, key, k) {
    let index = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (nums[j] === key && Math.abs(i - j) <= k) {
                index.push(i);
                break;
            }
        }
    }
    return index;
}

console.log(FindKDistance(nums, key, k));
