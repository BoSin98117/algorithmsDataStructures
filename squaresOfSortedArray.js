/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. 

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121] 

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// nums is NON-DECREASING | nums[-4, 2, 6, 10]
var sortedSquares = function (nums) {
    const result = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length - 1;
    let resultIdx = nums.length - 1;

    while (left <= right) {
        let leftVal = Math.pow(nums[left], 2);
        let rightVal = Math.pow(nums[right], 2);

        if (leftVal < rightVal) {
            result[resultIdx] = rightVal;
            right--;
        } else {
            result[resultIdx] = leftVal;
            left++;
        }
        resultIdx--;
    }
    return result;
};

//
// Space Complexity - O(n)
// Time Complexity - O(n)

// YouTube Explanation
// https://www.youtube.com/watch?v=mwDKqAVVr6c