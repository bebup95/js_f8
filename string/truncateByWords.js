/**
 * truncateByWords: Truncate a string to a specified number of words
 * @param {string} str - The input string to be truncated.
 * @param {number} maxWords - The maximum number of words.
 * @returns {string} - The truncated string with "..." if necessary.
 */
function truncateByWords(str, maxWords) {
    if (str.split(" ").length > maxWords) {
        return str.split(" ").slice(0, maxWords).join(" ").concat("...");
    } else {
        return str;
    }
}

// Sample usage
console.log(truncateByWords("Hello World this is a test", 3)); // "Hello World this..."
console.log(truncateByWords("JavaScript is fun", 5)); // "JavaScript is fun"
console.log(truncateByWords("Learning to code", 2)); // "Learning to..."
console.log(truncateByWords("Short string", 3)); // "Short string"
