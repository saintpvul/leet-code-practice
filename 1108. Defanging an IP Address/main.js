/*

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

*/

// solution

var defangIPaddr = function (address) {
    return address.replace(/[\.]/gi, "[.]");
};
