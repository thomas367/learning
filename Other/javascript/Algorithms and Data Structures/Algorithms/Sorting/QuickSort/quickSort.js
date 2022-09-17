/**
 * Quick Sort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions 
 * the given array around the picked pivot such that all the smaller elements are to the left 
 * of the pivot and all the greater elements are to the right of the pivot.
 */

function pivot(arr, start = 0, end = arr.length -1) {
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[start] > arr[i]) {
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }

    if (pivotIndex !== start) {
        [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];
    }

    return pivotIndex;
}

function quickSort(arr, start = 0, end = arr.length -1) {
    if (start < end) {
        const pivotIndex = pivot(arr, start, end);

        quickSort(arr, start, pivotIndex -1);
        quickSort(arr, pivotIndex + 1, end);
    }

    return arr;
}

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
