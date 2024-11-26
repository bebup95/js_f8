// const numbers = [4, 12, 45, 18, 24];

// const result = numbers.find(function (number) {
//     return number > 100;
// });

// console.log(result);

const persons = [
    { name: "Blob", age: 18 },
    { name: "John", age: 28 },
    { name: "Cenat", age: 38 },
    { name: "Klob", age: 16 },
    { name: "Nob", age: 21 },
];

const age_21 = persons.find((person) => person.age > 21);

console.log(age_21.name);
