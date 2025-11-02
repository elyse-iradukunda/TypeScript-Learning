const  digitalRoot = (num:number):number =>{
       
     if(num < 10) return num;

    let numbers: string[] = num.toString().split('');
    let a: number = numbers.reduce((curr,acc)=> curr + parseInt(acc),0)
     return digitalRoot(a)
}
console.log(digitalRoot(1045))

//second one but not working 

function addBinarys(a:number,b:number) : string{
    
    let firstInt :string = a.toString(2);
    let secondInt :string = b.toString(2);
    let binary : string = firstInt + secondInt;
    let sum = binary.split('').reduce((a,c)=> a+parseInt(c),0)
    return sum.toString();
}
console.log(addBinary(80,9))

 // this the actual one we can use and simplest 
function addBinary(a: number, b: number) : string{
    return (a+b).toString(2);
}

// finding square root of number in ts
