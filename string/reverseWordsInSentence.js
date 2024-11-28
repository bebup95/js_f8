/**
 * Reverses each word in a sentence.
 *
 * @param {string} sentence - The sentence to reverse words in
 * @returns {string} A new sentence with each word reversed
 */

function reverseWordsInSentence(str) {
    let newArr = str.split(" ");
    // console.log(newArr);
    let result = newArr.map((word) => {
        return word.split("").reverse().join("");
    });
    return result.join(" ");
}

// Sample usage
console.log(reverseWordsInSentence("Hello world")); // "olleH dlrow"
