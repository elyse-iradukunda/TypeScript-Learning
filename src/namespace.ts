namespace School{
    
    export function sayHello():string{
        return "Hello Elyse";
    }
    export function sayWow():string{
        
        return "Wow!!!";
    }
}

namespace Home{
    export function ImAtHome():string{
        return "I'm at home please !!!"
    }
}

let school = School.sayHello();

console.log(Home.ImAtHome())

console.log(school)

1