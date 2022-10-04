// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.



// Example 1:
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11


var pivotIndex = function (nums) {
    // totalSum is the sum of the values in the array
    let totalSum = 0, leftSum = 0;
    // loop through the array and add the values in each element
    nums.forEach((e) => {
        totalSum += e;
    });
    for (let i = 0; i < nums.length; i++) {
        if (totalSum - leftSum - nums[i] === leftSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};

console.log(pivotIndex([1, 7, 4, 6, 5, 7]));

// [1, 7, 3, 6, 5, 6]
// leftIndex = 0 + 1 + 7 + 3
// Each iteration:
// 28 - 0 - 1 = 0 - false
// 28 - 1 - 7 = 1 - false
// 28 - 8 - 3 = 8 - false
// 28 - 11 - 6 = 11 - true





// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0







