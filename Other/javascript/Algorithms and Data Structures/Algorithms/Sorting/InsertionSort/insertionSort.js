/**
 * Insertion sort is a simple sorting algorithm that works similarly to the way you sort 
 * playing cards in your hands. The array is virtually split into a sorted and an unsorted 
 * part. Values from the unsorted part are picked and placed at the correct position in 
 * the sorted part. Insertion sort is fast and best suitable either when the problem size 
 * is small (because it has low overhead) or when the data is nearly sorted (because it 
 * is adaptive).
 * 
 * Example: 
 * arr[] = 9, 6, 5, 0, 8, 2, 7, 1, 3, 4
 * i --> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
 * 
 * Let us loop for i = 1 (second element of the array) to 9 (last element of the array)
 * 
 * i=1. Since 6 is smaller than 9, move 9 and insert 6 before 9
 * 6, 9, 5, 0, 8, 2, 7, 1, 3, 4
 * 
 * i=2. Since 5 is smaller than 6 and 9, move 5 before 6 and 9
 * 5, 6, 9, 0, 8, 2, 7, 1, 3, 4
 * 
 * i=3. Since 0 is smaller than 5,6 and 9, move 0 before 5,6,9
 * 0, 5, 6, 9, 8, 2, 7, 1, 3, 4
 * 
 * i=4. Since 8 is smaller than 9, move 8 before 9
 * 0, 5, 6, 8, 9, 2, 7, 1, 3, 4
 * 
 * i=5. Since 2 is smaller than 5,6,8 and 9, move 2 before 5,6,8,9
 * 0, 2, 5, 6, 8, 9, 7, 1, 3, 4
 * 
 * i=6. 0, 2, 5, 6, 7, 8, 9, 1, 3, 4
 * 
 * i=7. 0, 1, 2, 5, 6, 7, 8, 9, 3, 4
 * 
 * i=8. 0, 1, 2, 3, 5, 6, 7, 8, 9, 4
 * 
 * i=9. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }

    return arr;
}

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(insertionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
