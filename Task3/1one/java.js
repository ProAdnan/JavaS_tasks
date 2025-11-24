


function tellFortune (x,y,z,n){



return "You will be a "+ x + " in " + y +",and married to " + z  + " with " + n + " kids.";




}


let x=prompt("position:");
let y=prompt("Country:");
let z=prompt("partner:");
let n=prompt("kids:");



document.getElementById("result").innerHTML=tellFortune(x,y,z,n);