/**
 * Function returns the longest word in the input sentence
 * @param {string} sentence - The sentence to find the longest word in
 * @returns {string} - The longest word in the sentence
 */
function findLongestWord(sentence) {
    if (typeof sentence !== "string") {
        return `Invalid input`;
    } else {
        let arrSentence = sentence.split(" ");
        let longestWord = arrSentence.reduce((longest, word) => {
            return longest.length < word.length
                ? (longest = word)
                : (longest = longest);
        }, "");
        return longestWord;
    }
}

// Sample usage
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "quick"
console.log(findLongestWord("May the force be with you")); // "force"
console.log(findLongestWord("To be or not to be")); // "not"
console.log(findLongestWord(12345)); // "Invalid input"
console.log(findLongestWord("")); // ""
