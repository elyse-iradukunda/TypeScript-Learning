// // class Counter {
  
// //     count = 0;

// //   increment() {
// //     this.count++;
// //   }

// //    getCount() {
// //     return this.count; 
// //   }
// // }




// //  type myRange = [Boolean,{name:string,age:number}];

// // const setRange = (range: myRange): {}=>{
// //   const x = range[0];
// //   const y = range[1];

// //   return { x, y: y.age > 10 };
// // };

// // console.log(setRange([true, { name: 'Patrick', age: 3}]));

// // function getFirstElement<T>(arr:T[]):T | undefined{
// //      return arr[0]
// //    }

// // console.log(getFirstElement([1, 2, 3]))


// // interface Employee {
// //   name:string;
// //   employeeId:number;

// // }

// // interface Manager {
// //     teamSize:number;
// // }

// // type ManagerEmployee = Employee & Manager;


// // function describeManagerEmployee(me:ManagerEmployee) {
// //   return `${me.name} (ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
// // }



// // Define a missing TypeScript types

// //  type Op = (a:number,b:number)=> number;

// // function applyOperation(a:number, b:number, operation:Op): number {
// //   return operation(a, b);
// // }

// // const add = (x:number, y:number) => x + y;
// // const multiply = (x:number, y:number) => x * y;



// // Solve all the typing issues in the code without changing the implementation
 
// // type mess= { to: string; text?: string };

// // const sendMessage = (message: mess):string|undefined => {
// //   if(message.text !== undefined)  return message.text.toUpperCase();
// //  else {
// // } return undefined;
  
// // };

// // console.log(sendMessage({ to: 'Alice' }));

// // interface User {
// //   name: string;
// //   age: number;
// //   email: string;
// // }

// // // Complete the types of this function
// // function getProperty<T,K extends keyof T>(obj:T, key:K): T[K] {
// //   return obj[key];
// // }


// // Solve all the typing issues in the code without changing the implementation


// // function format(value: string): string;
// // function format(value: number): string;
// // function format(value: boolean): string; // only add this overloading 
// // function format<T>(value: T): string {
// //   if (typeof value === 'string') {
// //     return value.toUpperCase();
// //   } else if (typeof value === 'number') {
// //     return value.toFixed(2);
// //   } else {
// //     return '';
// //   }
// // }

// // format(true);

// // type p ={
// //   name:string;
// //   address:{
// //     street:string;
// //     city:string;
// //   }}

// // type u = {
// //   age:number;
// //   city:string;
// // }

// // function mergeObjects(obj1:p, obj2:u) {
// //   return { ...obj1, ...obj2 };
// // }

// // function getNestedValue(obj:p, path:string) {
// //   const keys = path.split('.');
// //   let value:any = obj;
// //   for (let key of keys) {
// //     value = value[key];
// //   }
// //   return value;
// // }

// // const person = {
// //   name: "John",
// //   address: {
// //     street: "123 Main St",
// //     city: "New York"
// //   }
// // };



// // const updates = { age: 30, city: "Boston" };
// // const merged = mergeObjects(person, updates);
// // const street = getNestedValue(person, "address.street");


// class Counter {
//    count = 0;
//    static count = 0;
//   increment() {
//     this.count++;
//   }

//    static getCount() {
//     return this.count;
//   }
// }

// //  function concatenate(...strings: string[]):string  {
// //   return strings.join('');
// // }

// //   console.log(concatenate('Hello', 'Hi', 'Hola'));


// // Update the function signature so that all tests pass

// type Direction = "up" | "left"

// function move(direction: Direction, distance: number ) {}

// // TESTS

// move('up', 10);
// move('left', 5);

// move(
//   // @ts-expect-error - "up-right" is not a valid direction
//   'up-right',
//   10
// );

// move(
//   // @ts-expect-error - "down-left" is not a valid direction
//   'down-left',
//   20
// );

// move(
//   'up',
//   // @ts-expect-error - "20" is not a valid distance
//   '20'
// );





































type an ={
  title:string;
  ingredients:[
    {name:string,quantity:number|string,price?:number}
  ],instructions:string;
}
~
const processRecipe = (recipe:an ) => {
  console.log(recipe.ingredients);
};

processRecipe({
  title: 'Chocolate Chip Cookies',
  ingredients: [
    { name: 'Flour', quantity: 4 },
    { name: 'Sugar', quantity: '1 cup', price: 5 },
  ],
  instructions: '...',
});

console.log(``)




