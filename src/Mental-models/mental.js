// first question in mental model
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(2, 3));
console.log(addNumbers(2.5, 3.5));
// second question in mental model
function describeInput(a) {
    if (typeof a == "string") {
        return "You have provided string:" + a;
    }
    else if (typeof a == "number") {
        return "You have provided number:" + a;
    }
}
console.log(describeInput("hi"));
console.log(describeInput(10));
var user = {
    name: "Elyse",
    age: 40,
    email: "Ellycreative@.."
};
function introduceUser(user) {
    return "Hello, my name is ".concat(user.name, ", I am ").concat(user.age, " years old, and my email is ").concat(user.email);
}
console.log(introduceUser(user));
;
function getStatusMessage(status) {
    return status;
}
console.log(getStatusMessage("The item is currently active" /* Status.Active */));
// question 5 about generic function 
// Write a generic function that returns the first element of an array
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["hello", "brother", "are"]));
console.log(getFirstElement([{ id: 1 }, { id: 2 }]));
var me = {
    names: "Elyse",
    employeeId: 19,
    teamSize: 30
};
function describeManagerEmployee(me) {
    return "".concat(me.names, " (ID: ").concat(me.employeeId, ") manages a team of ").concat(me.teamSize, " people");
}
console.log(describeManagerEmployee(me));
