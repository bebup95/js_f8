/**
 * Returns a string indicating the time passed since a given ISO 8601 date.
 * Handles cases like minutes, hours, days, weeks, months, and years.
 * If less than 1 minute has passed, returns "Vừa xong".
 * @param {string} isoDate - ISO 8601 formatted date string
 * @returns {string} - a string describing the time elapsed (e.g., "5 minutes ago")
 */
function timeAgo(isoDate) {
    const date = new Date(isoDate);

    if (isNaN(date.getTime())) {
        return "Ngày giờ không hợp lệ";
    }

    const secondsAgo = Math.floor((Date.now() - date) / 1000);

    if (secondsAgo < 60) {
        return "Vừa xong";
    }

    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) {
        return `${minutesAgo} phút trước`;
    }

    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) {
        return `${hoursAgo} giờ trước`;
    }

    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 7) {
        return `${daysAgo} ngày trước`;
    }

    const weeksAgo = Math.floor(daysAgo / 7);
    if (daysAgo < 30) {
        return `${weeksAgo} tuần trước`;
    }

    const monthsAgo = Math.floor(daysAgo / 30);
    if (daysAgo < 365) {
        return `${monthsAgo} tháng trước`;
    }

    const yearsAgo = Math.floor(daysAgo / 365);
    return `${yearsAgo} năm trước`;
}

// Sample usage
console.log(timeAgo("2020-09-10T15:20:00Z")); // "4 năm trước"
console.log(timeAgo("2024-09-03T23:01:00Z")); // "2 tháng trước"
// console.log(timeAgo("2024-10-23T23:01:00Z")); // "1 tuần trước"
console.log(timeAgo("2024-11-03T23:01:00Z"));
// console.log(timeAgo("ashdjasdbvaj/s")); // "Ngày giờ không hợp lệ"

/*Hãy viết một hàm timeAgo nhận vào một chuỗi ngày giờ định dạng ISO 8601 (ví dụ: "2024-09-10T15:20:00Z")
 và trả về chuỗi biểu thị khoảng thời gian trôi qua, ví dụ:

"1 phút trước"
"2 giờ trước"
"3 ngày trước"
"4 tuần trước"
"5 tháng trước"
"6 năm trước"
Nếu thời gian trôi qua dưới 1 phút, trả về "Vừa xong"
Hàm trả về "Ngày giờ không hợp lệ" nếu chuỗi ngày tháng đầu vào không hợp lệ. */
