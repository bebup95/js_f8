/**
 * Formats the credit card number by masking all but the last 4 digits.
 * @param {string|number} cardNumber - The credit card number.
 * @param {string} maskChar - The character to use for masking (default is '*').
 * @returns {string} - The masked credit card number.
 */
function formatCardNumber(cardNumber, maskChar = "*") {
    return cardNumber.toString().length < 16
        ? "Invalid card number"
        : cardNumber
              .toString()
              .slice(-4)
              .padStart(cardNumber.toString().length, maskChar);
}

// Sample usage
console.log(formatCardNumber(1234567812345678)); // "************5678"
console.log(formatCardNumber(9876543212345678, "#")); // "############5678"
console.log(formatCardNumber(123456789)); // "Invalid card number"
console.log(formatCardNumber(1234567812345678, "*")); // "************5678"
