/**
 * Check if a password is strong.
 * @param {string} password - The password string to check.
 * @returns {boolean} - Returns true if the password is strong, otherwise returns false.
 */
function isStrongPassword(password) {
    if (password.toString().length > 8 && typeof password === "string") {
        for (let i = 0; i < password.toString().length; i++) {
            if (
                password.toString().charCodeAt(i) >= 65 &&
                password.toString().charCodeAt(i) <= 90
            ) {
                for (let i = 0; i < password.toString().length; i++) {
                    if (
                        password.toString().charCodeAt(i) >= 97 &&
                        password.toString().charCodeAt(i) <= 122
                    ) {
                        for (let i = 0; i < password.toString().length; i++) {
                            if (
                                password.toString()[i] == "0" ||
                                password.toString()[i] == "1" ||
                                password.toString()[i] == "2" ||
                                password.toString()[i] == "3" ||
                                password.toString()[i] == "4" ||
                                password.toString()[i] == "5" ||
                                password.toString()[i] == "6" ||
                                password.toString()[i] == "7" ||
                                password.toString()[i] == "8" ||
                                password.toString()[i] == "9"
                            ) {
                                for (
                                    let i = 0;
                                    i < password.toString().length;
                                    i++
                                ) {
                                    if (
                                        password.toString().charCodeAt(i) >=
                                            33 &&
                                        password.toString().charCodeAt(i) <= 47
                                    ) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else return false;
}

// Sample usage
console.log(isStrongPassword("Password1!")); // true
console.log(isStrongPassword("weakpass")); // false
console.log(isStrongPassword("12345678")); // false
console.log(isStrongPassword("!A2bcdefg")); // true
console.log(isStrongPassword("!Abcdef")); // false
console.log(isStrongPassword("!Abc123")); // false
console.log(isStrongPassword(123123123)); // false
