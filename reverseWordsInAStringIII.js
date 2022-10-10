/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD" 

Constraints:
1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let word = s.split(" ");
    let reverseWord = word.map(elem => elem.split("").reverse().join(""));
    return reverseWord.join(" ");
};
let str = 'Hello how are you';
console.log(reverseWords(str));

/*
1. Create word variable to split the s string into an array separated by an empty space
2. Create reverseWord variable to loop through each word in the array. 
    a. Split each element in the array by "". 
    b. Reverse each element. 
    c. Join each element up by "". 
3. Join the reverseWord by an empty space. 

Time Complexity = O(n^2) - we are looping through each elem twice using the split() and join() methods.
Space Complexity = O(n) - we are creating the variables 'word, reverseWord' that are proportionate to whatever the input is. 

YouTube Explanation: https://www.youtube.com/watch?v=BV33ckgjOAc&t=74s
*/