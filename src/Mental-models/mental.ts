
// first question in mental model
function addNumbers(a:number,b:number):number {
  return  a+b;
}
console.log(addNumbers(2,3));
console.log(addNumbers(2.5,3.5));


// second question in mental model

function describeInput(a:string|number) {
    if(typeof a=="string"){
        return "You have provided string:"+a;
    }
    else if( typeof a =="number"){
        return "You have provided number:"+a;
    }
}
console.log(describeInput("hi"))
console.log(describeInput(10))

// third question in mental model session 
  interface User{
      name:string;
      age:number;
      email:string;
  }
let user:User ={
    name:"Elyse",
    age:40,
    email:"Ellycreative@.."
}
function introduceUser(user:User):string {
  return `Hello, my name is ${user.name}, I am ${user.age} years old, and my email is ${user.email}`;
}
console.log(introduceUser(user))


// question 4 about enum 

const  enum Status {
    Active="The item is currently active",
    Inactive="The item is currently inactive",
    Pending="The item is pending review"
};

function getStatusMessage(status:Status):string {
      return status
}
console.log(getStatusMessage(Status.Active));