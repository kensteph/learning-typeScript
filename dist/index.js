"use strict";
let myTuple;
let age = 35;
if (age > 40)
    age += 10;
let sales = 123456789;
console.log(sales);
;
let mySize = 3;
console.log(mySize);
function calculateTax(income) {
    if (income < 60000)
        return income * 1.2;
    return income * 1.3;
}
let employee = { id: 1, name: "Stephanie" };
let employee1 = { id: 2, name: "Teddy", retire: (date) => {
        console.log(date);
    } };
console.log(employee1);
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let distance = 'Km';
//# sourceMappingURL=index.js.map