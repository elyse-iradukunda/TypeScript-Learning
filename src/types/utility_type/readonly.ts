 interface Person{
     
     name:string;
     address:string;
     age:number;
 }

  type ReadonlyType = Readonly<Person>;
  
  let person: ReadonlyType ={
     name:"elyse",
     address:"rwand",
     age:48

 }
 
 person.name ="Ellyse"; 
 // // this will throw an erro because we have setted that our object is going tobe read only no thing you can do on it.
 
 function isTest(pram):pram is number{
 return pram
}


console.log(isTest("hi"))