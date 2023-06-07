/*

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn. The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called.

*/

// solution

var cancellable = function (fn, args, t) {
    const interval = setInterval(() => {
        fn(...args);
    }, t);

    const cancel = () => {
        clearInterval(interval);
    };

    fn(...args);

    return cancel;
};
