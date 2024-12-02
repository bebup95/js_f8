/**
 * Compares two primitive values for equality, including NaN.
 * @param {*} a - The first value to compare.
 * @param {*} b - The second value to compare.
 * @returns {boolean|string} - True if both values are primitive and equal (including NaN), otherwise false.
 * Returns "Invalid input" if any value is not primitive.
 */
function comparePrimitives(a, b) {
    if (a !== null && (typeof a === "function" || typeof a === "object")) {
        return "Invalid input";
    } else if (
        b !== null &&
        (typeof b === "function" || typeof b === "object")
    ) {
        return "Invalid input";
    } else if (a === b && !Number.isNaN(a) && !Number.isNaN(b)) {
        return true;
    } else if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    } else return false;
}

// Sample usage
console.log(comparePrimitives(5, 5)); // true
console.log(comparePrimitives(NaN, NaN)); // true
console.log(comparePrimitives(null, null)); // true
console.log(comparePrimitives("hello", "hello")); // true
console.log(comparePrimitives(true, false)); // false
console.log(comparePrimitives(5, "5")); // false
console.log(comparePrimitives({ name: "John" }, { name: "John" })); // "Invalid input"
console.log(comparePrimitives(42, {})); // "Invalid input"
