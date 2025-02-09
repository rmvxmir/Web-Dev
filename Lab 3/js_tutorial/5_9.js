function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0);
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log(sumSalaries(salaries));

function count(obj) {
    return Object.keys(obj).length;
}
let user = {
    name: 'John',
    age: 30
};
console.log(count(user));
