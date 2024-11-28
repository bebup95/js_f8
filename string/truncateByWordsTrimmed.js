/**
 * truncateByWordsTrimmed: Truncate a string by words, removing extra spaces
 * @param {string} str - The input string.
 * @param {number} maxWords - The maximum number of words.
 * @returns {string} - The truncated string with "..." if necessary.
 */
function truncateByWordsTrimmed(str, maxWords) {
    let currentWords = str.trim().split(/\s+/).length;
    if (currentWords > maxWords)
        return str.trim().split(/\s+/).slice(0, maxWords).join(" ") + "...";
    return str.trim().split(/\s+/).join(" ") + "";
}

// Sample usage
console.log(truncateByWordsTrimmed("Hello   World this    is   a   test", 3)); // "Hello World this..."
console.log(truncateByWordsTrimmed("   JavaScript     is   fun  ", 5)); // "JavaScript is fun"
console.log(truncateByWordsTrimmed("Learning   to    code   ", 2)); // "Learning to..."
console.log(truncateByWordsTrimmed("Short    string", 3)); // "Short string"
