
// enum Users{
//         Guest="1234",
//         Admin="12",
//         Standard="1"
//     }

// let newone= Users.Guest;

// console.log(newone)

enum Role{
  Admin ="Full access",
  User ="Limited access",
   Guest ="Read only"
}
function getPermissions(role:Role){
return role
}

console.log(Role.Guest);