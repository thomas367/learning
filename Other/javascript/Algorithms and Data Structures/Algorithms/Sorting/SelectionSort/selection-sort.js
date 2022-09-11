/**
 * Selection sort is similar with bubble sort in some ways. It loops a list of data keeps the i 
 * as the minimum value and iterates the rest of the list. Check every time if if the value you are looking for
 * in the second loop is less than the one that is currently the minimum and if it is then replace it. 
 * When the second loop finished then swap the outer loop pointer with the one in the minimum value.
 * That way at the end of the loop the first item in the list will always be sorerted.
 
 * Example:
 * arr[] = 23 78 45 8 32 46
 * 
 * Pass 1
 * Find the minimum element in arr[0...5] and place it at beginning
 * 8 78 45 23 32 46
 * 
 * Pass 2
 * Find the minimum element in arr[1...5] and place it at beginning of arr[1...5]
 * 8 23 45 78 32 46
 * 
 * Pass 3
 * Find the minimum element in arr[2...5] and place it at beginning of arr[2...5]
 * 8 23 32 78 45 46
 * 
 * Pass 4
 * Find the minimum element in arr[3...5] and place it at beginning of arr[3...5]
 * 8 23 32 45 78 46
 * 
 * Pass 5
 * Find the minimum element in arr[4...5] and place it at beginning of arr[4...5]
 * 8 23 32 45 46 78
 */

function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
}

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(selectionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
