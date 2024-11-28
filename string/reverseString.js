/**
 * Reverse the given string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}
// Sample usage
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("OpenAI")); // "IAnepO"
console.log(reverseString("12345")); // "54321"
