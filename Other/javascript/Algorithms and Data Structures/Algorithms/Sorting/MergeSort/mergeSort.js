/**
 * MergeSort is a Divide and Conquer algorith. It continuously splits the array in half until 
 * it cannot be further divided. This means that if the array becomes empty or has only one 
 * element left, the dividing will stop, i.e. it is the base case to stop the recursion. If 
 * the array has multiple elements, split the array into halves and recursively invoke the 
 * merge sort on each of the halves. Finally, when both halves are sorted, the merge operation 
 * is applied. Merge operation is the process of taking two smaller sorted arrays and combining 
 * them to eventually make a larger one.
 */

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArr = [];
    let leftCount = 0;
    let rightCount = 0;

    while (leftCount < left.length && rightCount < right.length) {
        if (left[leftCount] < right[rightCount]) {
            resultArr.push(left[leftCount]);
            leftCount++;
        } else {
            resultArr.push(right[rightCount]);
            rightCount++;
        }
    }

    while (leftCount < left.length) {
        resultArr.push(left[leftCount]);
        leftCount++;
    }

    while (rightCount <right.length) {
        resultArr.push(right[rightCount]);
        rightCount++;
    }

    return resultArr;
}

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
