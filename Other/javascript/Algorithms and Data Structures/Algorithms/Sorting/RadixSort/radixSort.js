/**
 * Implementation of the radix sort algorithm. This algorithm uses a bucket method in order 
 * to order the data and re assembles the array the same way the buckets stored them.
 * 
 * Example:
 * arr[] = 101, 45, 543, 233, 212, 654, 833
 * 
 * First of all we create a list of 9 buckets from 0 to 9 and we find the biggest 
 * value in our list.
 * 
 * -----------------------------------
 * 
 * With the help of algorithm we will sort the unit digit of the input array i.e. least significant digit
 * 
 * | 0 | ->
 * | 1 | -> 101
 * | 2 | -> 212
 * | 3 | -> 543, 233, 833
 * | 4 | -> 654
 * | 5 | -> 045
 * | 6 | -> 
 * | 7 | -> 
 * | 8 | -> 
 * | 9 | -> 
 * 
 * So after first pass array will become
 * 
 * [101, 212, 543, 233, 833, 045]
 * 
 * ------------------------------------
 * Now we will sort the tenth digit place of the input array
 * 
 * | 0 | -> 101
 * | 1 | -> 212
 * | 2 | -> 
 * | 3 | -> 233, 833
 * | 4 | -> 543, 045
 * | 5 | -> 654
 * | 6 | -> 
 * | 7 | -> 
 * | 8 | -> 
 * | 9 | -> 
 * 
 * So after the second pass array will look like
 * 
 * [101, 212, 233, 833, 543, 045, 654]
 * 
 * ------------------------------------
 * 
 * Now we will sort the 100th digit place of the input array i.e. most significant place
 * 
 * | 0 | -> 045
 * | 1 | -> 101
 * | 2 | -> 212, 233
 * | 3 | -> 
 * | 4 | -> 543
 * | 5 | -> 654
 * | 6 | -> 
 * | 7 | -> 
 * | 8 | -> 833
 * | 9 | -> 
 * 
 * So after the third pass array will look like
 * 
 * [045, 101, 212, 233, 543, 654, 833]
 */

function getDigit(num, i) {
    let result = Math.abs(num);

    for (let count = i; count > 0; count--) {
        result = Math.floor(result / 10);
    }

    return result % 10;
}

function digitCount(num) {
    return Math.abs(num).toString().length;
}

function mostDigits(nums) {
    let max = 0;

    for (const num of nums) {
        max = Math.max(max, digitCount(num));
    }

    return max;
}

function radixSort(nums) {
    const end = mostDigits(nums);

    for (let i = 0; i < end; i++) {
        const helperArr = Array.from({ length: 10 }, () => []);

        for (const num of nums) {
            helperArr[getDigit(num, i)].push(num);
        }

        nums = [].concat(...helperArr);
    }

    return nums;
}
