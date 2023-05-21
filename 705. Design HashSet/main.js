/*

Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

*/

// solution

class MyHashSet {
    constructor() {
        this.hash = new Set();
    }

    add(key) {
        this.hash.add(key);
    }

    remove(key) {
        this.hash.delete(key);
    }

    contains(key) {
        return this.hash.has(key);
    }
}
