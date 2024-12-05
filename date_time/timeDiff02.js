/**
 * Calculates the time difference between two timestamps in days, hours, and minutes
 * @param {number} start - The starting timestamp
 * @param {number} end - The ending timestamp
 * @return {Object} - An object with days, hours, and minutes difference
 */
function timeDiff(time1, time2) {
    if (
        typeof time1 !== "number" ||
        typeof time2 !== "number" ||
        Number.isNaN(time1) ||
        Number.isNaN(time2)
    ) {
        return "Invalid Timestamp";
    }
    let diff = Math.abs(Math.floor(time2 - time1));
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor(((diff % 3600000) % 60000) / 1000);
    const milliseconds = Math.floor(((diff % 3600000) % 60000) % 1000);

    return { hours, minutes, seconds, milliseconds };
}

// Sample usage
console.log(timeDiff(1724796645000, 1724799645045));
// { hours: 0, minutes: 50, seconds: 0, milliseconds: 45 }

console.log(timeDiff(1724899845045, 1724796645160));
// { hours: 28, minutes: 39, seconds: 59, milliseconds: 885 }

console.log(timeDiff(1724796645000, "ABC")); // "Invalid Timestamp"
console.log(timeDiff("1724796645000", "1724799645045")); // "Invalid Timestamp"
