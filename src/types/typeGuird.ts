 function addOrConcat(a:number|string,b:number|string): any {
      if( typeof a =="string" && typeof b =="string"){
          
          return a.concat(b);
      } 
      else if(typeof a =='number' && typeof b =="number"){
          return a + b;
      }
      
      else{
          return false;
      }
 }
 
 console.log(addOrConcat("10",10))