/*

In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.

*/

// solution

var pairSum = function(head) {
    let current = head
    let maxTwinSum = Number.MIN_SAFE_INTEGER

    const vals = []

    while(current !== null) {
        vals.push(current.val)
        current = current.next
    }

    const length = vals.length

    for(let i = 0; i < length / 2; i++) {
        const twinIdx = length - 1 - i;
        const twinSum = vals[i] + vals[twinIdx]

        maxTwinSum = Math.max(maxTwinSum, twinSum)
    }

    return maxTwinSum
};