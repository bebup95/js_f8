/**
 * Add a custom toUpperCase2 method to String.prototype
 * This method converts all lowercase letters (a-z) to uppercase (A-Z)
 * without using the original toUpperCase method.
 */
String.prototype.toUpperCase2 = function () {
    let upperWord = [];
    for (let i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) >= 97 && this.charCodeAt(i) <= 122) {
            upperWord.push(String.fromCharCode(this.charCodeAt(i) - 32));
        } else upperWord.push(String.fromCharCode(this.charCodeAt(i)));
    }
    return upperWord.join("");
};

/**
 * Add a custom toLowerCase2 method to String.prototype
 * This method converts all uppercase letters (A-Z) to lowercase (a-z)
 * without using the original toLowerCase method.
 */
String.prototype.toLowerCase2 = function () {
    let lowerWord = [];
    for (let i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) >= 65 && this.charCodeAt(i) <= 90) {
            lowerWord.push(String.fromCharCode(this.charCodeAt(i) + 32));
        } else lowerWord.push(String.fromCharCode(this.charCodeAt(i)));
    }
    return lowerWord.join("");
};

// Sample usage
console.log("hello World".toUpperCase2()); // "HELLO WORLD"
console.log("HELLO WORLD".toLowerCase2()); // "hello world"
console.log("aBcDeFgHi".toUpperCase2()); // "ABCDEFGHI"
console.log("aBcDeFgHi".toLowerCase2()); // "abcdefghi"
console.log("ÁéíÓú".toUpperCase2()); // "ÁéíÓú" // không thay đổi các ký tự có dấu
