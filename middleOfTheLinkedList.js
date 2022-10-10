/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one. 

Constraints:
The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }
    return slowPointer;
};

/*
Create 2 pointers: fast, slow.
Fast moves 2 steps and slow moves 1 step.
When 'fast' reaches the end of the list, 'slow' will be at the middle.
Return 'slow' to get the middle of the list.

Time Complexity = O(n) - n is the length of the linked list
Space Complexity = O(1)

YouTube Explanation: https://www.youtube.com/watch?v=hJT189N6lqU
*/