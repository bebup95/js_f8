/**
 * Add a custom map2 method to Array.prototype
 * This method mimics the behavior of Array.prototype.map
 * @param {function} callback - The function to execute for each element in the array.
 * @param {any} [thisArg] - Optional. Value to use as this when executing callback.
 * @returns {Array} - A new array with each element being the result of the callback function.
 */
Array.prototype.map2 = function (callback, thisArg) {
    const length = this.length;
    const newArr = [];
    for (let i = 0; i < length; i++) {
        if (i in this) {
            newArr.push(callback.call(thisArg, this[i], i, this));
        } else {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

// Sample usage

// Sample 1
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.map2((value) => value * 2);

console.log(result1); // [2, 4, 6, 8, 10]
console.log(result1.length); // 5

// Sample 2
const arr2 = [1, , , , 5]; // Có phần tử trống
const result2 = arr2.map2((value) => value * 2);

console.log(result2); // [2, empty, empty, empty, 10]
console.log(result2.length); // 5
