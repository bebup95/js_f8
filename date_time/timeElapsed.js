/**
 * Calculates the number of seconds elapsed since the given start timestamp
 * @param {number} start - The starting timestamp
 * @return {number} - The number of seconds elapsed
 */
function timeElapsed(start) {
    if (Number.isNaN(start) || typeof start !== "number") {
        return "Invalid Timestamp";
    }
    const miliSSPass = Number.parseInt(Date.now()) - start;
    const ssPass = Math.floor(miliSSPass / 1000);
    return ssPass;
}

// Sample usage
console.log(timeElapsed("ABC")); // "Invalid Timestamp"

const startTime = Date.now();
setTimeout(() => {
    console.log(timeElapsed(startTime)); // 1
}, 1000);
