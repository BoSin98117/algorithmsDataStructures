// Given an array nums.We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4].

// Less efficient - 30.69%
// var runningSum = function (nums) {
//     const temp = [];
//     nums.map((val, i) => {
//         temp.push(i > 0 ? val + temp[i - 1] : val);
//     });
//     return temp;
// };


// More efficient - 94.36%
var runningSum = function (nums) {
    let val = 0
    let sum = nums.map(res => {
        return val = res + val
    })
    return sum
};

console.log(runningSum([1, 1, 1, 1, 1]));