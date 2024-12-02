/**
 * Tries to parse a string to an integer with a specified radix.
 * @param {string} value - The string to be parsed.
 * @param {number} [radix=10] - The radix (base) for the conversion.
 * @returns {number|null} - Returns the parsed integer or null if the conversion fails.
 */
function safeParseInt(value, radix = 10) {
    if (Number.isNaN(Number.parseInt(value, radix))) {
        return null;
    } else return Number.parseInt(value, radix);
}

// Sample usage
console.log(safeParseInt("42")); // 42
console.log(safeParseInt("101", 2)); // 5
console.log(safeParseInt("abc", 16)); // 2748
console.log(safeParseInt("hello", 10)); // null
console.log(safeParseInt("")); // null
console.log(safeParseInt("123.45", 10)); // 123
console.log(safeParseInt("077", 8)); // 63
