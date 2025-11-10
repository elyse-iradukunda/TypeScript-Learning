// first example using as keyword
let myName: any = "Elyse";
let assertion: number = (myName as string).length;
console.log(assertion);

// here is the above example but used <> backets to do type assertion

let myName: any = "Elyse";
let assertion: number = (<string>myName).length;
console.log(assertion);


