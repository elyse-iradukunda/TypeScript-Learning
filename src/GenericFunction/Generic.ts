 function Greeting<T>(name: T): string{
     
     return `May name is : ${name}, say hi!`;
 }
 
 console.log(Greeting("Elyse"));
 
let array : string[]=["Elyse","Iradu","killian"];

console.log(Greeting(array));