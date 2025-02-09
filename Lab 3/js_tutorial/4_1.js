let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
	for (let key in obj) {
    	return false;
	}
	return true;
}
let schedule = {};
//alert(isEmpty(schedule));
schedule["8:30"] = "get up";
//alert(isEmpty(schedule));
console.log(isEmpty(schedule));

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}
let total = 0;
function sumSalaries(obj) {
	for (let salary in obj) {
		total += obj[salary];
	}
	return total;
}
console.log(sumSalaries(salaries));

function multiplyNumeric(obj) {
	for (let value in obj) {
		if (typeof(obj[value]) == 'number') obj[value] *= 2;
	}
	return obj;
}
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};
multiplyNumeric(menu);
console.log(menu);
