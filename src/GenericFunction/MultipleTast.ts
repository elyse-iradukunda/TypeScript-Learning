const randomitem =<K>(a:K[]):K =>{
     const ans = Math.floor(Math.random() * a.length);
     return a[ans];
}

console.log(randomitem([1,2,3,4,5]))
console.log(randomitem(["hi","murahoneza","Jambo"]))

