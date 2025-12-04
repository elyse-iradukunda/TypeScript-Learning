// class Counter {
  
//     count = 0;

//   increment() {
//     this.count++;
//   }

//    getCount() {
//     return this.count; 
//   }
// }




//  type myRange = [Boolean,{name:string,age:number}];

// const setRange = (range: myRange): {}=>{
//   const x = range[0];
//   const y = range[1];

//   return { x, y: y.age > 10 };
// };

// console.log(setRange([true, { name: 'Patrick', age: 3}]));

// function getFirstElement<T>(arr:T[]):T | undefined{
//      return arr[0]
//    }

// console.log(getFirstElement([1, 2, 3]))


// interface Employee {
//   name:string;
//   employeeId:number;

// }

// interface Manager {
//     teamSize:number;
// }

// type ManagerEmployee = Employee & Manager;


// function describeManagerEmployee(me:ManagerEmployee) {
//   return `${me.name} (ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
// }



// Define a missing TypeScript types

//  type Op = (a:number,b:number)=> number;

// function applyOperation(a:number, b:number, operation:Op): number {
//   return operation(a, b);
// }

// const add = (x:number, y:number) => x + y;
// const multiply = (x:number, y:number) => x * y;



// Solve all the typing issues in the code without changing the implementation
 
// type mess= { to: string; text?: string };

// const sendMessage = (message: mess):string|undefined => {
//   if(message.text !== undefined)  return message.text.toUpperCase();
//  else {
// } return undefined;
  
// };

// console.log(sendMessage({ to: 'Alice' }));

// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// // Complete the types of this function
// function getProperty<T,K extends keyof T>(obj:T, key:K): T[K] {
//   return obj[key];
// }


// Solve all the typing issues in the code without changing the implementation


function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string; // only add this overloading 
function format<T>(value: T): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value.toFixed(2);
  } else {
    return '';
  }
}

format(true);




























