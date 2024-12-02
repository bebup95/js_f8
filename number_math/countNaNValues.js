/**
 * Counts the number of NaN values in an array or object.
 * @param {*} input - The array or object to be checked.
 * @returns {number|string} - Returns the count of NaN values or "Invalid input" if the input is not valid.
 */
function countNaNValues(input) {
    if (typeof input !== "object" && input !== null) return "Invalid input";
    if (Array.isArray(input)) {
        return input.reduce((result, value) => {
            if (Number.isNaN(value)) {
                result = result + 1;
            }
            return result;
        }, 0);
    } else {
        return Object.values(input).reduce((result, value) => {
            if (Number.isNaN(value)) {
                result = result + 1;
            }
            return result;
        }, 0);
    }
}
// Sample usage
console.log(countNaNValues([1, 2, NaN, 4, NaN])); // 2
console.log(countNaNValues({ a: 1, b: NaN, c: 3, d: NaN })); // 2
console.log(countNaNValues(123)); // "Invalid input"
console.log(countNaNValues("NaN")); // "Invalid input"
