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




function getFirstElement<T>(arr:T[]):T | undefined{
     return arr[0]
   }

console.log(getFirstElement([1, 2, 3]))