/*

Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

*/

// solution

var validateStackSequences = function (pushed, popped) {
    const stack = [];
    let popIndex = 0;

    for (const num of pushed) {
        stack.push(num);

        while (
            stack.length > 0 &&
            stack[stack.length - 1] === popped[popIndex]
        ) {
            stack.pop();
            popIndex++;
        }
    }

    return stack.length === 0;
};
