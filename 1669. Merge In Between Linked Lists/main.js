/*
 
You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

The blue edges and nodes in the following figure indicate the result:


Build the result list and return its head.

*/

// solution

var mergeInBetween = function (list1, a, b, list2) {
    let dummy = new ListNode(0);
    dummy.next = list1;
    let nodeA = dummy;

    for (let i = 0; i < a; i++) {
        nodeA = nodeA.next;
    }

    let nodeB = nodeA.next;
    for (let i = a; i <= b; i++) {
        nodeB = nodeB.next;
    }

    nodeA.next = list2;

    let current = list2;

    while (current.next !== null) {
        current = current.next;
    }

    current.next = nodeB;

    return dummy.next;
};
