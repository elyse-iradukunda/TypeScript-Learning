interface User {
     name:string;
     age:number;
     address:string;
}

class Elyse implements User {
     name:string;
     age:number;
     address:string;
     constructor(name,age,address){
         this.name=name;
         this.age=age;
         this.address=address;
     }
}

type PartialUser = Partial<User>;

const part: PartialUser ={name:"Elyse"}

console.log(part);
