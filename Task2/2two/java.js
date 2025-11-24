


let r = "";
let num = 1;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
        r += num;
        num+=1;
        r+="\t";
    }
   
    r += "<br>";
}

document.getElementById("result").innerHTML = r;