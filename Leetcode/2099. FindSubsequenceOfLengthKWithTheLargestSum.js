let nums = [2,1,3,3];let k = 2;

function maxSubsequence(nums, k) {
    // Step 1: Pair each number with its index
    let numsWithIndices = nums.map((num, index) => [num, index]);

    // Step 2: Sort by value descending
    numsWithIndices.sort((a, b) => b[0] - a[0]);

    // Step 3: Take top k and sort by original index
    let topK = numsWithIndices.slice(0, k).sort((a, b) => a[1] - b[1]);

    // Step 4: Extract the values
    return topK.map(pair => pair[0]);
}

console.log(maxSubsequence(nums, k));
