console.log("Here is the repo for learning typescript as well as other related course")


let a: number = 10;
let b: string ="here is the maximum of the things you can do with variable and the way you declare them right here.";


//  here is all about annotation


             //object annotaion
  let person :{ name:string;age:number;}
  
  person = {name:"Elyse",age:30}
  
  console.log(person)
             //function annotation
function hello(name:string){
 return name;
}

console.log(hello("Irael"))


           // to use unknown type in typeScript

let value: unknown ="Elyse"

if(typeof value =="string"){
console.log(value)}