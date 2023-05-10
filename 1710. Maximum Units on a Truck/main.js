/*

You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

numberOfBoxesi is the number of boxes of type i.
numberOfUnitsPerBoxi is the number of units in each box of the type i.
You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.

*/

// solution

// var maximumUnits = function (boxTypes, truckSize) {
//     boxTypes.sort((a, b) => b[1] - a[1]);
//     console.log(boxTypes);
//     let max = 0;
//     outerloop: for (let i = 0; i < boxTypes.length; i++) {
//         for (let j = boxTypes[i][0]; j > 0; j--) {
//             if (truckSize === 0) {
//                 break outerloop;
//             }
//             max += boxTypes[i][1];
//             truckSize--;
//         }
//     }
//     return max;
// };

var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    for (let box of boxTypes) {
        if (truckSize) {
            if (box[0] <= truckSize) {
                res += box[0] * box[1];
                truckSize -= box[0];
            } else {
                res += truckSize * box[1];
                truckSize = 0;
            }
        }
    }
    return res;
};
