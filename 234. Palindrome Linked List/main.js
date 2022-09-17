/*

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

*/

//solution

let palNum = [1, 2, 3, 3, 2, 1];
let num = [1, 3, 5, 2, 1];

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow = reverse(slow);
  fast = head;
  while (slow) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
};

function reverse(head) {
  let prev = null;
  while (head) {
    let nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }
  return prev;
}
console.log(isPalindrome(num));

console.log(isPalindrome(palNum));
