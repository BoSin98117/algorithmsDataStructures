/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100] 

Constraints:
1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;

// BEGINNER APPROACH
// var rotate = function (nums, k) {
// for (let i = 0; i < k; i++) {
//     // UNSHIFT places the element in the first index
//     // POP removes the last element
//     nums.unshift(nums.pop());
//     console.log(`step ${i + 1}:`, nums);
// }
// return nums;
// };

// var rotate = function (nums, k) {
//     // SPLICE will save the last 3 elements in deletedElements
//     // nums.length=7, k=3 | 7-3=4 | This means that SPLICE will delete elements starting at INDEX 4 to the end
//     // deletedElements = [5,6,7]
//     let deletedElements = nums.splice(nums.length - k);
//     // Now add the deletedElements to the beginning of NUMS
//     for (let i = 0; i < deletedElements.length; i++) {
//         // Start at 0 (i), then do not delete anything (0), deletedElements[0]=5 | means add 5 to index 0 | nums.splice(0,0,5)
//         // Next step i will be 1, so we add deletedElements[1] which is 6 index[1] | nums.splice(1,0,6), next nums.splice(2,0,7)
//         nums.splice(i, 0, deletedElements[i]);
//         console.log(`step ${i + 1}:`, nums);
//     }
//     return nums;
// };

// console.log("Final output: ", rotate(nums, k));

// YouTube Explanation
// https://www.youtube.com/watch?v=wDac_xf03J4

// This code is accepted on LEETCODE
// Time complexity - O(n)
// Space complexity - O(1)
const revNums = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
var rotate = function (nums, k) {
    // In case k > nums.length, we mod (%) k 
    k = k % nums.length;
    nums.reverse();
    revNums(nums, 0, k - 1);
    revNums(nums, k, nums.length - 1);

    return nums;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log("Final output: ", rotate(nums, k));

// YouTube Explanation - https://www.youtube.com/watch?v=NNkSsmZYU7s