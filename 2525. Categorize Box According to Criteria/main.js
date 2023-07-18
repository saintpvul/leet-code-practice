/*

Given four integers length, width, height, and mass, representing the dimensions and mass of a box, respectively, return a string representing the category of the box.

The box is "Bulky" if:
Any of the dimensions of the box is greater or equal to 104.
Or, the volume of the box is greater or equal to 109.
If the mass of the box is greater or equal to 100, it is "Heavy".
If the box is both "Bulky" and "Heavy", then its category is "Both".
If the box is neither "Bulky" nor "Heavy", then its category is "Neither".
If the box is "Bulky" but not "Heavy", then its category is "Bulky".
If the box is "Heavy" but not "Bulky", then its category is "Heavy".
Note that the volume of the box is the product of its length, width and height.

*/

// solution

var categorizeBox = function (length, width, height, mass) {
    const isBulky = (l, w, h) => {
        if (
            l >= Math.pow(10, 4) ||
            w >= Math.pow(10, 4) ||
            h >= Math.pow(10, 4) ||
            l * w * h >= Math.pow(10, 9)
        ) {
            return true;
        } else {
            return false;
        }
    };
    const isHeavy = (m) => m >= 100;

    const bulky = isBulky(length, width, height);
    const heavy = isHeavy(mass);

    return bulky && heavy
        ? "Both"
        : !bulky && !heavy
        ? "Neither"
        : bulky
        ? "Bulky"
        : "Heavy";
};
