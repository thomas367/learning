/**
 * Bubble Sort is the sorting algorithm that works by repeatedly swapping the adjacent elements 
 * if they are in the wrong order. After each iteration or pass, the largest element reaches the 
 * end (in case of ascending order) or the smallest element reaches the end (in case of descending 
 * order). The pass through the list is repeated until the list is sorted. This algorithm is not 
 * suitable for large data sets as its average and worst-case complexity are of Ο(n^2) where n is 
 * the number of items
 * 
 * Example:
 * arr[] = 64 34 25 12 22 11 90
 * 
 * Iteration 1:
 * (64 34 25 12 22 11 90) -> (34 64 25 12 22 11 90), Here, algorithm compares the first two elements, and swaps since 64 > 34.
 * (34 64 25 12 22 11 90) -> (34 25 64 12 22 11 90), Swap since 64 > 25
 * (34 25 64 12 22 11 90) -> (34 25 12 64 22 11 90), Swap since 64 > 12
 * (34 25 12 64 22 11 90) -> (34 25 12 22 64 11 90), Swap since 64 > 22
 * (34 25 12 22 64 11 90) -> (34 25 12 22 11 64 90), Swap since 64 > 11
 * (34 25 12 22 11 64 90) -> (34 25 12 22 11 64 90), Now, since these elements are already in order (90 > 64), algorithm does not swap them.
 * 
 * Then loop again from the beginning until end
 */

function bubbleSort(arr) {
    let swap;

    for (let i = 0; i < arr.length; i++) {
        swap = false;
        
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }

        if (!swap) {
            break;
        }
    }

    return arr;
}

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(bubbleSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
