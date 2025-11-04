function naming(firstName: string, lastname?: string): string {
    if(typeof lastname !=='undefined'){
return `${firstName} and the ${lastname}`;
}
else return firstName;
}

console.log(naming("ELyse"))