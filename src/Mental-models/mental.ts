
// // first question in mental model
// function addNumbers(a:number,b:number):number {
//   return  a+b;
// }
// console.log(addNumbers(2,3));
// console.log(addNumbers(2.5,3.5));


// // second question in mental model

// function describeInput(a:string|number) {
//     if(typeof a=="string"){
//         return "You have provided string:"+a;
//     }
//     else if( typeof a =="number"){
//         return "You have provided number:"+a;
//     }
// }
// console.log(describeInput("hi"))
// console.log(describeInput(10))

// // third question in mental model session 
//   interface User{
//       name:string;
//       age:number;
//       email:string;
//   }
// let user:User ={
//     name:"Elyse",
//     age:40,
//     email:"Ellycreative@.."
// }
// function introduceUser(user:User):string {
//   return `Hello, my name is ${user.name}, I am ${user.age} years old, and my email is ${user.email}`;
// }
// console.log(introduceUser(user))


// // question 4 about enum 

// const  enum Status {
//     Active="The item is currently active",
//     Inactive="The item is currently inactive",
//     Pending="The item is pending review"
// };

// function getStatusMessage(status:Status):string {
//       return status
// }
// console.log(getStatusMessage(Status.Active));

// // question 5 about generic function 

// // Write a generic function that returns the first element of an array
// function getFirstElement<T>(arr:T[]):T | undefined {
//   return arr[0];
// }

// console.log(getFirstElement([1, 2, 3]));
// console.log(getFirstElement(["hello", "brother", "are"]));
// console.log(getFirstElement([{ id: 1 }, { id: 2 }]))

// // Question number 6 about type Assertion

// interface Employee{
//     names:string;
//     employeeId:number;
    
// }
// interface Manager{
//     teamSize:number;
// }

// // Define Employee interface
// // Define Manager interface
// // Define ManagerEmployee type

// type ManagerEmployee = Employee & Manager;
// const me:ManagerEmployee ={
//     names:"Elyse",
//     employeeId:19,
//     teamSize:30
// }
// function describeManagerEmployee(me:ManagerEmployee):string {
//   return `${me.names} (ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
// }
// console.log(describeManagerEmployee(me));


// // question 7 

// // Define a missing TypeScript types


//  type applyOperation =(a:number,b:number)=>number;

// function applyOperation(a:number, b:number, operation:applyOperation):number {
//   return operation(a, b);
// }

// const add = (x:number, y:number) => x + y;
// const multiply = (x:number, y:number) => x * y;

// //..................


// // Video Solution: https://youtube.com/watch?v=ojagklq8aas

// /* _____________ Your Code Here _____________ */

// // type MyOmit<T, K> = any

// // /* _____________ Test Cases _____________ */
// // import type { Equal, Expect } from '../helpers'

// // type cases = [
// //   Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
// //   Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
// //   Expect<Equal<Expected3, MyOmit<Todo1, 'description' | 'completed'>>>,
// // ]

// // // @ts-expect-error
// // type error = MyOmit<Todo, 'description' | 'invalid'>

// // interface Todo {
// //   title: string
// //   description: string
// //   completed: boolean
// // }

// // interface Todo1 {
// //   readonly title: string
// //   description: string
// //   completed: boolean
// // }

// // interface Expected1 {
// //   title: string
// //   completed: boolean
// // }

// // interface Expected2 {
// //   title: string
// // }

// // interface Expected3 {
// //   readonly title: string
// // }


// type custom<T>={
//    [key in keyof T]: number;
// }

// interface Pser{
//   name:number;
//   age:number;
// }

// type makeItReadOnly = Partial<custom<Pser>>

// let obj:makeItReadOnly={

//    age:50
// }

type prods = {
  name:string;
  price:number;
}
type finalType = prods[]

function calculateTotal(items:finalType
):string {
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return total.toFixed(2);
}


function applyDiscount(amount:number, discount:number):number {
  const discountedAmount = amount - (amount * discount);
  return discountedAmount;
}

const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 79 }
];

const total = calculateTotal(products);
const discounted = applyDiscount(parseInt(total), 0.1);
