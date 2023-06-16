/*

A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

The area of the rectangular web page you designed must equal to the given target area.
The width W should not be larger than the length L, which means L >= W.
The difference between length L and width W should be as small as possible.
Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.

*/

// solution

// var constructRectangle = function (area) {
//     const sqrt = Math.sqrt(area);
//     let L = Math.floor(sqrt);
//     let W = Math.floor(sqrt);

//     while (L * W !== area) {
//         if (L * W > area) {
//             W--;
//         } else {
//             L++;
//         }
//     }

//     return [L, W];
// };

var constructRectangle = function (area) {
    let W = Math.ceil(Math.sqrt(area));

    while (area % W !== 0) {
        W--;
    }

    let L = area / W;

    return [Math.max(L, W), Math.min(L, W)];
};
