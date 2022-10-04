// Given an array of integers arr and an integer k.Find the least number of unique integers after removing exactly k elements.

// Example 1:
// Input: arr = [5, 5, 4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.



var findLeastNumOfUniqueInts = function (arr, k) {
    let map = new Map();

    // create a map for counts.
    for (let e of arr) {
        map.set(e, (map.has(e) ? map.get(e) : 0) + 1);
    }

    // sort the values in the map in ascending order.
    let vals = [...map.values()].sort((a, b) => a - b);

    for (let i = 0; i < vals.length; i++) {
        while (k && vals[i]) {
            --k;
            --vals[i];
        }


        if (k == 0) break;
    }
    return vals.filter((v) => v > 0).length;
};

console.log(findLeastNumOfUniqueInts([1, 1, 3, 6, 3, 3, 8, 8, 8, 6, 7, 6, 2], 2));