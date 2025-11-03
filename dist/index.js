"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Here is the repo for learning typescript as well as other related course");
let a = 10;
let b = "here is the maximum of the things you can do with variable and the way you declare them right here.";
//  here is all about annotation
//object annotaion
let person;
person = { name: "Elyse", age: 30 };
console.log(person);
//function annotation
function hello(name) {
    return name;
}
console.log(hello("Irael"));
// to use unknown type in typeScript
let value = "Elyse";
if (typeof value == "string") {
    console.log(value);
}
// here is my today's kata
const squareIt = (a) => {
    return Math.sqrt(a);
};
console.log(squareIt(3));
//# sourceMappingURL=index.js.map