/*

Write a function that accepts an asyncronous function fn and a time t in milliseconds. It should return a new time limited version of the input function.

A time limited function is a function that is identical to the original unless it takes longer than t milliseconds to fullfill. In that case, it will reject with "Time Limit Exceeded".  Note that it should reject with a string, not an Error.

*/

// solution
