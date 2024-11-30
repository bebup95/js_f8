/**
 * Function returns the number of vowels in the input string
 * @param {string} str - The string to count the vowels in
 * @returns {number} - The number of vowels in the string
 */
function countVowels(str) {
    const vowels = ["e", "u", "o", "a", "i"];
    return typeof str === "string"
        ? str
              .toLowerCase()
              .split("")
              .reduce((result, letter) => {
                  //   console.log(letter);
                  //   console.log(vowels.includes(letter));
                  return vowels.includes(letter)
                      ? (result = result + 1)
                      : result;
              }, 0)
        : "Invalid input";
}

// Sample usage
console.log(countVowels("hello")); // 2
console.log(countVowels("HELLO")); // 2
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("why")); // 0
console.log(countVowels(123)); // "Invalid input"
console.log(countVowels("")); // 0
