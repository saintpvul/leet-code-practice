"use strict";

/*

!TASK

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

// SOLUTION

const addTwoNumbers = function (l1, l2) {
  let firstDigit = l1.reverse().join("");
  let secondDigit = l2.reverse().join("");
  let result = +firstDigit + +secondDigit;
  let resultToStr = result.toString();
  let changeResult = resultToStr.split("").map(Number).reverse();
  console.log(changeResult);
};

addTwoNumbers([1, 2], [1, 2]);

// can't pass the tests. don't know why. found some solutions using jquery. i'll be back soon, can't solve this problem yet
