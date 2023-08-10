/*

Design a stack that supports increment operations on its elements.

Implement the CustomStack class:

CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack.
void push(int x) Adds x to the top of the stack if the stack has not reached the maxSize.
int pop() Pops and returns the top of the stack or -1 if the stack is empty.
void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, increment all the elements in the stack.

*/

// solution

class CustomStack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stack = [];
    }

    push(x) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x);
        }
    }

    pop() {
        return this.stack.pop() || -1;
    }

    increment(k, val) {
        const count = Math.min(k, this.stack.length);
        for (let i = 0; i < count; i++) {
            this.stack[i] += val;
        }
    }
}
