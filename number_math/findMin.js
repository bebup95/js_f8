/**
 * Function to find the minimum value in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} - The minimum value in the array or Infinity if the array is empty.
 */
function findMin(arr) {
    return arr.reduce((min, value) => {
        if (min > value) min = value;
        return min;
    }, Infinity);
}

// Sample usage
console.log(findMin([1, 2, 3, 4, 5])); // 1
console.log(findMin([-10, -20, -30])); // -30
console.log(findMin([10])); // 10
console.log(findMin([])); // Infinity
