/**
 * Formats the credit card number by masking all but the last 4 digits and adds spaces every 4 digits without regex.
 * @param {string|number} cardNumber - The credit card number.
 * @param {string} maskChar - The character to use for masking (default is '*').
 * @returns {string} - The masked credit card number with spaces.
 */
function formatCardNumber(cardNumber, maskChar = "*") {
    if (cardNumber.toString().length < 16) return "Invalid card number";
    let formatNumber = cardNumber
        .toString()
        .slice(-4)
        .padStart(cardNumber.toString().length, maskChar);
    let newArr = [];
    for (let i = 0; i < formatNumber.length; i++) {
        if (i % 4 === 0 && i !== 0) {
            newArr.push(" ");
        }
        newArr.push(formatNumber[i]);
    }
    return newArr.join("");
}

// Sample usage
console.log(formatCardNumber(1234567812345678)); // "**** **** **** 5678"
console.log(formatCardNumber(9876543212345678, "#")); // "#### #### #### 5678"
console.log(formatCardNumber(123456789)); // "Invalid card number"
console.log(formatCardNumber(1234567812345678, "*")); // "**** **** **** 5678"
