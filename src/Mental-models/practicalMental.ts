
interface User{
    name:string;
    age: number;
    email:string;
}


let user:User ={name:"elyse",age:30,email:"ely@gmail.com"}
function introduceUser(user:User) {
  return `Hello, my name is ${user.name}, I am ${user.age} years old, and my email is ${user.email}`;
}
console.log(introduceUser(user));
