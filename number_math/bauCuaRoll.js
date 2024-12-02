/**
 * Simulate the roll of three dice in the game "Bầu Cua Tôm Cá".
 * Each dice can land on one of the six sides: "Bầu", "Cua", "Tôm", "Cá", "Gà", "Nai".
 *
 * @returns {Array<string>} An array of three strings representing the result of each roll.
 */
function bauCuaRoll() {
    const base = ["Bầu", "Cua", "Tôm", "Cá", "Gà", "Nai"];
    let result = [];
    for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * base.length);
        result.push(base[index]);
    }
    return result;
}

// Sample usage
console.log(bauCuaRoll()); // Kết quả có thể là ["Bầu", "Cá", "Nai"]
console.log(bauCuaRoll()); // Kết quả có thể là ["Cua", "Tôm", "Gà"]
console.log(bauCuaRoll()); // Kết quả có thể là ["Gà", "Bầu", "Cua"]
// Blabla...
