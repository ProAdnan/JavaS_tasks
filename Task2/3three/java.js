

let r ="";
for (let index = 1; index <= 1000; index++) {
    
    if(index%13==0){
        r+=index +"\t- \t";
    
    }
    
}

document.getElementById("result").innerHTML=r;