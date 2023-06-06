/*

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

*/

//  solution

var removeElements = function (head, val) {
    let newHead = new ListNode(-1);
    let current = newHead;

    while (head) {
        if (head.val !== val) {
            current.next = new ListNode(head.val);
            current = current.next;
        }
        head = head.next;
    }

    return newHead.next;
};
