/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0. 

Example 1:
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0 

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

// YouTube Explanation: https://leetcode.com/problems/max-area-of-island/submissions/

var maxAreaOfIsland = function (grid) {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(grid, i, j));
            }
        }
    }

    function dfs(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
            return 0;
        }
        grid[i][j] = 0;
        let count = 1;
        count += dfs(grid, i + 1, j);
        count += dfs(grid, i - 1, j);
        count += dfs(grid, i, j + 1);
        count += dfs(grid, i, j - 1);
        return count;
    }

    return max;
};











/*
const getAdjNeighbors = (i, j, grid, visited) => {
    const adjNeighbors = [];

    if (i > 0 && !visited[i - 1][j]) {
        adjNeighbors.push([i - 1, j]);
    }
    if (i < grid.length - 1 && !visited[i + 1][j]) {
        adjNeighbors.push([i + 1, j]);
    }
    if (j > 0 && !visited[i][j - 1]) {
        adjNeighbors.push([i, j - 1]);
    }
    if (j < grid[0].length - 1 && !visited[i][j + 1]) {
        adjNeighbors.push([i, j + 1]);
    }

    return adjNeighbors;
}

const dFS = (i, j, grid, visited) => {
    // Depth-First Search always use STACK
    const stack = [[i, j]];
    let islandSize = 0;

    while (stack.length) {
        let curNode = stack.pop();

        let [i, j] = curNode;

        if (visited[i][j]) {
            continue;
            visited[i][j] = true;
        }

        if (grid[i][j] === '0') {
            continue;
        }
        islandSize++;

        let adjNeighbors = getAdjNeighbors(i, j, grid, visited);

        stack.push(...adjNeighbors);
    }

    return islandSize > 0 ? true : false;
}

var maxAreaOfIsland = function (grid) {
    // Create a copy of the grid where we map each row (grid.map(row =>)) and also map each cell and make it false (row.map(cell => false)).  Once we have traversed a cell, we will make it true so that we do not move to that cell again.
    const visited = grid.map(row => row.map(cell => false));

    // Count the number of times we see an island
    let islandCount = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (dFS(i, j, grid, visited)) {
                islandCount++;
            }
        }
    }

    return islandCount;
};
*/
