/*

Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.

There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

Implement the Solution class:

Solution() Initializes the object of the system.
String encode(String longUrl) Returns a tiny URL for the given longUrl.
String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.

*/

// solution

let codeDB = new Map(),
    urlDB = new Map();
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const getCode = () => {
    let key = "http://tinyurl.com/";
    for (let i = 0; i < 6; i++) {
        key += Math.floor(Math.random() * chars.length);
    }
    return key;
};

var encode = function (longUrl) {
    if (urlDB.has(longUrl)) return urlDB.get(longUrl);
    let code = getCode();
    while (codeDB.has(code)) code = getCode();
    codeDB.set(code, longUrl);
    urlDB.set(longUrl, code);
    return code;
};

var decode = function (shortUrl) {
    return codeDB.get(shortUrl);
};
