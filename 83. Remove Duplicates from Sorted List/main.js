/*

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

*/

// solution

var deleteDuplicates = function (head) {
    let current = head;

    while (current != null && current.next != null) {
        current.val === current.next.val
            ? (current.next = current.next.next)
            : (current = current.next);
    }
    return head;
};
