/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.

*/

// solution

var removeNthFromEnd = function (head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let l = 0;
    let curr = head;

    while (curr) {
        l++;
        curr = curr.next;
    }

    let prev = dummyHead;
    curr = head;
    for (let i = 0; i < l - n; i++) {
        prev = curr;
        curr = curr.next;
    }

    prev.next = curr.next;

    return dummyHead.next;
};
