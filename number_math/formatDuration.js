/**
 * Formats a duration given in seconds into "mm:ss" or "hh:mm:ss" format.
 * @param {number} duration - the duration in seconds
 * @returns {string} - formatted duration (e.g., "01:10" or "01:00:00")
 */
function formatDuration(duration) {
    if (duration >= 36e2) {
        const hh = Math.floor(duration / 36e2)
            .toString()
            .padStart(2, 0);
        const mm = Math.floor((duration - hh * 36e2) / 60)
            .toString()
            .padStart(2, 0);
        const ss = Math.floor(duration - hh * 36e2 - mm * 60)
            .toString()
            .padStart(2, 0);
        return `${hh}:${mm}:${ss}`;
    } else if (duration < 3600 && duration >= 0) {
        const mm = Math.floor(duration / 60)
            .toString()
            .padStart(2, 0);
        const ss = Math.floor(duration - mm * 60)
            .toString()
            .padStart(2, 0);
        return `${mm}:${ss}`;
    } else return "Invalid duration";
}

// formatDuration(3661);

// Sample usage
console.log(formatDuration(70)); // "01:10"
console.log(formatDuration(3600)); // "01:00:00"
console.log(formatDuration(3661)); // "01:01:01"
console.log(formatDuration(59)); // "00:59"
console.log(formatDuration(0)); // "00:00"
console.log(formatDuration(-5)); // "Invalid duration"
