
// first question in mental model
function addNumbers(a:number,b:number):number {
  return  a+b;
}
console.log(addNumbers(2,3));
console.log(addNumbers(2.5,3.5));


// second question in mental model

function describeInput(a:string|number) {
    if(typeof a=="string"){
        return "You have provided string:"+a;
    }
    else if( typeof a =="number"){
        return "You have provided number:"+a;
    }
}
console.log(describeInput("hi"))
console.log(describeInput(10))