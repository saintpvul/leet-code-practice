/*

You are given a string num, representing a large integer, and an integer k.

We call some integer wonderful if it is a permutation of the digits in num and is greater in value than num. There can be many wonderful integers. However, we only care about the smallest-valued ones.

For example, when num = "5489355142":
The 1st smallest wonderful integer is "5489355214".
The 2nd smallest wonderful integer is "5489355241".
The 3rd smallest wonderful integer is "5489355412".
The 4th smallest wonderful integer is "5489355421".
Return the minimum number of adjacent digit swaps that needs to be applied to num to reach the kth smallest wonderful integer.

The tests are generated in such a way that kth smallest wonderful integer exists.

*/

// solution

var getMinSwaps = function (num, k) {
    let copy = num;

    while (k > 0) {
        copy = nextPermutation(copy);
        k--;
    }

    let res = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === copy[i]) continue;

        let j = i + 1;
        for (; j < copy.length; j++) {
            if (num[i] === copy[j]) {
                break;
            }
        }

        res += j - i;
        copy =
            copy.substring(0, i) +
            copy[j] +
            copy.substring(i, j) +
            copy.substring(j + 1);
    }

    return res;
};

var nextPermutation = function (str) {
    const arr = str.split("");
    let i = arr.length - 2;

    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = arr.length - 1;
        while (arr[j] <= arr[i]) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    reverse(arr, i + 1);
    return arr.join("");
};

var reverse = function (arr, start) {
    let left = start;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
};
