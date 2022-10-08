/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory. 

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:
1 <= s.length <= 105
s[i] is a printable ascii character.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// Time Complexity - O(n) | Space Complexity - O(1)
// create 2 pointers (start, end) and swap the characters at start and end then start++ and end-- (move the pointers towards each other)
var reverseString = function (s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }

    return s;
};

let str = 'hello';
console.log(reverseString(str));