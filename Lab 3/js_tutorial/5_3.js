function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("john"));

function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes("viagra") || str.includes("xxx");
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

function truncate(str, maxlength) {
    return (str.length > maxlength) ? console.log(str.slice(0, maxlength - 1) + '...') : console.log(str);
}
truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"
truncate("Hi everyone!", 20) == "Hi everyone!"

function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue('$120'));