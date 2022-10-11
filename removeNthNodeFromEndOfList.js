/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head == null || (head.next == null && n == 1)) return null;

    // Create 2 pointers pointing to the same node
    let first = new ListNode(-1);
    first.next = head;
    let second = first;

    // Move the second pointer to n
    for (let i = 0; i < n; i++) {
        // Return head if there is no second.next (N lies beyond the list)
        if (!second.next) return head;
        second = second.next;
    }
    // Now move both pointers until second points to null (reach the last node)
    // First will point to the node before the DELETED NODE
    while (second.next) {
        first = first.next;
        second = second.next;
    }
    if (first.next == head) {
        head = head.next;
        return head;
    }
    // Remove the nth node
    first.next = first.next.next;
    return head;
};

/*
Time Complexity = O(n) | We are only iterating over the list once
Space Complexity = O(1) | Constant Space

YouTube Explanation: https://www.youtube.com/watch?v=QfsxZQIU1xY
*/


/*
    let dummy = new ListNode(-1);
    dummy.next = head;
    let slow = new ListNode(dummy);
    let fast = new ListNode(dummy);
    while(fast.next !== null) {
        fast = fast.next;
        if(n-- <= 0) {
            slow = slow.next;
        }
    }
    slow.next = slow.next.next;
    return dummy.next;
*/

/*
    let dummyHead = new ListNode(-Infinity);    // -1 and -Infinity are the same
    dummyHead.next = head;
    let resultHead = dummyHead;
    let count = 0;
    let tail = head;

    while (count < n) {
        count++;
        tail = tail.next;
    }

    let removedNode = head;
    let prev = dummyHead;

    while (tail) {
        tail = tail.next;
        removedNode = removedNode.next;
        prev = prev.next;
    }
    prev.next = removedNode.next;
    return resultHead.next;
*/