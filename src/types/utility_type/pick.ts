 interface Person{
     
     name:string;
     address:string;
     age:number;
 }

  type Picktype= Pick<Person,'name'|'age'>;
  
  let person: Picktype ={
     name:"elyse",
     age:48
 }
 
 console.log("Here is the things I have done here");
