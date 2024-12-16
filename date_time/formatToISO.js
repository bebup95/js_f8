/**
 * Checks if a string is a valid date and returns it in ISO 8601 format
 * @param {string} input - The string or timestamp to check
 * @returns {string | null} - ISO 8601 date string if valid, otherwise null
 */

/*
 * Hãy viết hàm formatToISO nhận vào một tham số input,
 * hàm này sẽ kiểm tra xem giá trị đó có hợp lệ không. Nếu hợp lệ,
 * hàm sẽ trả về chuỗi ngày dưới định dạng ISO 8601. Nếu không hợp lệ,
 * hàm sẽ trả về null.
 */

// Ví dụ: 2024-12-16T14:30:45Z

function formatToISO(input) {
    let date = new Date(input);
    // console.log(Number.isNaN(date));
    if (Number.isNaN(+date)) {
        return null;
    }
    return date.toISOString();
}

// console.log(new Date(1726025622297));

// // Sample usage
console.log(formatToISO("2021-10-15")); // '2021-10-15T00:00:00.000Z'
console.log(formatToISO("invalid-date")); // null
console.log(formatToISO("2022-02-30")); // '2022-03-02T00:00:00.000Z'
console.log(formatToISO(1726025622297)); // '2024-09-11T03:33:42.297Z'
