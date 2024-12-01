/**
 * Convert all lowercase letters in the string to uppercase.
 * @param {string} str - The string to convert.
 * @returns {string} - A new string with all lowercase letters converted to uppercase.
 */
function toUpperCaseCustom(str) {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            newStr.push(String.fromCharCode(str.charCodeAt(i) - 32));
        } else newStr.push(str[i]);
    }
    return newStr.join("");
}

/**
 * Convert all uppercase letters in the string to lowercase.
 * @param {string} str - The string to convert.
 * @returns {string} - A new string with all uppercase letters converted to lowercase.
 */
function toLowerCaseCustom(str) {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            newStr.push(String.fromCharCode(str.charCodeAt(i) + 32));
        } else newStr.push(str[i]);
    }
    return newStr.join("");
}

// Sample usage
console.log(toUpperCaseCustom("hello World!")); // "HELLO WORLD!"
console.log(toLowerCaseCustom("HELLO World!")); // "hello world!"
console.log(toUpperCaseCustom("abc123")); // "ABC123"
console.log(toLowerCaseCustom("ABC123")); // "abc123"
console.log(toUpperCaseCustom("ÁéíÓú")); // "ÁéíÓú" // không thay đổi các ký tự có dấu
console.log(toLowerCaseCustom("ÁéíÓú")); // "ÁéíÓú" // không thay đổi các ký tự có dấu
