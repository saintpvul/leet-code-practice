/*

There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

Implement the OrderedStream class:

OrderedStream(int n) Constructs the stream to take n values.
String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.

*/

// solution

class OrderedStream {
    constructor(n) {
        this.n = n;
        this.ptr = 0;
        this.buffer = new Array(n + 1).fill(null);
    }

    insert(idKey, value) {
        this.buffer[idKey] = value;
        const result = [];
        while (this.ptr < this.n && this.buffer[this.ptr + 1] !== null) {
            result.push(this.buffer[++this.ptr]);
        }
        return result;
    }
}
