/**
 * Function to find the maximum value in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} - The maximum value in the array or -Infinity if the array is empty.
 */
function findMax(arr) {
    return arr.reduce((max, value) => {
        if (value > max) max = value;
        return max;
    }, -Infinity);
}

// Sample usage
console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMax([-10, -20, -30])); // -10
console.log(findMax([10])); // 10
console.log(findMax([])); // -Infinity
