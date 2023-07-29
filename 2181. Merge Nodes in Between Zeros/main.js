/*

You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.

*/

// solution

var mergeNodes = function (head) {
    const dummyHead = new ListNode();

    let curr = dummyHead;
    let sum = 0;

    while (head) {
        if (head.val === 0 && sum !== 0) {
            curr.next = new ListNode(sum);
            curr = curr.next;
            sum = 0;
        }
        sum += head.val;
        head = head.next;
    }
    return dummyHead.next;
};
