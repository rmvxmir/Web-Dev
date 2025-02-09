let user = {
    name: "John",
    years: 30
};
let {name, years: age, isAdmin = false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);

function topSalary(obj) {
    let max_salary = 0;
    let name = null;
    for(const [cur_name, cur_salary] of Object.entries(obj)) {
        if (max_salary < cur_salary) {
            max_salary = cur_salary;
            name = cur_name;
        }
    }
    return name;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log(topSalary(salaries))
