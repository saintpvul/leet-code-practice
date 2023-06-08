/*

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

*/

// solution

//without queues
// class MyStack {
//     constructor() {
//         this.stack = [];
//     }

//     push(x) {
//         this.stack.unshift(x);
//     }

//     pop() {
//         return this.stack.shift();
//     }

//     top() {
//         return this.stack[0];
//     }

//     empty() {
//         return !this.stack.length;
//     }
// }

//using queues

class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        this.queue1.push(x);
    }

    pop() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        const popped = this.queue1.shift();

        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return popped;
    }

    top() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        const topElement = this.queue1[0];

        this.queue2.push(this.queue1.shift());

        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return topElement;
    }

    empty() {
        return this.queue1.length === 0 && this.queue2.length === 0;
    }
}
