/*

Write an asyncronous function that accepts a positive integer millis and sleeps for that many milliseconds. It can resolve any value.

*/

// solution

async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(millis), millis);
    });
}
