/**
 * Function that slices a string to a specified length without cutting
 * emojis or special characters in half. Adds "..." if the string is shortened.
 *
 * @param {string} str - The input string which may contain emojis and special characters.
 * @param {number} length - The desired length of the sliced string.
 * @returns {string} - The sliced string with full emojis and characters, ending with "..." if shortened.
 */
function sliceString(str, length) {
    if (typeof str !== "string") return "Invalid input";
    if (str.length < length) return str;
    const arrStr = Array.from(str);
    return arrStr.slice(0, length).join("") + "...";
}

// Sample usage
console.log(sliceString("Hello World", 5)); // "Hello..."
console.log(sliceString("👋🌍 Hello", 2)); // "👋🌍..."
console.log(sliceString("Hi 👋, how are you?", 8)); // "Hi 👋, ho..."
console.log(sliceString("😊😇🌟✨💥", 3)); // "😊😇🌟..."
console.log(sliceString("Hello", 10)); // "Hello"
console.log(sliceString(123, 2)); // "Invalid input"
