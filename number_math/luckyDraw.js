/**
 * Randomly select and return one of five tech gadgets.
 * The function randomly picks an item from the predefined list.
 *
 * @returns {string} One of the tech gadgets: "Smartphone", "Laptop", "Tablet", "Smartwatch", or "Headphones"
 */
function luckyDraw() {
    let gift = ["Smartphone", "Laptop", "Tablet", "Smartwatch", "Headphones"];
    let indexGift = Math.floor(Math.random() * gift.length);
    return gift[indexGift];
}

// Sample usage
console.log(luckyDraw()); // Kết quả có thể là "Smartphone", "Laptop", "Tablet", "Smartwatch", hoặc "Headphones"
