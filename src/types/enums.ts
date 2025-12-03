
// enum Users{
//         Guest="1234",
//         Admin="12",
//         Standard="1"
//     }

// let newone= Users.Guest;

// console.log(newone)

// enum Role{
//   Admin ="Full access",
//   User ="Limited access",
//    Guest ="Read only"
// }
// function getPermissions(role:Role){
// return role
// }

// console.log(Role.Guest);


function logMessage(){
  
enum LogLevel{
  Info="info",Warning="Warning",Error="Error"
}

 if(  "Info" in LogLevel){
  console.log(true,"");
 }
 else{
  console.log("this")
 }

}
logMessage()