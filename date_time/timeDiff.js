/**
 * Calculates the time difference between two timestamps in days, hours, and minutes
 * @param {number} start - The starting timestamp
 * @param {number} end - The ending timestamp
 * @return {Object} - An object with days, hours, and minutes difference
 */
function timeDiff(start, end) {
    if (
        start > end ||
        typeof start !== "number" ||
        typeof end !== "number" ||
        Number.isNaN(start) ||
        Number.isNaN(end)
    ) {
        return "Invalid Timestamp";
    }
    let diff = Math.floor(end - start);
    const ss = Math.floor(diff / 1000);
    const days = Math.floor(ss / 86400);
    const hours = Math.floor(Math.floor(ss % 86400) / 3600);
    const minutes = Math.floor(Math.floor(Math.floor(ss % 86400) % 3600) / 60);
    return { days, hours, minutes };
}

// Sample usage
console.log(timeDiff(1622520000000, 1622610000000));
// { days: 1, hours: 1, minutes: 0 }

console.log(timeDiff(1622520000000, 1622516400000));
// "Invalid Timestamp"

console.log(timeDiff("1622520000000", 1622613600000));
// "Invalid Timestamp"
