/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */

/*
// Hashmap approach - Optimal
// Time Complexity = O(n)
// Space Complexity = O(1)
// YouTube Explanaton: https://www.youtube.com/watch?v=6vVrHdcodXM
// https://www.youtube.com/watch?v=3IETreEybaA

var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let begin = 0;
    let map = {};

    for (let end = 0; end < s.length; end++) {
        // If map[s[end]] is undefined, we have seen the character before
        if (map[s[end]] !== undefined && map[s[end]] >= begin) {
            // Update BEGIN to exclude the repeating character if there is any
            begin = map[s[end]] + 1;
        }
        map[s[end]] = end;
        console.log(s[end], ":", map);
        max = Math.max(max, end - begin + 1);
    }
    return max;
};
let str = 'abcabcbb';
console.log(lengthOfLongestSubstring(str));
*/

/////////////////////////////////////////////////////////////////////////////////

// SET SOLUTION
// Sliding Window method used
// Time Complexity = O(n)
// Space Complexity = O(1)
// YouTube Explanaton: https://www.youtube.com/watch?v=6vVrHdcodXM
// https://www.youtube.com/watch?v=3IETreEybaA
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let begin = 0;
    let set = new Set();

    for (let end = 0; end < s.length; end++) {
        while (set.has(s[end])) {
            set.delete(s[begin]);
            begin = begin + 1;
        }
        set.add(s[end]);
        // console.log(s[end], ":", set);
        max = Math.max(max, end - begin + 1);
        console.log(s.substring(begin, end + 1), ":", set);
    }
    return max;
};
let str = 'abcabcbb';
console.log(lengthOfLongestSubstring(str))


/////////////////////////////////////////////////////////////////////////////////

/*
// Brute force
// Time Complexity O(n^3) - 3 for loops
// Space Complexity O(n) - we are allocating extra space
const isUnique = (s) => {
    // Use SET to keep track of the characters in the string
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        // If set.has(s[i], we know that there are repeating characters so we return false)
        if (set.has(s[i])) {
            return false;
        }
        set.add(s[i]);
    }
    // Return true if there are no repeating characters
    return true;
}
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    // Double for loop will generate all the possible substrings
    for (let begin = 0; begin < s.length; begin++) {
        for (let end = begin; end < s.length; end++) {
            const substring = s.substring(begin, end + 1);
            console.log(substring);
            if (isUnique(substring)) {
                // Max will be updated only if the substring.length is GREATER THAN the current max value.
                max = Math.max(max, substring.length);
            }
        }
    }
    return max;
};
let str = 'abcabcbb';
console.log(lengthOfLongestSubstring(str));
*/