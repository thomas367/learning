/**
 * The Naive String Search algorithm search a pattern of string inside another one. 
 */

function naiveStringSearch(str, pattern) {
    let count = 0;
    
    for (let i = 0; i <= str.length - pattern.length; i++) {
        for (let j =0; j < pattern.length; j++) {
            if (str[i + j] !== pattern[j]) {
                break;
            }

            if (j === pattern.length -1) {
                count++;
            }
        }
    }

    return count;
}

console.log(naiveStringSearch('hoffjoklockffoklock', 'lock')); // 2
