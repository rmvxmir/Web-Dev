function unique(arr) {
    return Array.from(new Set(arr));
}
let values = [
    "Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));

function aclean(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].toLowerCase().split("").sort().join("");
        obj[temp] = arr[i];
    }
    return Object.values(obj);
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);