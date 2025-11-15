 interface Person{
     
     name:string;
     address:string;
     age:number;
 }

  type makingRequiere = Partial<Person>;
  
  let person: makingRequiere ={
     name:"elyse",
     address:"rwand",

 }