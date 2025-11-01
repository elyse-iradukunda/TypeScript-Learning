const  digitalRoot = (num:number):number =>{
       
     if(num < 10) return num;

    let numbers: string[] = num.toString().split('');
    let a: number = numbers.reduce((curr,acc)=> curr + parseInt(acc),0)
     return digitalRoot(a)
}
console.log(digitalRoot(1045))