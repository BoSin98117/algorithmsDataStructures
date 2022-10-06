// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.No two characters may map to the same character, but a character may map to itself.


// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true




// Solve this using a hashmap.  Hashmap lookup = O(1) - very quick.
// https://www.youtube.com/watch?v=gQfroVMJ_M0
var isIsomorphic = function (s, t) {
    let obj1 = {}
    let obj2 = {}

    for (let i = 0; i < s.length; i++) {
        if (obj1[s[i]] !== obj2[t[i]]) {
            return false;
        } else {
            obj1[s[i]] = i
            obj2[t[i]] = i
        }
    }
    return true;
}

console.log(isIsomorphic('paper', 'title'));
