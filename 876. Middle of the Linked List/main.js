/*

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

*/

// solution

var middleNode = function (head) {
    let middle = head,
        last = head;

    while (last && last.next) {
        middle = middle.next;
        last = last.next.next;
    }
    return middle;
};
