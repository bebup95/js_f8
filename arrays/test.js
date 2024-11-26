//Tạo một object với các giá trị ban đầu và số lần xuất hiện
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
// {apple: 3, banana: 2, orange: 1}

// obj = { apple: 1, banana: 1, }
let result = items.reduce((obj, item) => {
    if (item in obj) {
        obj[item]++;
    } else {
        obj[item] = 1;
    }
    return obj;
}, {});

console.log(result);
