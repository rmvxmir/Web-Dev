let some_date = new Date(2012, 1, 20, 3, 12);
console.log(some_date);

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}
let date = new Date(2012, 0, 3);
console.log(getWeekDay(date));

function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day;
}
console.log(getLocalDay(new Date(2012, 0, 3)));

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log(getLastDayOfMonth(2012, 0));
console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2013, 1));

function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
console.log(getSecondsToday());

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}
console.log(getSecondsToTomorrow());