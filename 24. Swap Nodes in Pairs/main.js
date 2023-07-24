/*

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

*/

// solution

var swapPairs = function (head) {
    if (!head || !head.next) {
        return head;
    }

    const temp = head.next;
    head.next = swapPairs(head.next.next);
    temp.next = head;

    return temp;
};
