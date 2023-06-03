"use strict";

/*

!TASK

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

// SOLUTION

var addTwoNumbers = function (l1, l2) {
    return addLists(l1, l2, 0);
};

function addLists(l1, l2, carry) {
    if (l1 === null && l2 === null && carry === 0) {
        return null;
    }

    const val1 = l1 !== null ? l1.val : 0;
    const val2 = l2 !== null ? l2.val : 0;
    const sum = val1 + val2 + carry;

    const newNode = new ListNode(sum % 10);
    const nextCarry = Math.floor(sum / 10);

    const next1 = l1 !== null ? l1.next : null;
    const next2 = l2 !== null ? l2.next : null;

    newNode.next = addLists(next1, next2, nextCarry);

    return newNode;
}
