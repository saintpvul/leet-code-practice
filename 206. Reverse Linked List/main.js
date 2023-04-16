/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

*/

// solution

var reverseList = function (head) {
    let reversedHead = null;
    while (head !== null) {
        let next = head.next;
        head.next = reversedHead;
        reversedHead = head;
        head = next;
    }
    return reversedHead;
};
