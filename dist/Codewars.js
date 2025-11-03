"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const digitalRoot = (num) => {
    if (num < 10)
        return num;
    let numbers = num.toString().split('');
    let a = numbers.reduce((curr, acc) => curr + parseInt(acc), 0);
    return digitalRoot(a);
};
console.log(digitalRoot(1045));
//second one but not working 
function addBinarys(a, b) {
    let firstInt = a.toString(2);
    let secondInt = b.toString(2);
    let binary = firstInt + secondInt;
    let sum = binary.split('').reduce((a, c) => a + parseInt(c), 0);
    return sum.toString();
}
console.log(addBinary(80, 9));
// this the actual one we can use and simplest 
function addBinary(a, b) {
    return (a + b).toString(2);
}
// finding square root of number in ts
//# sourceMappingURL=Codewars.js.map

console.log("here is the compiled codes about typescript and other things lelated to it as well")