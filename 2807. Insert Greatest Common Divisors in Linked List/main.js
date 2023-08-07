/*

Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

*/

// solution

var insertGreatestCommonDivisors = function (head) {
    const gcd = (val1, val2) => {
        while (val2 !== 0) {
            const temp = val2;
            val2 = val1 % val2;
            val1 = temp;
        }
        return val1;
    };

    let current = head;
    while (current && current.next) {
        const gcdVal = gcd(current.val, current.next.val);
        const newNode = new ListNode(gcdVal, current.next);
        current.next = newNode;

        current = newNode.next;
    }

    return head;
};
