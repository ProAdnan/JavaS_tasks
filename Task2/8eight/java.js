function fullName(first_Name, last_Name){


    let result=first_Name.concat(" ", last_Name);


return result;


}


let f_n=prompt("First Name:");
let l_n=prompt("Last Name:");



document.getElementById("result").innerHTML=fullName(f_n,l_n);