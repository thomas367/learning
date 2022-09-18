/**
 * Binary Search is a searching algorithm and is used to find the position of a specific value 
 * contained in a sorted array. The binary search algorithm works on the principle of divide 
 * and conquer and it is considered the best searching algorithm because it's faster to run.
 * 
 * How it works:
 * 
 * 1. Compare the target element with the pivot(middle) element of the array.
 * 
 * 2. If the target element is greater than the pivot element, then the search continues 
 * in the right half.
 * 
 * 3. Else if the target element is less than the pivot value, the search continues in the 
 * left half.
 * 
 * 4. This process is repeated until the pivot element is equal to the target element, 
 * or the target element is not in the array
 * 
 * 5. If the target element is found, its index is returned, else -1 is returned.
 * 
 * Example:
 * arr[] = 15, 23, 34, 49, 83 | Searching for:  23
 * 
 * Step 1 -> [15, 23, 34, 49, 89] ====> The pivot elememnt is 34 and is greater than the
 * element we search for so we divide and take the left part of the array.
 * 
 * Step 2 -> [15, 23] ===> Because we have two elements pivot element is the left one (15)
 * and is less than element we search for so we divide and take the right part of the array.
 * 
 * Step 3 -> [23] ===> The pivot element is 23 and is equal with the element we search and the 
 * algorithm stops.
 */

function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length -1;
    let pivot = Math.ceil((left + right) / 2);

    while (arr[pivot] !== value && left <= right) {
        if (arr[pivot] > value) {
            right = pivot -1;
        } else {
            left = pivot + 1;
        }

        pivot = Math.ceil((left + right) / 2);
    }

    return arr[pivot] === value ? pivot : -1;
}

console.log(binarySearch([5, 6, 10, 14, 18, 30, 37, 40, 44, 79, 84, 86, 98, 99], 10)); // 2
console.log(binarySearch([5, 10, 16, 34, 37, 40, 44, 64, 84, 86, 95, 98, 99], 95)); // 10
console.log(binarySearch([5, 6, 13, 14, 18, 64, 79, 84, 86, 95, 96, 98, 99], 100)); // -1
